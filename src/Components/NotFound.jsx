import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
        Error 404
      </p>

      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-gray-300">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-10 rounded-xl bg-[#D4AF37] px-7 py-3.5 font-semibold text-black transition hover:bg-[#e0bb52]"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
