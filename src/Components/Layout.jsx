import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollProgress from "./animations/ScrollProgress";

/**
 * Shared shell for every page: scroll progress bar + one navbar + scroll reset
 * on navigation. The `key={pathname}` on <main> remounts sections per route so
 * every page replays its scroll reveals on arrival.
 */
function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" avoids fighting the global `scroll-behavior: smooth`
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgress />
      <Navbar />
      <main key={pathname}>
        <Outlet />
      </main>
    </div>
  );
}


export default Layout;
