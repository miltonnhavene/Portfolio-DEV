"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSpringboot,
  SiTailwindcss,
  SiPostman,
  SiIntellijidea,
  SiNextdotjs,
  SiAngular,
  SiPostgresql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";


const softwares = [
  { name: "VS Code", icon: VscVscode  },
  { name: "IntelliJ IDEA", icon: SiIntellijidea },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: FaFigma },
  { name: "DBeaver", icon: FaDatabase },
];

const technologies = [
  { name: "JavaScript", icon: FaJsSquare },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Java", icon: FaJava },
  { name: "Angular", icon: SiAngular },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "GitLab", icon: FaGitlab },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: GrMysql  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#101223] to-[#090b12]">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-fuchsia-500/10 to-indigo-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col gap-14">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          HABILIDADES TÉCNICAS
        </motion.h2>
        <motion.div
          className="bg-gradient-to-br from-[#1a1a2e]/40 to-[#151521]/60 border border-white/10 rounded-2xl p-6 md:p-6 backdrop-blur-xl shadow-xl text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">Resumo</h3>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base text-justify">
            Com uma base sólida em desenvolvimento de software, mantenho uma visão cuidadosa e a mentalidade de
            “aprender sempre”. Estou constantemente a evoluir, acompanhando as melhores práticas do sector para
            entregar soluções estáveis, acessíveis e com foco na experiência do utilizador.
          </p>
        </motion.div>

        <div className="grid md: gap-10">
          <motion.div
            className="bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/20 to-indigo-500/30 p-[1px] rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,.7)]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 h-full">
              <motion.h3
                className="text-2xl font-bold text-emerald-300 mb-4 gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
              Softwares com os quais trabalho
              </motion.h3>

              <p className="text-white/70 text-sm leading-relaxed mb-6 text-justify">
               Com menos de 1 ano de experiência na criação de projectos de software, 
               desenvolvi um entendimento intuitivo de como os melhores produtos são projetados. 
               Abaixo estão alguns dos softwares que utilizo no dia a dia.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {softwares.map(({ name, icon: Icon }, i) => (
                  <motion.div
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-white/90 text-sm hover:bg-white/10 transition-all shadow-[0_8px_25px_-10px_rgba(0,0,0,.6)]"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Icon size={18} />
                    {name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-sky-500/30 via-violet-500/20 to-teal-500/30 p-[1px] rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,.7)]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 h-full">
              <motion.h3
                className="text-2xl font-bold text-sky-300 mb-6 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
              Tecnologias com as quais trabalho
              </motion.h3>

              <p className="text-white/70 text-sm leading-relaxed mb-6 text-justify">
                Tenho paixão por transformar problemas em soluções com código. 
                Atuo em toda a stack — do front-end ao back-end e às integrações de APIs — sempre com foco em clareza e performance. 
                Gosto de enfrentar desafios e traduzi-los em resultados práticos.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {technologies.map(({ name, icon: Icon }, i) => (
                  <motion.div
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-white/90 text-sm hover:bg-white/10 transition-all shadow-[0_8px_25px_-10px_rgba(0,0,0,.6)]"
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Icon size={18} />
                    {name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
