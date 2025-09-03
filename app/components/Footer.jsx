'use client';

import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate mt-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-15
                   bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]
                   bg-[size:24px_24px]"
      />

      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="relative rounded-3xl p-[2px]
                        bg-gradient-to-br from-cyan-500/60 via-fuchsia-500/40 to-indigo-500/60
                        shadow-[0_20px_60px_-15px_rgba(0,0,0,.6)]">
          <div className="rounded-[calc(1.5rem-2px)] bg-slate-900/70 ring-1 ring-white/10 backdrop-blur-xl p-6 sm:p-8">
            <div className="flex justify-center">
              <div className="text-center">
                <h4 className="text-sm font-semibold text-white/80">Social</h4>
                <ul className="mt-3 flex flex-wrap items-center justify-center gap-3">
                  {[
                    { href: "https://www.linkedin.com/in/joao-nhavene-4578272b0/", Icon: FaLinkedin, label: "LinkedIn" },
                    { href: "https://github.com/miltonnhavene", Icon: FaGithub, label: "GitHub" },
                    { href: "https://www.instagram.com/__milton_nhavene/", Icon: FaInstagram, label: "Instagram" },
                  ].map(({ href, Icon, label }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                        className="group grid h-10 w-10 place-items-center rounded-full
                                   bg-white/5 text-white/90 ring-1 ring-white/10
                                   transition hover:scale-105 hover:text-white hover:ring-white/30
                                   focus-visible:scale-105 focus-visible:ring-white/40 active:scale-95
                                   shadow-[0_10px_28px_-10px_rgba(0,0,0,.6)]"
                      >
                        <span className="pointer-events-none absolute inset-[3px] rounded-full
                                         bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,.08),transparent_60%)]
                                         opacity-70 transition-opacity group-hover:opacity-100" />
                        <Icon size={18} aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-center">
              <p className="text-xs text-white/60 text-center">
                © {year} João Nhavene. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-[env(safe-area-inset-bottom)]" />
    </footer>
  );
}
