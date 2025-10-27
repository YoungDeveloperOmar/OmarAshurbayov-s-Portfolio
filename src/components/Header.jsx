import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const HeaderComponent = () => {
  const [open, setOpen] = useState(false)

  const scrollTo = (href) => {
        const element = document.querySelector(href)
        if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="top-0 z-50 bg-transparent">
      <div className="flex justify-between libre-baskerville-bold items-center h-[14vh] md:mx-15 mx-5">
        {/* Logo */}
        <h1 className="flex items-center text-glow-animated
          gap-1 text-xl text-emerald-400 select-none transition-transform tracking-wide 
          hover:scale-110">
          &lt;Omar /&gt;
        </h1>

        <nav className="block md:hidden">
          {/* Mobile toggle */}
          <div
            className="md:hidden flex-col justify-between gap-5 rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            {/* 3 bars → animate to X */}
            <div
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <div
              className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"} my-1`}
            />
            <div
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={
            ` w-full justify-center items-center fixed top-[14vh] z-40 md:hidden bg-black/95 transition-all duration-300 ease-in-out
            ${open ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-10 opacity-0 pointer-events-none'}`
          }
          aria-hidden={!open}
        >
          <ul className="flex flex-col items-center mx-20 py-6 gap-6 h-screen">
            {links.map((link) => (
              <li key={link.label} className="w-full flex items-center"> 
                <a href={link.href }onClick={() => {scrollTo(link.href)}} className="text-white text-xl hover:text-emerald-400 underline-slide transform duration-300"> 
                  {link.label} 
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block text-white">
          <ul className="flex items-center gap-5 text-sm ">
            {links.map((link) => (
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
    </header>
  );
};

export default HeaderComponent;