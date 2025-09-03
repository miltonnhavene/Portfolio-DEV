'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";
import { useTheme } from "next-themes";

const NAV = [
  { href: "/#home",     label: "Página Inicial" },
  { href: "/#about",    label: "Sobre Mim" },
  { href: "/#projects", label: "Projectos" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <nav
        className="sticky top-2 md:top-4 z-50 mx-auto w-[min(1200px,92%)]
                   rounded-2xl border px-4 py-3 md:px-6 md:py-4 flex items-center gap-4 md:gap-6
                   backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,.6)]
                   /* light (padrão) */
                   border-slate-900/10 bg-white/70 text-slate-900
                   /* dark */
                   dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
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
                className="px-5 py-2 rounded-full text-sm font-medium
                           /* light */
                           text-slate-700/90 hover:text-slate-900 hover:bg-slate-900/5
                           /* dark */
                           dark:text-white/90 dark:hover:text-white dark:hover:bg-white/5
                           transition"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Botão tema */}
          <button
            type="button"
            aria-label={`Alternar para tema ${isDark ? 'claro' : 'escuro'}`}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="grid h-10 w-10 place-items-center rounded-full transition
                       /* light */
                       ring-1 ring-slate-900/10 bg-slate-900/5 hover:bg-slate-900/10 text-slate-900
                       /* dark */
                       dark:ring-white/15 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white"
          >
            {mounted ? (isDark ? <BsSun size={18} /> : <BsMoon size={18} />) : null}
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
            className="md:hidden grid h-10 w-10 place-items-center rounded-full transition
                       ring-1 ring-slate-900/10 bg-slate-900/5 hover:bg-slate-900/10
                       dark:ring-white/15 dark:bg-white/5 dark:hover:bg-white/10"
            onClick={() => setOpen(true)}
          >
            <IoMenu size={20} />
          </button>
        </div>
      </nav>

      {/* sheet mobile (sem mudanças relevantes) */}
      {/* ... */}
    </>
  );
};

export default Navbar;
