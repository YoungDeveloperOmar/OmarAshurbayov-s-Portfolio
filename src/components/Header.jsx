import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const HEADER_H = '8vh'; // keep your chosen height consistent in one place

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={[
        "sticky lg:static top-0 left-0 w-full z-40 transition-colors",
        // Mobile gets a background; desktop stays transparent.
        open ? "bg-[hsl(220_20%_6%_/0.2)] md:bg-transparent" : "bg-[hsl(220_20%_6%_/0.2)] md:bg-transparent",
        // A subtle border/backdrop on mobile
        "backdrop-blur supports-[backdrop-filter]:backdrop-blur",
        "md:backdrop-blur-0 md:bg-transparent",
      ].join(" ")}
      style={{ height: HEADER_H }}
    >
      <div className="h-full">
        <div className="container mx-auto h-full flex items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <h1 className="flex items-center libre-baskerville-bold text-glow-animated gap-1 text-xl text-emerald-400 select-none transition-transform tracking-wide hover:scale-110">
            &lt;Omar /&gt;
          </h1>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block text-white">
            <ul className="flex items-center gap-5 text-sm">
              {links.map(link => (
                <li key={link.label}>
                  <a
                    onClick={() => scrollTo(link.href)}
                    className="block px-2 py-1 hover:text-emerald-400 underline-slide transition duration-300 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Panel (aligned exactly under the header) */}
      <div
        id="mobile-menu"
        className={[
          "fixed inset-x-0 md:hidden z-30 bg-[hsl(220_20%_6%_/0.95)]",
          "backdrop-blur-xl supports-backdrop-filter:backdrop-blur-xl",
          "transition-all duration-300 ease-in-out",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none",
        ].join(" ")}
        style={{
          top: HEADER_H,
          height: `calc(100dvh - ${HEADER_H})`,
        }}
        aria-hidden={!open}
      >
        <ul className="flex flex-col items-start px-8 py-8 gap-6 h-full overflow-y-auto">
          {links.map(link => (
            <li key={link.label} className="w-full">
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                  setOpen(false);
                }}
                className="block text-white text-2xl font-semibold hover:text-emerald-400 underline-slide transition duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;