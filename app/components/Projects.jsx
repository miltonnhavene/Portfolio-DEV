"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React from "react";

const projects = [
  {
    title: "DevFinder",
    image: "/images/projects/project.jpg",
    description:
      "Buscador de perfis do GitHub com tema dark/light, cache e paginação. Foco em acessibilidade e performance.",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/miltonnhavene/devfinder",
    live: "#",
  },
  {
    title: "TaskFlow",
    image: "/images/projects/project.jpg",
    description:
      "Kanban de tarefas com drag-and-drop, filtros por etiqueta e sincronização local-first.",
    techs: ["React", "Zustand", "Vite", "Tailwind CSS"],
    repo: "https://github.com/miltonnhavene/taskflow",
    live: "#",
  },
  {
    title: "Pulse Analytics",
    image: "/images/projects/project.jpg",
    description:
      "Dashboard de métricas com gráficos em tempo real e integração com API REST.",
    techs: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    repo: "https://github.com/miltonnhavene/pulse-analytics",
    live: "#",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="relative px-6 py-28 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#101223] to-[#090b12]">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-fuchsia-500/10 to-indigo-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Meus Projetos
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="group relative bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-indigo-500/20 p-[2px] rounded-3xl shadow-[0_15px_60px_-15px_rgba(0,0,0,.6)] cursor-pointer hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              onClick={() => toggleAccordion(i)}
            >
              <div className="rounded-[calc(1.5rem-2px)] bg-slate-900/80 ring-1 ring-white/10 backdrop-blur-xl overflow-hidden flex flex-col h-full">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="h-48 w-full object-cover rounded-t-[calc(1.5rem-2px)] transition-transform duration-700 group-hover:scale-110"
                />

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white flex justify-between items-center">
                      {p.title}
                      <motion.div
                        animate={{ rotate: activeIndex === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-cyan-400 text-sm" />
                      </motion.div>
                    </h3>
                    <p className="mt-2 text-sm text-white/80">{p.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.techs.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links rápidos */}
                  <div className="mt-5 flex items-center gap-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={p.repo}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-cyan-300 hover:text-white transition-all"
                    >
                      <FaGithub /> Código
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-fuchsia-300 hover:text-white transition-all"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>

                {/* === Accordion expandido === */}
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="border-t border-white/10 p-5 text-left bg-slate-800/60"
                    >
                      <p className="text-sm text-white/70 leading-relaxed">
                        Este projeto foi desenvolvido com foco em escalabilidade e design moderno.  
                        O objetivo foi criar uma aplicação prática e intuitiva, com uma stack optimizada 
                        para performance e experiência do utilizador.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
