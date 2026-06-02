import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    let x = 0, y = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    let raf = 0;
    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    el.style.opacity = "1";
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] h-5 w-5 rounded-full opacity-0 hidden md:block"
      style={{
        background: "radial-gradient(circle, hsl(271 91% 70% / 0.9), hsl(271 91% 60% / 0.2) 60%, transparent 70%)",
        boxShadow: "0 0 18px hsl(271 91% 65% / 0.7)",
        mixBlendMode: "screen",
      }}
    />
  );
};

export default CustomCursor;
