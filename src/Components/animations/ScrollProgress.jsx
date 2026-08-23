import { useEffect, useState } from "react";

/**
 * Thin gold bar pinned to the very top of the viewport that tracks how far the
 * user has scrolled through the page. Sits just above the fixed navbar.
 */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      setProgress(scrollable > 0 ? (scrollTop / scrollable) * 100 : 0);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-[#a4831f] via-[#D4AF37] to-[#f3d878]"
        style={{
          width: `${progress}%`,
          boxShadow: progress > 0 ? "0 0 12px rgba(212,175,55,0.7)" : "none",
        }}
      />
    </div>
  );
}

export default ScrollProgress;
