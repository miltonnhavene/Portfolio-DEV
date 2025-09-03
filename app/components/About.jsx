import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 md:scroll-mt-32 px-4 sm:px-6 py-10 md:py-20"
    >
      <div className="mx-auto max-w-[980px] md:max-w-4xl">
        {/* header */}
        <div className="mb-5 sm:mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[.25em] text-white/80">
              Sobre mim
            </span>
            <span className="h-[2px] w-24 bg-emerald-400 rounded-full" />
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
            SAIBA MAIS SOBRE MIM
          </h2>
        </div>

        {/* card */}
        <div
          className="
            relative rounded-3xl p-[2px]
            bg-gradient-to-br from-cyan-500/60 via-fuchsia-500/40 to-indigo-500/60
            shadow-[0_20px_60px_-15px_rgba(0,0,0,.6)]
            before:absolute before:-inset-10 before:-z-10
            before:bg-[radial-gradient(40%_40%_at_10%_0%,rgba(34,211,238,.25),transparent_60%),radial-gradient(35%_35%_at_100%_60%,rgba(99,102,241,.25),transparent_60%)]
            before:blur-xl before:content-['']
          "
        >
          <div className="rounded-[calc(1.5rem-2px)] border border-white/10 bg-slate-900/70 backdrop-blur-xl">
            <div className="grid items-center gap-6 sm:gap-8 p-5 sm:p-6 md:grid-cols-2 md:p-8">

              {/* FOTO (primeiro no mobile, sem espaço extra) */}
              <div className="order-first md:order-none mt-6 md:mt-0">
                <div className="mx-auto max-w-[300px] sm:max-w-[320px]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem] sm:rounded-[1.6rem] bg-slate-800 ring-1 ring-white/10 shadow-[0_24px_72px_-20px_rgba(59,130,246,.38)]">
                    <img
                      src="/images/Eu.JPG"
                      alt="Foto"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full">
                <h3 className="sr-only">Sobre Mim</h3>

                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white leading-snug
                 text-center md:text-left max-w-prose mx-auto md:mx-0">
                  <span className="relative after:content-['|'] after:ml-1 mr-1 after:text-sky-400 after:font-bold after:animate-blink">
                    Software Engineer
                  </span>
                  <span className="relative after:content-['|'] after:ml-1 after:text-sky-400 after:font-bold after:animate-blink">
                    Front-end Developer
                  </span>
                </h4>

                <p className="mt-4 text-white/85 leading-relaxed text-justify max-w-prose mx-auto md:mx-0">
                  Engenheiro de software com experiência em varias tecnologias, focado em Front-end (Next.js e Angular) e Back-end (Spring Boot). Transformo ideias em interfaces limpas, responsivas e acessíveis, com atenção à performance e aos detalhes. Busco sempre unir design e engenharia para transformar problemas reais em soluções bonitas, rápidas e intuitivas.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
