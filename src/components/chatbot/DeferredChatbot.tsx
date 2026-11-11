"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LazyReforbsChatbot = dynamic(() => import("./ReforbsChatbot"), {
  ssr: false,
  loading: () => null,
});

export default function DeferredChatbot() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let activated = false;
    const activate = () => {
      if (activated) return;
      activated = true;
      setShouldLoad(true);
    };

    const events: (keyof WindowEventMap)[] = [
      "pointerdown",
      "touchstart",
      "keydown",
      "scroll",
    ];
    events.forEach((evt) =>
      window.addEventListener(evt, activate, { passive: true, once: true })
    );

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | undefined;
    let timerId: ReturnType<typeof setTimeout> | undefined;

    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(activate, { timeout: 2200 });
    } else {
      timerId = setTimeout(activate, 1800);
    }

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, activate));
      if (idleId !== undefined && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleId);
      }
      if (timerId !== undefined) clearTimeout(timerId);
    };
  }, []);

  if (!shouldLoad) return null;
  return <LazyReforbsChatbot />;
}
