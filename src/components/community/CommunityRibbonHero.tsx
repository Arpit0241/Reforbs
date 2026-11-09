"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Play, Pause, Compass, Sparkles } from "lucide-react";

interface RibbonCardItem {
  id: number;
  caption: string;
  tag: string;
  image: string;
  aspect: number;
}

const RIBBON_ITEMS: RibbonCardItem[] = [
  {
    id: 1,
    caption: "Living & Social Bonding",
    tag: "Reforbs Community",
    image: "/images/hero-community.webp",
    aspect: 1.65,
  },
  {
    id: 2,
    caption: "Gaming & Chill Lounge",
    tag: "Unwind & Play",
    image: "/images/hero-recreation.webp",
    aspect: 1.6,
  },
  {
    id: 3,
    caption: "Community Feasts & Brunches",
    tag: "Shared Dining",
    image: "/images/hero-dining.webp",
    aspect: 1.65,
  },
  {
    id: 4,
    caption: "Rooftop Jams & Socials",
    tag: "Vibe Nights",
    image: "/images/community-lifestyle.webp",
    aspect: 1.7,
  },
  {
    id: 5,
    caption: "Creative Co-Working Sprints",
    tag: "Work & Connect",
    image: "/images/hero-shared-living.webp",
    aspect: 1.6,
  },
  {
    id: 6,
    caption: "Mindful Mornings & Yoga",
    tag: "Wellness & Growth",
    image: "/images/living-reforbs-way.webp",
    aspect: 1.65,
  },
  {
    id: 7,
    caption: "Festival Vibes & Celebrations",
    tag: "Reforbs Family",
    image: "/images/properties/moksha/image-3.jpg",
    aspect: 1.6,
  },
  {
    id: 8,
    caption: "Late-Night Talks & Stories",
    tag: "Home Atmosphere",
    image: "/images/properties/nirvana/image-2.jpg",
    aspect: 1.65,
  },
];

const CARD_VERTEX_SHADER = `
precision highp float;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;

attribute vec3 position;
attribute vec2 uv;

uniform float u_sheetW;
uniform float u_sheetD;
uniform float u_sheetT;
uniform float u_sheetC;
uniform float u_sheetV;
uniform float u_leanA;
uniform float u_leanW;
uniform float u_diag;
uniform float u_axis;
uniform float u_dent;
uniform float u_hover;
uniform vec2 u_res;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vViewVec;
varying float vShapeSlope;

#define PI 3.141592653589793
#define BANK -0.16
#define REAR_Y 0.1
#define REAR_Z 0.2
#define VTWIST 1.8
#define TAIL 1.0
#define SHIFT -0.2

float ramp(float s) {
  float cs = clamp(s, -1.0, 1.0);
  return cs * (1.5 - 0.5 * cs * cs);
}

float leanSlope(float s) {
  float cs = min(abs(s), 1.0);
  return 1.5 * (1.0 - cs * cs);
}

void main() {
  vUv = uv;
  vec3 p = position;

  // 1. Hover dent inward
  vec2 qDome = 2.0 * uv - 1.0;
  float dome = (1.0 - qDome.x * qDome.x) * (1.0 - qDome.y * qDome.y);
  p.z -= u_hover * u_dent * u_res.y * dome;

  // 2. To world space
  vec4 wp = modelMatrix * vec4(p, 1.0);

  // 3. Axis swap for phone
  if (u_axis > 0.5) {
    float tmp = wp.x;
    wp.x = wp.y;
    wp.y = tmp;
  }

  float W = max(u_sheetW, 0.001);
  float wx = wp.x;
  float q = (wx / W) * u_sheetT + SHIFT;
  float expTail = exp(-TAIL * q * q);
  float sCurve = sin(PI * q);
  float bowl = 1.0 - q * q;
  float shape = mix(bowl, sCurve, u_sheetC) * expTail;

  float bowlPrime = -2.0 * q * (1.0 + TAIL * (1.0 - q * q));
  float essPrime = PI * cos(PI * q) - 2.0 * TAIL * q * sCurve;
  float shapeSlope = mix(bowlPrime, essPrime, u_sheetC) * expTail;
  vShapeSlope = shapeSlope;

  // 4. Wind & roll
  float rollAng = BANK * (shapeSlope / PI) * u_sheetC;
  if (u_sheetV > 0.0) {
    float xRatio = wx / W;
    rollAng += VTWIST * u_sheetV * smoothstep(0.3, 0.9, abs(xRatio)) * sign(xRatio);
  }

  // Rotate (wp.y, wp.z) around X
  float cosA = cos(rollAng);
  float sinA = sin(rollAng);
  float yRot = wp.y * cosA - wp.z * sinA;
  float zRot = wp.y * sinA + wp.z * cosA;
  wp.y = yRot;
  wp.z = zRot;

  // 5. Bend in depth
  wp.z += -u_sheetD * shape;

  // 6. Diagonal and rear lift
  wp.y += u_diag * wx;
  if (u_sheetV > 0.0) {
    float m = 1.0 - smoothstep(-1.0, 0.3, wx / W);
    wp.y += REAR_Y * W * u_sheetV * m;
    wp.z += REAR_Z * W * u_sheetV * m;
  }

  // 7. Lean (door)
  if (abs(u_leanW) > 0.001) {
    wp.z += u_leanA * ramp(wx / u_leanW);
  }

  // Swap back if axis == 1
  if (u_axis > 0.5) {
    float tmp = wp.x;
    wp.x = wp.y;
    wp.y = tmp;
  }

  // Analytic normal calculation
  float dz_dx = -u_sheetD * shapeSlope * (u_sheetT / W);
  if (abs(u_leanW) > 0.001) {
    dz_dx += (u_leanA / u_leanW) * leanSlope(wx / u_leanW);
  }
  vec3 norm = normalize(vec3(-dz_dx, 0.0, 1.0));
  float nY = norm.y * cosA - norm.z * sinA;
  float nZ = norm.y * sinA + norm.z * cosA;
  vNormal = normalize(vec3(norm.x, nY, nZ));

  vWorldPos = wp.xyz;
  vec4 camPos = vec4(0.0, 0.0, 41.18, 1.0);
  vViewVec = normalize(camPos.xyz - wp.xyz);

  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const CARD_FRAGMENT_SHADER = `
precision highp float;

uniform sampler2D u_media;
uniform sampler2D u_overlay;
uniform vec4 u_crop;
uniform vec2 u_res;
uniform float u_corner;
uniform float u_sheetD;
uniform float u_shade;
uniform float u_shadeS;
uniform float u_alpha;
uniform float u_hover;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vViewVec;

float roundedBoxSDF(vec2 p, vec2 b, float r) {
  vec2 d = abs(p) - b + vec2(r);
  return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
}

void main() {
  // 1. Cover crop media UV
  vec2 mediaUv = u_crop.xy + vUv * u_crop.zw;
  vec4 mediaCol = texture2D(u_media, mediaUv);

  // Sample overlay
  vec4 overlayCol = texture2D(u_overlay, vUv);

  // Composite overlay on top of media
  vec3 rgb = mix(mediaCol.rgb, overlayCol.rgb, overlayCol.a);

  // 2. Depth darkening
  if (u_shade > 0.5 && u_sheetD > 0.001) {
    float depth = clamp((u_sheetD - vWorldPos.z) / (2.0 * u_sheetD), 0.0, 1.0);
    float darkFactor = u_shade * 0.7 * pow(depth, u_shadeS);
    rgb = mix(rgb, vec3(0.03, 0.05, 0.07), darkFactor);
  }

  // 3. Lighting (diffuse + Blinn-Phong specular)
  vec3 L = normalize(vec3(-0.4, 0.5, 1.0));
  vec3 N = normalize(vNormal);
  float NdotL = max(0.0, dot(N, L));
  float diffuse = 1.0 - 0.12 * (1.0 - (NdotL * 0.5 + 0.5));
  rgb *= diffuse;

  // Specular sheen
  vec3 V = normalize(vViewVec);
  vec3 H = normalize(L + V);
  float NdotH = max(0.0, dot(N, H));
  float spec = pow(NdotH, 48.0) * 0.35;
  rgb += vec3(spec);

  // Hover sheen
  if (u_hover > 0.01) {
    rgb += vec3(0.08, 0.14, 0.16) * u_hover;
  }

  // 4. Anti-aliased rounded corners
  float aspect = u_res.x / max(u_res.y, 0.001);
  vec2 pBox = (vUv - 0.5) * vec2(aspect, 1.0);
  vec2 bBox = vec2(aspect * 0.5, 0.5);
  float dist = roundedBoxSDF(pBox, bBox, u_corner);
  float cornerAlpha = 1.0 - smoothstep(0.0, fwidth(dist) * 1.5, dist);

  float finalAlpha = cornerAlpha * u_alpha;
  if (finalAlpha < 0.001) discard;

  gl_FragColor = vec4(rgb, finalAlpha);
}
`;

const FLOOR_VERTEX_SHADER = `
precision highp float;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float u_leanA;
uniform float u_leanW;
uniform float u_runO;

varying vec2 vUv;
varying vec3 vWorldPos;
varying float vFar;

float ramp(float s) {
  float cs = clamp(s, -1.0, 1.0);
  return cs * (1.5 - 0.5 * cs * cs);
}

void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);

  // Lean with the ribbon
  if (abs(u_leanW) > 0.001) {
    wp.z += u_leanA * ramp(wp.x / u_leanW);
  }

  vFar = -wp.z / max(u_runO, 0.001);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const FLOOR_FRAGMENT_SHADER = `
precision highp float;

varying vec2 vUv;
varying vec3 vWorldPos;
varying float vFar;

uniform vec2 u_cells;
uniform float u_alpha;

void main() {
  float fade = 1.0 - smoothstep(0.12, 0.92, vFar);

  // Reforbs midnight floor
  vec3 col = vec3(0.02, 0.035, 0.045);

  // Contact shadow
  float shadow = 1.0 - 0.55 * exp(-14.0 * abs(vFar));
  col *= shadow;

  // Grid lines
  vec2 g = vec2(vUv.x * u_cells.x, vFar * u_cells.y);
  vec2 f = abs(fract(g) - 0.5);
  vec2 fw = fwidth(g);
  float lineX = 1.0 - smoothstep(0.0, 1.5 * fw.x, f.x);
  float lineY = 1.0 - smoothstep(0.0, 1.5 * fw.y, f.y);
  float line = max(lineX, lineY);

  // Glowing Reforbs emerald grid lines
  vec3 gridCol = mix(vec3(0.0, 0.48, 0.48), vec3(0.2, 0.8, 0.75), fade);
  col += line * gridCol * 0.28 * fade;

  // Soft depth glow
  col += vec3(0.0, 0.15, 0.18) * exp(-5.0 * abs(vFar)) * fade * 0.2;

  float outAlpha = u_alpha * fade;
  if (outAlpha < 0.001) discard;

  gl_FragColor = vec4(col, outAlpha);
}
`;

export default function CommunityRibbonHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeItem, setActiveItem] = useState<RibbonCardItem>(RIBBON_ITEMS[0]);
  const isPlayingRef = useRef(true);
  isPlayingRef.current = isPlaying;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let destroyed = false;

    // Viewport dimensions
    let vw = container.clientWidth || 1200;
    let vh = container.clientHeight || 560;

    // Design unit
    const getUnit = () => (vw > 649 ? vw / 1500 : vw / 390);

    // Three.js setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(vw, vh);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x060a0f, 1);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(53.4, vw / vh, 0.1, 2000);
    camera.position.set(0, 0, 41.18);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    // World calculation
    const fovRad = (53.4 * Math.PI) / 180;
    const H = Math.tan(fovRad / 2) * 41.18;
    const W = H * (vw / vh);
    const k = (2 * H) / vh;

    // Layout calculation
    const isDesktop = () => vw > 649;
    const U = getUnit();

    // Card sizes
    let cardH = isDesktop() ? Math.min(0.48 * vh, 440 * U) : (vw - 40 * U) / 1.65;
    let cardGap = isDesktop() ? 16 * U : 24 * U;

    interface CardObj {
      mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
      width: number;
      height: number;
      basePos: number;
      overlayTex: THREE.CanvasTexture;
      hover: number;
      item: RibbonCardItem;
    }

    const cards: CardObj[] = [];
    const cardGeom = new THREE.PlaneGeometry(1, 1, 96, 24);

    // Build overlay canvas texture
    const createOverlayTexture = (item: RibbonCardItem, w: number, h: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      const ctx = canvas.getContext("2d");
      if (!ctx) return new THREE.CanvasTexture(canvas);

      ctx.scale(dpr, dpr);

      // Dark gradient overlay at bottom for maximum contrast
      const grad = ctx.createLinearGradient(0, h * 0.35, 0, h);
      grad.addColorStop(0, "rgba(5, 10, 15, 0)");
      grad.addColorStop(0.5, "rgba(5, 10, 15, 0.65)");
      grad.addColorStop(1, "rgba(5, 10, 15, 0.95)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Top Tag pill
      const tagText = item.tag.toUpperCase();
      ctx.font = `800 ${Math.max(10, Math.round(11 * U))}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      const tagWidth = ctx.measureText(tagText).width;
      const tagPadX = 12 * U;
      const tagPadY = 6 * U;
      const tagX = 20 * U;
      const tagY = 20 * U;

      // Tag pill bg
      ctx.fillStyle = "rgba(0, 122, 122, 0.85)";
      ctx.beginPath();
      ctx.roundRect(tagX, tagY, tagWidth + tagPadX * 2, 22 * U, 11 * U);
      ctx.fill();

      // Tag pill text
      ctx.fillStyle = "#FFDE59";
      ctx.textBaseline = "middle";
      ctx.fillText(tagText, tagX + tagPadX, tagY + 11 * U);

      // Title at bottom left
      ctx.shadowColor = "rgba(0,0,0,0.8)";
      ctx.shadowBlur = 12;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;
      ctx.fillStyle = "#FFFFFF";
      ctx.font = `800 ${Math.max(16, Math.round(20 * U))}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      ctx.textBaseline = "bottom";
      ctx.fillText(item.caption, 22 * U, h - 22 * U);

      // Tagline "#LIVETHEVIBES"
      ctx.fillStyle = "rgba(255, 222, 89, 0.9)";
      ctx.font = `700 ${Math.max(10, Math.round(11 * U))}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      ctx.fillText("#LIVETHEVIBES", 22 * U, h - 48 * U);

      // Right action pill button
      const pillR = 14 * U;
      const pillX = w - 24 * U - pillR;
      const pillY = h - 24 * U - pillR;

      ctx.shadowColor = "transparent";
      ctx.beginPath();
      ctx.arc(pillX, pillY, pillR, 0, Math.PI * 2);
      ctx.fillStyle = "#007A7A";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.4)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Plus / arrow icon
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      const arm = 5 * U;
      ctx.moveTo(pillX - arm, pillY);
      ctx.lineTo(pillX + arm, pillY);
      ctx.moveTo(pillX, pillY - arm);
      ctx.lineTo(pillX, pillY + arm);
      ctx.stroke();

      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.generateMipmaps = true;
      return tex;
    };

    // Preload textures
    const textureLoader = new THREE.TextureLoader();
    let runningPos = 0;

    RIBBON_ITEMS.forEach((item) => {
      const w = cardH * item.aspect;
      const h = cardH;

      // Cover crop calculation
      const ma = item.aspect;
      const a = item.aspect;
      let scaleX = 1;
      let scaleY = 1;
      if (a > ma) {
        scaleY = ma / a;
      } else {
        scaleX = a / ma;
      }
      const offsetX = (1 - scaleX) / 2;
      const offsetY = (1 - scaleY) / 2;

      const mediaTex = textureLoader.load(item.image);
      mediaTex.colorSpace = THREE.SRGBColorSpace;

      const overlayTex = createOverlayTexture(item, w, h);

      const mat = new THREE.ShaderMaterial({
        vertexShader: CARD_VERTEX_SHADER,
        fragmentShader: CARD_FRAGMENT_SHADER,
        uniforms: {
          u_sheetW: { value: W },
          u_sheetD: { value: W * 0.2 },
          u_sheetT: { value: 1.15 },
          u_sheetC: { value: 1.0 },
          u_sheetV: { value: 0.0 },
          u_leanA: { value: -0.12 * W },
          u_leanW: { value: W },
          u_diag: { value: 0.02 },
          u_axis: { value: 0.0 },
          u_dent: { value: 0.035 },
          u_hover: { value: 0.0 },
          u_res: { value: new THREE.Vector2(w * k, h * k) },
          u_crop: { value: new THREE.Vector4(offsetX, offsetY, scaleX, scaleY) },
          u_media: { value: mediaTex },
          u_overlay: { value: overlayTex },
          u_corner: { value: (20 * U) / h },
          u_shade: { value: 1.0 },
          u_shadeS: { value: 1.0 },
          u_alpha: { value: 0.0 },
        },
        transparent: true,
        depthTest: false,
        depthWrite: false,
      });

      const mesh = new THREE.Mesh(cardGeom, mat);
      mesh.scale.set(w * k, h * k, 1);
      scene.add(mesh);

      cards.push({
        mesh,
        width: w,
        height: h,
        basePos: runningPos,
        overlayTex,
        hover: 0,
        item,
      });

      runningPos += w + cardGap;
    });

    const totalLoopLength = runningPos;

    // Floor setup
    const floorH = cardH * k;
    const floorY = -floorH / 2 - 0.06 * H;
    const floorRunO = 6 * H;
    const floorNear = Math.min(41.18 * (1 - Math.abs(floorY) / H) + 0.2 * H, 41.18 * 0.8);
    const floorGeom = new THREE.PlaneGeometry(1, 1, 48, 24);
    floorGeom.rotateX(-Math.PI / 2);

    const floorMat = new THREE.ShaderMaterial({
      vertexShader: FLOOR_VERTEX_SHADER,
      fragmentShader: FLOOR_FRAGMENT_SHADER,
      uniforms: {
        u_leanA: { value: -0.12 * W },
        u_leanW: { value: W },
        u_runO: { value: floorRunO },
        u_cells: { value: new THREE.Vector2(24, 18) },
        u_alpha: { value: 0.0 },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const floorMesh = new THREE.Mesh(floorGeom, floorMat);
    floorMesh.scale.set(W * 8, 1, floorNear + floorRunO);
    floorMesh.position.set(0, floorY, (floorNear - floorRunO) / 2);
    scene.add(floorMesh);

    // Scroll & motion state
    let target = 100;
    let current = 100;
    let pendingScroll = 0;
    let isDragging = false;
    let startPointerX = 0;
    let lastPointerX = 0;
    let userInteractingUntil = 0;
    const autoScrollSpeed = 1.1; // Smooth ambient glide

    // Fade-in timer
    let entranceTime = 0;

    // Virtual scroll handlers
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      target += delta * 0.95;
      userInteractingUntil = performance.now() + 1400;
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startPointerX = e.clientX;
      lastPointerX = e.clientX;
      userInteractingUntil = performance.now() + 2000;
      container.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = lastPointerX - e.clientX;
      lastPointerX = e.clientX;
      target += dx * 1.6;
      userInteractingUntil = performance.now() + 2000;
    };

    const onPointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      container.style.cursor = "grab";
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    container.style.cursor = "grab";

    // Main animation loop
    let lastTime = performance.now();

    const animate = () => {
      if (destroyed) return;
      animId = requestAnimationFrame(animate);

      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      // Autoscroll continuous glide when not manually dragging
      if (isPlayingRef.current && now > userInteractingUntil) {
        target += autoScrollSpeed * dt * 60;
      }

      // Smooth lag dampening
      const ratio = Math.min(dt * 60, 2);
      current += (target - current) * 0.1 * ratio;

      // Velocity calculation (drives ribbon bending and twist)
      const diff = target - current;
      const normDiff = Math.tanh(diff / 500);
      const vel = normDiff * Math.abs(normDiff);
      const velMag = Math.min(1.0, Math.abs(vel));

      // Dynamic depth & twist
      const curD = W * 0.2 * (1.0 + 1.1 * velMag);
      const curV = velMag;

      // Entrance fade-in
      entranceTime += dt;
      const cardAlpha = Math.min(1.0, entranceTime / 0.7);
      const floorAlpha = Math.min(0.85, entranceTime / 0.9);
      floorMat.uniforms.u_alpha.value = floorAlpha;

      // Layout coordinates
      const leftBound = -(totalLoopLength - vw) / 2;

      let closestToCenter: CardObj | null = null;
      let minCenterDist = Infinity;

      // Position each card
      cards.forEach((card) => {
        // Endless loop wrap
        const rawX = card.basePos - current;
        const normX = ((rawX - leftBound) % totalLoopLength + totalLoopLength) % totalLoopLength + leftBound;

        // Convert CSS rect to world position
        const worldX = (normX + card.width / 2 - vw / 2) * k;
        const worldY = -(vh / 2 - vh / 2) * k; // centered vertically

        card.mesh.position.set(worldX, worldY, 0);

        // Update shaders
        const uniforms = card.mesh.material.uniforms;
        uniforms.u_sheetD.value = curD;
        uniforms.u_sheetV.value = curV;
        uniforms.u_alpha.value = cardAlpha;

        // Check center proximity for active caption display
        const distFromCenter = Math.abs(normX + card.width / 2 - vw / 2);
        if (distFromCenter < minCenterDist) {
          minCenterDist = distFromCenter;
          closestToCenter = card;
        }
      });

      if (closestToCenter && (closestToCenter as CardObj).item.id !== activeItem.id) {
        setActiveItem((closestToCenter as CardObj).item);
      }

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      vw = container.clientWidth;
      vh = container.clientHeight;
      camera.aspect = vw / vh;
      camera.updateProjectionMatrix();
      renderer.setSize(vw, vh);
    };

    window.addEventListener("resize", onResize);

    return () => {
      destroyed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      // Clean up Three.js resources
      cards.forEach((c) => {
        c.mesh.geometry.dispose();
        c.mesh.material.dispose();
        c.overlayTex.dispose();
      });
      floorGeom.dispose();
      floorMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] md:h-[620px] bg-[#060a0f] overflow-hidden select-none">
      {/* 3D WebGL Canvas mounts here */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle vignette gradients */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#060a0f] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#060a0f] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111827] via-[#060a0f]/60 to-transparent pointer-events-none z-10" />

      {/* Top Floating Badges / UI */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between pointer-events-none z-20">
        <div className="inline-flex items-center gap-2 bg-[#060a0f]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-teal-500/30 text-white shadow-lg pointer-events-auto">
          <Sparkles size={14} className="text-[#FFDE59] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-teal-300 font-heading">
            Live WebGL Ribbon • Reforbs Tribe
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#060a0f]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white/70 text-[11px] font-medium">
            <Compass size={13} className="text-teal-400" /> Drag or scroll to explore
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 bg-[#060a0f]/80 hover:bg-[#007A7A] transition-colors backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-bold shadow-md cursor-pointer"
            aria-label={isPlaying ? "Pause autoscroll" : "Resume autoscroll"}
          >
            {isPlaying ? (
              <>
                <Pause size={12} className="text-[#FFDE59]" /> Pause
              </>
            ) : (
              <>
                <Play size={12} className="text-[#FFDE59]" /> Auto-Glide
              </>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Center Active Indicator Pill */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none z-20">
        <div className="bg-[#060a0f]/85 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full shadow-2xl flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FFDE59] animate-ping" />
          <span className="text-xs sm:text-sm font-bold text-white font-heading">
            {activeItem.caption}
          </span>
          <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider bg-teal-950/60 px-2 py-0.5 rounded-full border border-teal-500/40">
            {activeItem.tag}
          </span>
        </div>
      </div>
    </div>
  );
}
