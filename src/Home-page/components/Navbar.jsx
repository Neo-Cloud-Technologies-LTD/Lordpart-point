import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-6 z-50">
      <img src={logo} alt="Lordpart Point" className="w-52" />

      <ul className="flex gap-10 text-white font-semibold">
        <li className="cursor-pointer hover:text-yellow-400">Home</li>
        <li className="cursor-pointer hover:text-yellow-400">About Us</li>
        <li className="cursor-pointer hover:text-yellow-400">Projects</li>
        <li className="cursor-pointer hover:text-yellow-400">Services</li>
        <li className="cursor-pointer hover:text-yellow-400">Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;