import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import React from "react";

const Header = () => {
  return (
    <header id="home" className="relative isolate min-h-[100svh] overflow-hidden scroll-mt-32">
      <div className="absolute inset-0 -z-20 bg-slate-900/70" />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-[-6rem] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute left-1/3 bottom-[-6rem] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-100px,rgba(56,189,248,.18),transparent)]" />
        <div className="absolute inset-0 opacity-15
                        bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]
                        bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto w-[min(1200px,92%)] px-2 pt-28 md:pt-36">
        <h2 className="font-display text-[clamp(2.4rem,5vw,5rem)] md:text-[72px]
                       font-extrabold leading-[1.05] text-center tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-200
                           bg-clip-text text-transparent">
            Transformando conceitos
          </span>{" "}
          em
          <br />
          <span className="text-white">experiências de usuários</span>
        </h2>

        <h3 className="mt-6 text-center font-display text-3xl md:text-5xl text-white/90">
          <TypeAnimation
            sequence={[
              "Software Developer", 1600,
              "Frontend Developer", 1600,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h3>

        <ul className="mt-10 flex items-center justify-center gap-3">
          {[
            { href: "https://www.linkedin.com/in/joao-nhavene-4578272b0/", Icon: FaLinkedin, label: "LinkedIn" },
            { href: "https://github.com/miltonnhavene", Icon: FaGithub, label: "GitHub" },
            { href: "https://www.instagram.com/__milton_nhavene/", Icon: FaInstagram, label: "Instagram" },
          ].map(({ href, Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                className="group relative grid h-12 w-12 place-items-center rounded-full
                           bg-white/5 text-white/90 ring-1 ring-white/10
                           transition hover:scale-105 hover:text-white hover:ring-white/30
                           focus-visible:scale-105 focus-visible:ring-white/40 active:scale-95
                           shadow-[0_10px_28px_-10px_rgba(0,0,0,.6)]"
              >
                <span className="pointer-events-none absolute inset-[3px] rounded-full
                                 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,.08),transparent_60%)]
                                 opacity-70 transition-opacity group-hover:opacity-100" />
                <Icon size={20} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
