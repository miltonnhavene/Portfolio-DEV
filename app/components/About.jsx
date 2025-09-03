import React from 'react';

const About = () => {
  return (
    <section id="about" className="px-6 py-12 md:py-25">
      <div className="mx-auto max-w-[980px] md:max-w-4xl">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[.25em] text-white/80">
              Sobre mim
            </span>
            <span className="h-[2px] w-24 bg-emerald-400 rounded-full"></span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            SAIBA MAIS SOBRE MIM
          </h2>
        </div>

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
            <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-8">
              <div className="w-100">
                <h3 className="sr-only">Sobre Mim</h3>

                <h4 className="text-lg md:text-xl font-semibold text-white leading-snug">
                  <span className="relative after:content-['|'] after:ml-1 mr-1 after:text-sky-400 after:font-bold after:animate-blink">
                    Software Engineer
                  </span>
                  <span className="relative after:content-['|'] after:ml-1 after:text-sky-400 after:font-bold after:animate-blink">
                    Front-end Developer
                  </span>
                </h4>

                <p className="mt-4 text-gray-300 leading-relaxed text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam in repellat
                  quidem ab! Rem voluptatum accusamus obcaecati, velit neque nihil veritatis ab voluptas
                  tempora magni quae placeat dolore nesciunt! Lorem ipsum dolo5r sit amet consectetur
                  adipisicing elit.
                </p>
              </div>

              <div className="mt-20 order-first md:order-none">
                <div className="mx-auto max-w-[320px]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem] bg-slate-800 ring-1 ring-white/10 shadow-[0_24px_72px_-20px_rgba(59,130,246,.38)]">
                    <img src="/images/Eu.JPG" alt="Foto" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default About;
