import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

/**
 * Shared shell for every page: one navbar + scroll reset on navigation.
 */
function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
