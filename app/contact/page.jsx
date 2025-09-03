"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.currentTarget.reset();
  }

  return (
    <main className="relative isolate min-h-[100svh] px-6 py-15">
      <Link
        href="/#home"
        aria-label="Voltar à página inicial"
        className="fixed left-4 top-4 sm:left-6 sm:top-6 z-50 group"
      >
        <span
          className="inline-block rounded-full p-[1.5px]
                     bg-gradient-to-r from-cyan-500/60 via-fuchsia-500/40 to-indigo-500/60
                     shadow-[0_10px_30px_-12px_rgba(0,0,0,.6)]"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold
                       bg-slate-900/70 backdrop-blur-md text-white/90
                       ring-1 ring-white/10 transition
                       hover:bg-white/10 hover:ring-white/25 hover:text-white"
          >
            ← Voltar
          </span>
        </span>
      </Link>
      
      <div className="absolute inset-0 -z-20 bg-slate-950" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute left-1/3 -bottom-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-100px,rgba(56,189,248,.18),transparent)]" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto w-[min(1024px,92%)]">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
            Fale <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-fuchsia-300 bg-clip-text text-transparent">comigo</span>
          </h1>
        </div>

        <div
          className="group relative rounded-3xl p-[2px]
                     bg-gradient-to-br from-cyan-500/60 via-fuchsia-500/40 to-indigo-500/60
                     shadow-[0_20px_60px_-15px_rgba(0,0,0,.6)]
                     transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="rounded-[calc(1.5rem-2px)] bg-slate-900/70 ring-1 ring-white/10 backdrop-blur-xl overflow-hidden">
            <span className="pointer-events-none absolute -inset-10 -z-10 rounded-[2rem]
                             bg-[radial-gradient(40%_40%_at_10%_0%,rgba(34,211,238,.22),transparent_60%),radial-gradient(35%_35%_at_100%_60%,rgba(99,102,241,.22),transparent_60%)]
                             blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <form onSubmit={onSubmit} className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome e apelido</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Milton Nhavene"
                    required
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40
                               ring-1 ring-white/10 focus:ring-2 focus:ring-transparent
                               focus:outline-none transition
                               focus:shadow-[0_0_0_1.5px_rgba(56,189,248,.5),0_12px_40px_-12px_rgba(56,189,248,.35)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="miltonnhavene@gmail.com"
                    required
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40
                               ring-1 ring-white/10 focus:ring-2 focus:ring-transparent
                               focus:outline-none transition
                               focus:shadow-[0_0_0_1.5px_rgba(217,70,239,.45),0_12px_40px_-12px_rgba(217,70,239,.35)]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-semibold mb-2">Sua mensagem</label>
                <textarea
                  name="message"
                  rows={8}
                  placeholder="Escreva sua mensagem..."
                  required
                  className="w-full resize-y rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40
                             ring-1 ring-white/10 focus:ring-2 focus:ring-transparent
                             focus:outline-none transition
                             focus:shadow-[0_0_0_1.5px_rgba(99,102,241,.45),0_12px_40px_-12px_rgba(99,102,241,.35)]"
                />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                             bg-emerald-400 text-slate-900
                             shadow-[0_10px_30px_-10px_rgba(16,185,129,.6)]
                             hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.55)]
                             transition-transform active:scale-95"
                >
                  ENVIAR <span aria-hidden>↗</span>
                </button>

                {sent && (
                  <span className="ml-auto text-sm text-emerald-300">
                    ✅ Mensagem enviada!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
