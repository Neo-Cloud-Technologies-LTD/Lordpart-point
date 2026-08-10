import logo from "../assets/lordpart point logo.png";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 lg:px-12 py-6">
        
            {/* Logo */}
            <div className="flex items-center">
                <img
                    src={logo}
                    alt="Lordpart Point Logo"
                    className="h-12 md:h-14 w-auto cursor-pointer"
                />
                <div className="block  text-white font-bold cursor-pointer">
                    <h1 className="text-xl">LORDPART POINT</h1>
                    <p className="font-700">Global Limited</p>
                </div>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-8 text-white font-medium text-sm">
                <li className="cursor-pointer">
                    Home
                </li>

                <li className="cursor-pointer border-b-2 border-[#D4AF37] pb-1">
                    About Us
                </li>

                <li className="cursor-pointer">
                    Projects
                </li>

                <li className="cursor-pointer">
                    Services
                </li>

                <li className="cursor-pointer">
                    Contact Us
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;