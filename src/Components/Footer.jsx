import { Link } from "react-router-dom";
import {MapPin, Phone, Mail} from "lucide-react";
import logo from "../assets/lordpart point logo.png";
import { NAV_LINKS } from "./navLinks";

function Footer() {
  return (
    <footer className="bg-black border-x border-b border-[#D4AF37]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="Lordpart Point Logo"
                className="h-12 md:h-14 w-auto"
              />
              <div className="block  text-white font-bold">
                <h1 className="text-xl">LORDPART POINT</h1>
                <p className="font-700">Global Limited</p>
              </div>
            </div>

            <p className="text-white leading-8 ml-15 mt-2">
              Building the future with precision,
              integrity, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300 font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="transition-colors hover:text-[#D4AF37]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-xl mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300 font-semibold">
              {[
                "Building Construction",
                "Infrastructure",
                "Project Management",
                "Design & Build",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="transition-colors hover:text-[#D4AF37]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-xl mb-6">
              Contact Us
            </h3>

            <div className="space-y-6 font-semibold">
              <div className="flex items-start gap-3">
                <MapPin
                  className="text-[#D4AF37] mt-1"
                  size={60}
                />

                <p className="text-gray-300">
                  1st Avenue , MIB plaza Gwarinpa
                  NEO CLOUD TECHNOLOGIES
                  Abuja, Nigeria.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  className="text-[#D4AF37]"
                  size={25}
                />

                <p className="text-gray-300">
                  08169198180
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  className="text-[#D4AF37]"
                  size={30}
                />

                <p className="text-gray-300 break-all">
                  neocloudtechnologies@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The dividing line */}
      <div className="border-t border-yellow-400/30"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-12 lg:px-14 py-8 flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-white">
        <p>
          &copy;2026 LORDPART POINT GLOBAL LIMITED NIGERIA LTD
        </p>

        <div className="flex items-center gap-5">
          <a href="#">Privacy Policy</a>
          <div className="w-px h-12 bg-gray-600"></div>
          <a href="#">Terms of services</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;