"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCode,
  FaPalette,
  FaLaptopCode,
  FaCogs,
} from "react-icons/fa";
import React from "react";

const socials = [
  {
    href: "https://www.linkedin.com/in/joao-nhavene-4578272b0/",
    Icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/miltonnhavene", Icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.instagram.com/__milton_nhavene/",
    Icon: FaInstagram,
    label: "Instagram",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f1120] to-[#090b12] flex flex-col items-center justify-center px-6 py-28 overflow-hidden "
    >
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-fuchsia-500/10 to-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-4xl w-full relative z-10 flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Sobre Mim
        </motion.h2>

        <motion.div
          className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 
                     shadow-[0_15px_50px_-10px_rgba(0,0,0,0.7)] p-4 md:p-8 max-w-4xl w-full
                     flex flex-col md:flex-row items-center justify-center gap-8 md:gap-13"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-indigo-400/20 opacity-30 rounded-3xl animate-pulse" />

          <motion.div
            className="relative w-64 h-82 md:w-80 md:h-102 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg flex-shrink-0"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          >
            <Image
              src="/images/Eu.JPG"
              alt="João Nhavene"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left relative z-10 max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">João Nhavene</h3>
            <p className="text-2sm text-cyan-300 font-medium mb-4">
              Engenheiro de Software | Web Developer
            </p>
            <p className="text-base text-white/80 leading-relaxed mb-4 text-justify">
              Apaixonado por criar produtos digitais com propósito, sou um
              engenheiro de software focado em desenvolver experiências
              impactantes, acessíveis e performáticas. Combino{" "}
              <span className="text-cyan-300 font-semibold">design</span> e{" "}
              <span className="text-cyan-300 font-semibold">engenharia</span>{" "}
              para transformar ideias em soluções reais que inspiram e conectam
              pessoas.
            </p>

            <div className="flex justify-center md:justify-start gap-5 mt-3 mb-2">
              {socials.map(({ href, Icon, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="relative h-11 w-11 flex items-center justify-center rounded-full bg-gradient-to-r 
                             from-cyan-400/30 to-indigo-400/30 text-white/90 hover:text-white 
                             transition-all duration-300 shadow-md"
                  whileHover={{ y: -5, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
              <motion.a
                href="/JoaoNhaveneCV.pdf"
                download
                className="px-3 py-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-20 w-full max-w-6xl place-items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SkillCard Icon={FaCode} title="Desenvolvimento Web" />
          <SkillCard Icon={FaPalette} title="Design de UI/UX" />
          <SkillCard Icon={FaLaptopCode} title="Engenharia Front-End" />
          <SkillCard Icon={FaCogs} title="Resolução de Problemas" />
        </motion.div>

        <div className="grid grid-cols-1 md: gap-15 mt-25 w-auto   max-w-5xl text-left">
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-3xl font-bold text-cyan-400 mb-6 text-center md:text-center">
              Educação
            </h4>
            <ul className="space-y-6 text-white/80">
              <li>
                <h5 className="text-lg font-semibold mb-2">
                  Licenciatura em Engenharia Informática e telecomunicações
                </h5>
                <p className="text-sm text-white/80 mb-2">
                  Instituto Superior de Transportes e Comunicações, ISUTC
                </p>
                <span>2020-2024</span>
              </li>
              <li>
                <h5 className="text-lg font-semibold">
                Informática e telecomunicações
                </h5>
                <p className="text-sm text-white/60">
                Instituto Politecnico de Tecnlogia e Empreendedorismo, IPET
                </p>
                <span>2016-2019</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-3xl font-bold text-cyan-400 mb-6 text-center md:text-center">
              Experiência
            </h4>
            <ul className="space-y-6 text-white/80">
              <li>
                <h5 className="text-lg font-semibold mb-2">
                  Balcão de Atendimento Único, IP | Engenheiro de Software - Estagíario 
                </h5>
                <p className="text-sm text-white/60">Fevereiro 2025 - Setembro 2025</p>
              </li>
              <li>
                <h5 className="text-lg font-semibold mb-2">
                  VOLET Technologies S.A. | Desenvolvedor Frontend - Estagíario 
                </h5>
                <p className="text-sm text-white/60">Março 2025 - Setembro 2025 - Remoto</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* === COMPONENTE DE SKILL === */
function SkillCard({ Icon, title }) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-md hover:bg-white/10 transition-all w-36 sm:w-44"
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="text-4xl text-cyan-400 mb-3" />
      <p className="text-white font-medium text-sm sm:text-base">{title}</p>
    </motion.div>
  );
}
