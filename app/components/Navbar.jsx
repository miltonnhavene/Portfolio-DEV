'use client';

import Link from "next/link";
import React, { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";

const NAV = [
  { href: "/#home",     label: "Página Inicial" },
  { href: "/#about",    label: "Sobre Mim" },
  { href: "/#projects", label: "Projectos" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-2 md:top-4 z-50 mx-auto w-[min(1200px,92%)]
                   rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md
                   px-4 py-3 md:px-6 md:py-4 flex items-center gap-4 md:gap-6
                   shadow-[0_10px_40px_-10px_rgba(0,0,0,.6)]"
      >
        <div className="min-w-0 flex-1 md:w-1/3 md:min-w-[200px]">
          <h1 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight
                         text-transparent bg-clip-text
                         bg-gradient-to-r from-fuchsia-400 via-sky-300 to-indigo-300">
            João Nhavene
          </h1>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-2 flex-1">
          {NAV.map(i => (
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

        <div className="flex items-center gap-2 md:gap-3">
          <button
            aria-label="Alternar tema"
            className="grid h-10 w-10 place-items-center rounded-full
                       ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            <BsMoon size={18} aria-hidden />
          </button>

          <Link
            href="/contact"
            className="hidden sm:inline-flex px-5 py-2 rounded-full font-semibold
                       bg-gradient-to-r from-sky-500 to-fuchsia-500
                       shadow-[0_10px_30px_-10px_rgba(56,189,248,.6)]
                       hover:shadow-[0_16px_40px_-12px_rgba(217,70,239,.55)]
                       transition-transform active:scale-95"
          >
            Contacte-me
          </Link>

          <button
            aria-label="Abrir menu"
            className="md:hidden grid h-10 w-10 place-items-center rounded-full
                       ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition"
            onClick={() => setOpen(true)}
          >
            <IoMenu size={20} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] md:hidden transition
                    ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity
                      ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />

        {/* sheet */}
        <div
          className={`mx-auto w-[min(1200px,92%)] mt-4 transition-all
                      ${open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}
        >
          <div
            className="relative rounded-3xl p-[2px]
                       bg-gradient-to-br from-cyan-500/60 via-fuchsia-500/40 to-indigo-500/60
                       shadow-[0_20px_60px_-15px_rgba(0,0,0,.6)]"
          >
            <div className="rounded-[calc(1.5rem-2px)] bg-slate-900/70 ring-1 ring-white/10 backdrop-blur-xl p-4">
              {/* top row */}
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">Menu</span>
                <button
                  aria-label="Fechar menu"
                  className="grid h-10 w-10 place-items-center rounded-full
                             ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                >
                  <IoClose size={20} />
                </button>
              </div>

              {/* links */}
              <ul className="mt-3 grid gap-2">
                {NAV.map(i => (
                  <li key={i.href}>
                    <a
                      href={i.href}
                      onClick={() => setOpen(false)}
                      className="block w-full px-4 py-3 rounded-xl text-base font-medium
                                 text-white/90 hover:text-white hover:bg-white/5 transition"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold
                             bg-gradient-to-r from-sky-500 to-fuchsia-500
                             shadow-[0_10px_30px_-10px_rgba(56,189,248,.6)]
                             hover:shadow-[0_16px_40px_-12px_rgba(217,70,239,.55)]
                             transition-transform active:scale-[.98]"
                >
                  Contacte-me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
