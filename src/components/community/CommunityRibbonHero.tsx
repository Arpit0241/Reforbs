"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

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

// Card Vertex Shader (Three.js provides position, uv, modelMatrix, viewMatrix, projectionMatrix automatically)
const CARD_VERTEX_SHADER = `
uniform float u_sheetW;
uniform float u_sheetD;
uniform float u_sheetT;
uniform float u_sheetC;
uniform float u_sheetV;
uniform float u_leanA;
uniform float u_leanW;
uniform float u_diag;

varying vec2 vUv;
varying vec3 vWorldPos;

#define PI 3.141592653589793
#define BANK -0.16
#define VTWIST 1.8
#define TAIL 1.0
#define SHIFT -0.2

float ramp(float s) {
  float cs = clamp(s, -1.0, 1.0);
  return cs * (1.5 - 0.5 * cs * cs);
}

void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);

  float W = max(u_sheetW, 0.001);
  float wx = wp.x;
  float q = (wx / W) * u_sheetT + SHIFT;
  float shape = sin(PI * q) * exp(-TAIL * q * q);

  // Surface roll
  float rollAng = BANK * (cos(PI * q) * exp(-TAIL * q * q)) * u_sheetC;
  if (u_sheetV > 0.0) {
    float xRatio = wx / W;
    rollAng += VTWIST * u_sheetV * smoothstep(0.3, 0.9, abs(xRatio)) * sign(xRatio);
  }

  // Rotate around X
  float cosA = cos(rollAng);
  float sinA = sin(rollAng);
  float yRot = wp.y * cosA - wp.z * sinA;
  float zRot = wp.y * sinA + wp.z * cosA;
  wp.y = yRot;
  wp.z = zRot;

  // Depth S-curve deformation
  wp.z += -u_sheetD * shape;

  // Diagonal climb
  wp.y += u_diag * wx;

  // Lean (swings slightly away on right and towards camera on left)
  if (abs(u_leanW) > 0.001) {
    wp.z += u_leanA * ramp(wx / u_leanW);
  }

  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

// Card Fragment Shader
const CARD_FRAGMENT_SHADER = `
precision highp float;

uniform sampler2D u_tex;
uniform float u_alpha;
uniform float u_sheetD;

varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  vec4 texColor = texture2D(u_tex, vUv);
  
  // Depth shading: receding parts darken gracefully into ambient stage
  if (u_sheetD > 0.01) {
    float depth = clamp((u_sheetD - vWorldPos.z) / (2.0 * u_sheetD), 0.0, 1.0);
    texColor.rgb = mix(texColor.rgb, vec3(0.04, 0.06, 0.09), depth * 0.42);
  }

  // Soft rounded card border fade
  vec2 uvDist = abs(vUv - 0.5) * 2.0;
  float edge = max(uvDist.x, uvDist.y);
  float borderFade = 1.0 - smoothstep(0.97, 1.0, edge);

  gl_FragColor = vec4(texColor.rgb, texColor.a * u_alpha * borderFade);
}
`;

// Floor Vertex Shader
const FLOOR_VERTEX_SHADER = `
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

  if (abs(u_leanW) > 0.001) {
    wp.z += u_leanA * ramp(wp.x / u_leanW);
  }

  vFar = -wp.z / max(u_runO, 0.001);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

// Floor Fragment Shader
const FLOOR_FRAGMENT_SHADER = `
precision highp float;

varying vec2 vUv;
varying vec3 vWorldPos;
varying float vFar;

uniform vec2 u_cells;
uniform float u_alpha;

void main() {
  float fade = 1.0 - smoothstep(0.08, 0.95, vFar);

  vec3 col = vec3(0.02, 0.035, 0.045);
  float shadow = 1.0 - 0.55 * exp(-14.0 * abs(vFar));
  col *= shadow;

  vec2 g = vec2(vUv.x * u_cells.x, vFar * u_cells.y);
  vec2 f = abs(fract(g) - 0.5);
  vec2 fw = fwidth(g);
  float lineX = 1.0 - smoothstep(0.0, 1.5 * fw.x, f.x);
  float lineY = 1.0 - smoothstep(0.0, 1.5 * fw.y, f.y);
  float line = max(lineX, lineY);

  vec3 gridCol = mix(vec3(0.0, 0.48, 0.48), vec3(0.2, 0.85, 0.75), fade);
  col += line * gridCol * 0.35 * fade;

  col += vec3(0.0, 0.2, 0.22) * exp(-5.0 * abs(vFar)) * fade * 0.25;

  float outAlpha = u_alpha * fade;
  gl_FragColor = vec4(col, outAlpha);
}
`;

export default function CommunityRibbonHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let destroyed = false;

    // Viewport dimensions
    let vw = container.clientWidth || window.innerWidth || 1200;
    let vh = container.clientHeight || 560;

    // Renderer setup
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

    // Card sizes
    const cardH = Math.min(0.55 * vh, 460);
    const cardGap = cardH * 0.18;

    interface CardObj {
      mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
      width: number;
      height: number;
      basePos: number;
      canvasTexture: THREE.CanvasTexture;
      item: RibbonCardItem;
    }

    const cards: CardObj[] = [];
    const cardGeom = new THREE.PlaneGeometry(1, 1, 64, 16);

    // Build immediate self-contained canvas texture with guaranteed image load
    const createCardCanvasTexture = (item: RibbonCardItem, w: number, h: number) => {
      const canvas = document.createElement("canvas");
      canvas.width = 960;
      canvas.height = Math.round(960 / item.aspect);
      const ctx = canvas.getContext("2d")!;

      const cw = canvas.width;
      const ch = canvas.height;

      // Initial backdrop: refined dark emerald gradient so it is never blank
      const drawInitialContent = () => {
        const bgGrad = ctx.createLinearGradient(0, 0, cw, ch);
        bgGrad.addColorStop(0, "#081d24");
        bgGrad.addColorStop(0.5, "#0b2c34");
        bgGrad.addColorStop(1, "#06131a");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, cw, ch);

        // Watermark logo
        ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
        ctx.font = "900 64px -apple-system, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("REFORBS", cw / 2, ch / 2 - 20);

        renderCardOverlay();
      };

      const renderCardOverlay = () => {
        // Bottom readability gradient
        const scrim = ctx.createLinearGradient(0, ch * 0.35, 0, ch);
        scrim.addColorStop(0, "rgba(6, 12, 20, 0)");
        scrim.addColorStop(0.5, "rgba(6, 12, 20, 0.65)");
        scrim.addColorStop(1, "rgba(6, 12, 20, 0.95)");
        ctx.fillStyle = scrim;
        ctx.fillRect(0, 0, cw, ch);

        // Tag pill at top-left
        const tagText = item.tag.toUpperCase();
        ctx.font = "800 22px -apple-system, BlinkMacSystemFont, sans-serif";
        ctx.textAlign = "left";
        const tagWidth = ctx.measureText(tagText).width;
        const tagPadX = 24;
        const tagH = 44;
        const tagX = 40;
        const tagY = 40;

        ctx.fillStyle = "#007A7A";
        ctx.beginPath();
        ctx.rect(tagX, tagY, tagWidth + tagPadX * 2, tagH);
        ctx.fill();

        ctx.fillStyle = "#FFDE59";
        ctx.textBaseline = "middle";
        ctx.fillText(tagText, tagX + tagPadX, tagY + tagH / 2);

        // Title at bottom
        ctx.shadowColor = "rgba(0,0,0,0.9)";
        ctx.shadowBlur = 16;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 42px -apple-system, BlinkMacSystemFont, sans-serif";
        ctx.textBaseline = "bottom";
        ctx.fillText(item.caption, 40, ch - 40);

        // Subtitle "#LIVETHEVIBES"
        ctx.fillStyle = "#FFDE59";
        ctx.font = "800 22px -apple-system, BlinkMacSystemFont, sans-serif";
        ctx.fillText("#LIVETHEVIBES", 40, ch - 96);
        ctx.shadowColor = "transparent";

        // Card sleek outline
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 4;
        ctx.strokeRect(2, 2, cw - 4, ch - 4);
      };

      drawInitialContent();

      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.generateMipmaps = true;

      // Load photographic image asynchronously and re-draw seamlessly
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = item.image;
      img.onload = () => {
        if (destroyed) return;
        // Draw photo cover-crop
        const imgAspect = img.width / img.height;
        const canvasAspect = cw / ch;
        let sx = 0,
          sy = 0,
          sw = img.width,
          sh = img.height;
        if (imgAspect > canvasAspect) {
          sw = img.height * canvasAspect;
          sx = (img.width - sw) / 2;
        } else {
          sh = img.width / canvasAspect;
          sy = (img.height - sh) / 2;
        }
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
        renderCardOverlay();
        tex.needsUpdate = true;
      };

      return tex;
    };

    let runningPos = 0;

    RIBBON_ITEMS.forEach((item) => {
      const w = cardH * item.aspect;
      const h = cardH;

      const canvasTex = createCardCanvasTexture(item, w, h);

      const mat = new THREE.ShaderMaterial({
        vertexShader: CARD_VERTEX_SHADER,
        fragmentShader: CARD_FRAGMENT_SHADER,
        uniforms: {
          u_sheetW: { value: W },
          u_sheetD: { value: W * 0.22 },
          u_sheetT: { value: 1.15 },
          u_sheetC: { value: 1.0 },
          u_sheetV: { value: 0.0 },
          u_leanA: { value: -0.12 * W },
          u_leanW: { value: W },
          u_diag: { value: 0.02 },
          u_tex: { value: canvasTex },
          u_alpha: { value: 1.0 },
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
        canvasTexture: canvasTex,
        item,
      });

      runningPos += w + cardGap;
    });

    const totalLoopLength = runningPos;

    // Perspective floor setup
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
        u_alpha: { value: 0.85 },
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

    // Scroll & continuous autoscroll motion
    let target = 100;
    let current = 100;
    let isDragging = false;
    let lastPointerX = 0;
    const autoScrollSpeed = 1.35; // Continuous smooth glide

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      target += delta * 1.1;
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      lastPointerX = e.clientX;
      container.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = lastPointerX - e.clientX;
      lastPointerX = e.clientX;
      target += dx * 1.5;
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

    let lastTime = performance.now();

    const animate = () => {
      if (destroyed) return;
      animId = requestAnimationFrame(animate);

      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      // Autoscroll continuously forward
      target += autoScrollSpeed * dt * 60;

      // Smooth lag dampening
      const ratio = Math.min(dt * 60, 2);
      current += (target - current) * 0.08 * ratio;

      // Dynamic depth & velocity bend
      const diff = target - current;
      const normDiff = Math.tanh(diff / 500);
      const vel = normDiff * Math.abs(normDiff);
      const velMag = Math.min(1.0, Math.abs(vel));

      const curD = W * 0.22 * (1.0 + 1.1 * velMag);
      const curV = velMag;

      const leftBound = -(totalLoopLength - vw) / 2;

      // Position each card along continuous ribbon
      cards.forEach((card) => {
        const rawX = card.basePos - current;
        const normX =
          (((rawX - leftBound) % totalLoopLength) + totalLoopLength) % totalLoopLength +
          leftBound;

        const worldX = (normX + card.width / 2 - vw / 2) * k;
        const worldY = 0;

        card.mesh.position.set(worldX, worldY, 0);

        const uniforms = card.mesh.material.uniforms;
        uniforms.u_sheetD.value = curD;
        uniforms.u_sheetV.value = curV;
      });

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // Responsive resize
    const onResize = () => {
      if (!container) return;
      vw = container.clientWidth || window.innerWidth;
      vh = container.clientHeight || 560;
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

      cards.forEach((c) => {
        c.mesh.geometry.dispose();
        c.mesh.material.dispose();
        c.canvasTexture.dispose();
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
    <div className="relative w-full h-[480px] sm:h-[540px] md:h-[600px] bg-[#060a0f] overflow-hidden select-none">
      {/* 3D WebGL Canvas mounts here */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Edge gradient vignettes */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#060a0f] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#060a0f] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060a0f] to-transparent pointer-events-none z-10" />
    </div>
  );
}
