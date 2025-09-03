import React from "react";

const softwares = [
    "IntelliJ IDEA",
    "Postman",
    "Figma",
    "DBeaver",
];

const tecnologias = [
    "JavaScript",
    "TypeScript",
    "Angular",
    "React.js",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "GitLab",
    "PostgreSQL",
];

function Pill({ label }) {
    return (
        <div
            className="group relative isolate rounded-full
                 bg-white/5 px-4 py-2 ring-1 ring-white/10
                 transition-all duration-200 hover:-translate-y-0.5
                 hover:bg-white/10 hover:ring-white/25
                 shadow-[0_8px_24px_-12px_rgba(0,0,0,.55)]"
            aria-label={label}
            title={label}
        >
            {/* glow sutil */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0
                       bg-[radial-gradient(60%_100%_at_20%_0%,rgba(56,189,248,.25),transparent_70%)]
                       transition-opacity duration-200 group-hover:opacity-100" />
            <span className="text-sm font-medium text-white/90">{label}</span>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="px-6 py-16 md:py-20">
            <div className="mx-auto max-w-[980px] md:max-w-4xl">
                <header className="mb-8">
                    <div className="flex items-center gap-3">
                        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[.25em] text-white/80">
                            Habilidades
                        </span>
                        <span className="h-[2px] w-24 bg-emerald-400 rounded-full"></span>
                    </div>
                    <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                        HABILIDADES TÉCNICAS
                    </h2>
                </header>


                <div className="rounded-[calc(2.5rem-2px)] h-full bg-slate-900/70 ring-1 ring-white/10 backdrop-blur-xl p-8 mb-10">
                    <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold">Resumo</h3>
                        <span className="h-1 w-1 rounded-full bg-sky-400/70 shadow-[0_0_24px_2px_rgba(56,189,248,.6)]" />
                    </div>

                    <p className="mt-3 text-white/80 text-sm leading-relaxed text-justify">
                        Gosto profundamente de resolver problemas por meio de código — do front-end
                        ao back-end e às APIs. Nenhum projeto é muito desafiador para mim.

                        Como um desenvolvedor criativo, crio experiências digitais intuitivas
                        usando um conjunto diversificado de ferramentas e linguagens.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div
                        className="group relative rounded-3xl p-[2px]
                       bg-gradient-to-br from-cyan-500/50 via-fuchsia-500/30 to-indigo-500/50
                       shadow-[0_16px_50px_-18px_rgba(0,0,0,.6)]
                       transition-transform duration-300 hover:-translate-y-1"
                    >
                        <div className="rounded-[calc(1.5rem-2px)] h-full bg-slate-900/70 ring-1 ring-white/10 backdrop-blur-xl p-6">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-bold">Softwares com os quais trabalho</h3>
                                <span className="h-2 w-2 rounded-full bg-emerald-400/70 shadow-[0_0_24px_2px_rgba(52,211,153,.6)]" />
                            </div>

                            <p className="mt-3 text-white/80 text-sm leading-relaxed text-justify">
                                Com mais de 2 anos de experiência na criação de projectos de software,
                                desenvolvi um entendimento intuitivo de como os melhores produtos são
                                projetados. Abaixo estão alguns dos softwares que utilizo no dia a dia.
                            </p>

                            <div className="mt-5 grid grid-cols-2 gap-3">
                                {softwares.map((label) => (
                                    <Pill key={label} label={label} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative rounded-3xl p-[2px]
                       bg-gradient-to-br from-sky-500/50 via-violet-500/30 to-teal-500/50
                       shadow-[0_16px_50px_-18px_rgba(0,0,0,.6)]
                       transition-transform duration-300 hover:-translate-y-1"
                    >
                        <div className="rounded-[calc(1.5rem-2px)] h-full bg-slate-900/70 ring-1 ring-white/10 backdrop-blur-xl p-6">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-bold">Tecnologias com as quais trabalho</h3>
                                <span className="h-2 w-2 rounded-full bg-sky-400/70 shadow-[0_0_24px_2px_rgba(56,189,248,.6)]" />
                            </div>

                            <p className="mt-3 text-white/80 text-sm leading-relaxed text-justify">
                                Gosto profundamente de resolver problemas por meio de código — do front-end
                                ao back-end e às APIs. Nenhum projeto é muito desafiador para mim.
                            </p>

                            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {tecnologias.map((label) => (
                                    <Pill key={label} label={label} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
