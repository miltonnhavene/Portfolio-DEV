// components/Navbar.jsx
import Link from "next/link";
import { BsMoon } from "react-icons/bs";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-4 z-50 mx-auto w-[min(1200px,92%)]
                    rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md
                    px-6 py-4 flex items-center gap-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,.6)]">
      <div className="w-1/3 min-w-[200px]">
        <h1 className="font-display text-2xl font-extrabold tracking-tight
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-fuchsia-400 via-sky-300 to-indigo-300">
          João Nhavene
        </h1>
      </div>

      <ul className="hidden md:flex items-center justify-center gap-2 flex-1">
        {[
          { href: "/#home",     label: "Página Inicial" },
          { href: "/#about",    label: "Sobre Mim" },
          { href: "/#projects", label: "Projectos" },
        ].map((i) => (
          <li key={i.href}>
            <a
              href={i.href}
              className="px-5 py-2 rounded-full text-sm font-medium text-white/90
                         hover:text-white hover:bg-white/5 transition"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button className="grid h-10 w-10 place-items-center rounded-full
                           ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition">
          <BsMoon size={18} aria-hidden />
        </button>

        {/* muda de <button> para <Link> */}
        <Link
          href="/contact"
          className="px-5 py-2 rounded-full font-semibold
                     bg-gradient-to-r from-sky-500 to-fuchsia-500
                     shadow-[0_10px_30px_-10px_rgba(56,189,248,.6)]
                     hover:shadow-[0_16px_40px_-12px_rgba(217,70,239,.55)]
                     transition-transform active:scale-95"
        >
          Contacte-me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
