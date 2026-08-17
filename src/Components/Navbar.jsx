import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/lordpart point logo.png";
import { NAV_LINKS } from "./navLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Solid background once the user scrolls away from the hero
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const linkClasses = ({ isActive }) =>
    [
      "relative py-1 transition-colors duration-200 hover:text-[#D4AF37]",
      isActive
        ? "text-[#D4AF37] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#D4AF37]"
        : "text-white",
    ].join(" ");

  return (
    <header
      className={[
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-[#D4AF37]/30 bg-black/95 py-3 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-black/60 to-transparent py-5",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2" aria-label="Lordpart Point home">
          <img
            src={logo}
            alt="Lordpart Point Global Limited"
            className="h-10 w-auto md:h-12"
          />
          <span className="hidden leading-tight text-white sm:block">
            <span className="block text-sm font-bold tracking-wide md:text-base">
              LORDPART POINT
            </span>
            <span className="block text-[9px] tracking-[0.25em] text-[#D4AF37] md:text-[10px]">
              GLOBAL LIMITED
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} className={linkClasses}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-lg border border-white/25 p-2 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#D4AF37]/20 bg-black/95 md:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-2 text-base font-medium sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="border-b border-white/10 last:border-b-0">
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    [
                      "block py-4 transition-colors",
                      isActive ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
