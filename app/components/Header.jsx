"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <header
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden scroll-mt-32 flex flex-col justify-center"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-slate-900/70" />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -left-24 top-[-6rem] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute right-[-6rem] top-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse delay-300" />
        <div className="absolute left-1/3 bottom-[-6rem] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto w-[min(1200px,92%)] px-2 text-center">
        <motion.h2
          className="font-display text-[clamp(2.4rem,5vw,5rem)] md:text-[72px] font-extrabold leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-200 bg-clip-text text-transparent">
            Transformando conceitos
          </span>{" "}
          em <br />
          <motion.span
            className="text-white"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            experiências de usuários
          </motion.span>
        </motion.h2>

        <motion.h3
          className="mt-8 text-center font-display text-3xl md:text-5xl text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <TypeAnimation
            sequence={["Software Engineer", 1800, "Web Developer", 1800]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </motion.h3>
      </div>
    </header>
  );
};

export default Header;
