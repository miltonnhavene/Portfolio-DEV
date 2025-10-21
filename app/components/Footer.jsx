"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import React from "react";

export default function Footer() {
  const socials = [
    { href: "https://www.linkedin.com/in/joao-nhavene-4578272b0/", Icon: FaLinkedin },
    { href: "https://github.com/miltonnhavene", Icon: FaGithub },
    { href: "https://www.instagram.com/__milton_nhavene/", Icon: FaInstagram },
  ];

  return (
    <footer className="relative isolate py-12 mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent blur-3xl" />

      <motion.div
        className="mx-auto w-[min(1200px,92%)] relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center gap-6 mb-6">
          {socials.map(({ href, Icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 place-items-center rounded-full bg-white/5 text-white/80 ring-1 ring-white/10 hover:ring-white/30 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              animate={{ boxShadow: ["0 0 0px #00ffff", "0 0 12px #ff00ff", "0 0 0px #00ffff"] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} João Nhavene. Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
}
