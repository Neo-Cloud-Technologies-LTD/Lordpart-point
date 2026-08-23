import Reveal from "../../Components/animations/Reveal";

function Footer() {
  return (
    <footer className="w-full border-t border-[#c8a33a]/25 bg-[#0A0D14]">
      <Reveal
        direction="up"
        distance={18}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:px-8 md:flex-row md:text-left lg:px-12"
      >
        {/* Copyright */}
        <p className="text-sm text-gray-200">
          @2026 LORDPART POINT GLOBAL LIMITED NIGERIA LTD
        </p>

        {/* Links */}
        <div className="flex flex-col items-center text-sm text-gray-200 sm:flex-row">
          <a href="#" className="lp-link-underline px-6 transition hover:text-[#d5ad3d]">
            Privacy Policy
          </a>

          <div className="hidden h-10 border-l border-gray-600 sm:block"></div>

          <a href="#" className="lp-link-underline px-6 transition hover:text-[#d5ad3d]">
            Terms of services
          </a>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;
