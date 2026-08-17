function Footer() {
  return (
    <footer className="w-full border-t border-[#c8a33a]/25 bg-[#0A0D14]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:px-8 md:flex-row md:text-left lg:px-12">
        
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