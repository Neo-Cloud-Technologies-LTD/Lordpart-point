function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 pb-8">
      
      {/* Gold line */}
      <div className="border-t border-[#c8a33a]"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-center md:text-left">
        
        {/* Copyright */}
        <p className="text-sm text-gray-200">
          @2026 LORDPART POINT GLOBAL LIMITED NIGERIA LTD
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center text-sm text-gray-200">

          <a
            href="#"
            className="px-6 hover:text-[#d5ad3d] transition"
          >
            Privacy Policy
          </a>

          <div className="hidden sm:block h-10 border-l border-gray-600"></div>
          <a
            href="#"
            className="px-6 hover:text-[#d5ad3d] transition"
          >
            Terms of services
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;