
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f1e8]">
      <header className="flex items-center justify-between border-b border-[#c6a45c]/20 px-6 py-5 md:px-12">
        <div>
          <p className="text-xl font-bold tracking-[0.18em] text-[#d6b66e]">
            LMA
          </p>
          <p className="text-[9px] tracking-[0.35em] text-white/50">
            LA MAQUINA AWARDS
          </p>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="border border-[#c6a45c]/40 px-4 py-2 text-xs tracking-widest text-[#d6b66e] md:hidden"
        >
          MENÚ
        </button>

        <nav className={`${menuOpen ? "flex" : "hidden"} absolute right-6 top-20 z-10 flex-col gap-4 border border-[#c6a45c]/30 bg-[#111] p-5 text-xs tracking-widest md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)} className="hover:text-[#d6b66e]">INICIO</a>
          <a href="#premios" onClick={() => setMenuOpen(false)} className="hover:text-[#d6b66e]">LOS PREMIOS</a>
          <a href="#votacion" onClick={() => setMenuOpen(false)} className="hover:text-[#d6b66e]">VOTACIÓN</a>
        </nav>
      </header>

      <section id="inicio" className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(173,132,57,0.12),_transparent_65%)]" />

        <p className="relative mb-7 text-[10px] tracking-[0.5em] text-[#d6b66e] md:text-xs">
          RIVER PLATE · EDICIÓN 2026
        </p>

        <div className="relative mb-8">
          <p className="text-6xl font-black tracking-tight md:text-8xl">
            LA MAQUINA
          </p>
          <p className="mt-2 text-3xl font-light tracking-[0.45em] text-[#d6b66e] md:text-5xl">
            AWARDS
          </p>
        </div>

        <div className="mb-8 h-px w-24 bg-[#c6a45c]" />

        <h1 className="relative max-w-2xl text-2xl font-light leading-relaxed md:text-4xl">
          Una temporada.
          <span className="block font-semibold text-[#d6b66e]">
            Una elección.
          </span>
        </h1>

        <p className="relative mt-6 max-w-lg text-sm leading-7 text-white/50">
          Los protagonistas, los momentos y las actuaciones que marcaron
          el año de River Plate. La elección es de los hinchas.
        </p>

        <a
          href="#votacion"
          className="relative mt-10 border border-[#c6a45c] px-9 py-4 text-xs tracking-[0.25em] text-[#d6b66e] transition hover:bg-[#c6a45c] hover:text-black"
        >
          DESCUBRÍ LOS PREMIOS
        </a>

        <p className="relative mt-16 text-[9px] tracking-[0.35em] text-white/25">
          LA MAQUINA AWARDS — 2026
        </p>
      </section>

      <section id="premios" className="border-t border-white/10 px-6 py-20 text-center">
        <p className="text-[10px] tracking-[0.4em] text-[#d6b66e]">
          EL RECONOCIMIENTO
        </p>
        <h2 className="mt-5 text-3xl font-light md:text-4xl">
          Los premios de la temporada
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
          Una distinción para los jugadores, los equipos y los momentos
          que hicieron especial el año.
        </p>
      </section>

      <section id="votacion" className="border-t border-white/10 px-6 py-20 text-center">
        <p className="text-[10px] tracking-[0.4em] text-[#d6b66e]">
          TU ELECCIÓN
        </p>
        <h2 className="mt-5 text-3xl font-light md:text-4xl">
          La decisión está en tus manos.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/45">
          La votación de LaMaquinaAwards 2026 se habilitará próximamente.
        </p>
        <span className="mt-8 inline-block border border-white/20 px-7 py-3 text-[10px] tracking-[0.25em] text-white/50">
          PRÓXIMAMENTE
        </span>
      </section>

      <footer className="border-t border-[#c6a45c]/20 px-6 py-8 text-center">
        <p className="text-xs tracking-[0.3em] text-[#d6b66e]">
          LMA — LA MAQUINA AWARDS
        </p>
        <p className="mt-3 text-[10px] text-white/30">
          Proyecto independiente de reconocimiento a River Plate.
        </p>
        <p className="mt-2 text-[9px] text-white/20">EDICIÓN 2026</p>
      </footer>
    </main>
  );
}
