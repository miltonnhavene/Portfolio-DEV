import React from "react";

const projects = [
  {
    title: "DevFinder",
    image: "/images/projects/project.jpg",
    description:
      "Buscador de perfis do GitHub com tema dark/light, cache e paginação. Foco em acessibilidade e performance.",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repo: "#", // troque pelo link do repositório
  },
  {
    title: "TaskFlow",
    image: "/images/projects/project.jpg",
    description:
      "Kanban de tarefas com drag-and-drop, filtros por etiqueta e sincronização local-first.",
    techs: ["React", "Zustand", "Vite", "Tailwind CSS"],
    repo: "#",
  },
  {
    title: "Pulse Analytics",
    image: "/images/projects/project.jpg",
    description:
      "Dashboard de métricas com gráficos em tempo real e integração com API REST.",
    techs: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    repo: "#",
  },
];

function Pill({ children }) {
  return (
    <span
      className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/90
                 ring-1 ring-white/10 shadow-[0_8px_24px_-12px_rgba(0,0,0,.55)]
                 transition hover:bg-white/10 hover:ring-white/25"
    >
      {children}
    </span>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-12 md:py-25">
      <div className="mx-auto max-w-[980px] md:max-w-4xl">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[.25em] text-white/80">
              Projectos
            </span>
            <span className="h-[2px] w-24 bg-emerald-400 rounded-full" />
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Meus Projectos
          </h2>
        </div>

        <div className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-3xl p-[2px]
                         bg-gradient-to-br from-cyan-500/60 via-fuchsia-500/40 to-indigo-500/60
                         shadow-[0_20px_60px_-15px_rgba(0,0,0,.6)]
                         transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="h-full overflow-hidden rounded-[calc(1.5rem-2px)] bg-slate-900/70 ring-1 ring-white/10 backdrop-blur-xl">
                {/* imagem */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={`Preview do projecto ${p.title}`}
                    className="h-48 w-full object-cover
                               transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* gradiente sutil por cima da imagem */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                {/* conteúdo */}
                <div className="p-5">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    {p.description}
                  </p>

                  {/* techs */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.techs.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>

                  {/* botão */}
                  <div className="mt-6">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold
                                 bg-gradient-to-r from-cyan-500 to-fuchsia-500
                                 shadow-[0_10px_30px_-10px_rgba(56,189,248,.6)]
                                 hover:shadow-[0_16px_40px_-12px_rgba(217,70,239,.55)]
                                 transition-transform active:scale-95"
                    >
                      Ver código <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* glow externo sutil (igual vibe dos outros cards) */}
              <span className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem]
                               bg-[radial-gradient(40%_40%_at_10%_0%,rgba(34,211,238,.22),transparent_60%),radial-gradient(35%_35%_at_100%_60%,rgba(99,102,241,.22),transparent_60%)]
                               blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
