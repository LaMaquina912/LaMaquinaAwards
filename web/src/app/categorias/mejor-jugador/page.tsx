
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const nominees = [
  {
    id: 1,
    name: "Thiago Almada",
    number: "01",
    image: "/images/nominados/thiago-almada.jpg",
  },
  {
    id: 2,
    name: "Santiago Beltrán",
    number: "02",
    image: "/images/nominados/santiago-beltran.jpg",
  },
  {
    id: 3,
    name: "Ángel Correa",
    number: "03",
    image: "/images/nominados/angel-correa.jpg",
  },
  {
    id: 4,
    name: "Nicolás Otamendi",
    number: "04",
    image: "/images/nominados/nicolas-otamendi.jpg",
  },
];

export default function MejorJugadorPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  function selectPlayer(id: number) {
    if (confirmed) return;
    setSelected(id);
  }

  return (
    <main className="min-h-screen bg-[#0D0D0D] px-5 py-10 text-[#F5F1E8] md:px-12 md:py-16">

      {loaded && (
        <p className="mb-4 text-center text-sm font-bold tracking-widest text-green-400">
          JAVASCRIPT ACTIVO
        </p>
      )}

      <div className="mx-auto max-w-5xl">

        <header className="mb-12 flex items-center justify-between border-b border-[#C9A65B]/30 pb-5">
          <a href="/" className="text-xl font-bold tracking-[0.25em] text-[#C9A65B]">
            LMA
          </a>
          <span className="text-xs tracking-[0.2em] text-white/50">
            LA MAQUINA AWARDS · 2026
          </span>
        </header>

        <section className="mb-12 text-center">
          <p className="mb-3 text-xs tracking-[0.35em] text-[#C9A65B]">
            LA CATEGORÍA PRINCIPAL
          </p>
          <h1 className="text-3xl font-semibold tracking-wide md:text-5xl">
            MEJOR JUGADOR DEL AÑO
          </h1>
          <p className="mt-5 text-sm text-white/50">
            Elegí al jugador que merece llevarse el máximo reconocimiento.
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2">
          {nominees.map((player) => {
            const isSelected = selected === player.id;
            const isOther = confirmed && !isSelected;

            return (
              <div
                key={player.id}
                role="button"
                tabIndex={confirmed ? -1 : 0}
                aria-pressed={isSelected}
                onClick={() => selectPlayer(player.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    selectPlayer(player.id);
                  }
                }}
                className={`group relative h-[340px] touch-manipulation select-none overflow-hidden border text-left transition-all duration-300 ease-out
                  ${isSelected
                    ? "z-10 scale-[1.025] border-[#E8C66D] shadow-[0_0_30px_rgba(201,166,91,0.3)]"
                    : "border-white/20 hover:z-10 hover:scale-[1.02] hover:border-[#C9A65B]/80"
                  }
                  ${isOther ? "grayscale opacity-40" : ""}
                  ${confirmed ? "cursor-default" : "cursor-pointer"}
                `}
              >
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  draggable={false}
                  className={`pointer-events-none object-cover transition-transform duration-500 ${
                    isSelected ? "scale-105" : "group-hover:scale-105"
                  }`}
                />

                <div
                  className={`pointer-events-none absolute inset-0 transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-br from-[#E5C36C]/35 via-[#A8792C]/20 to-black/85"
                      : "bg-gradient-to-t from-black via-black/45 to-black/10"
                  }`}
                />

                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className={`text-lg font-bold tracking-widest ${
                      isSelected ? "text-[#FFE7A0]" : "text-white/75"
                    }`}>
                      {player.number}
                    </span>

                    {confirmed && isSelected ? (
                      <span className="border border-[#FFE7A0] bg-[#C9A65B] px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-black">
                        VOTADO
                      </span>
                    ) : isSelected ? (
                      <span className="rounded-full border border-[#FFE7A0] bg-[#D5AD52] px-3 py-2 text-xs font-bold text-black">
                        ✓
                      </span>
                    ) : null}
                  </div>

                  <div>
                    <div className={`mb-4 h-px w-full ${
                      isSelected ? "bg-[#FFE7A0]" : "bg-white/40"
                    }`} />
                    <h2 className={`text-2xl font-bold uppercase tracking-wide md:text-3xl ${
                      isSelected ? "text-[#FFE7A0]" : "text-white"
                    }`}>
                      {player.name}
                    </h2>
                    <p className={`mt-2 text-[10px] tracking-[0.25em] ${
                      isSelected ? "text-[#FFE7A0]/80" : "text-white/60"
                    }`}>
                      NOMINADO · LMA 2026
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-md text-center">
          {confirmed ? (
            <div className="border border-[#C9A65B]/40 bg-[#171717] p-6">
              <p className="text-sm font-semibold tracking-[0.25em] text-[#C9A65B]">
                VOTO REGISTRADO
              </p>
              <p className="mt-3 text-sm text-white/60">
                Tu elección es {nominees.find((p) => p.id === selected)?.name}.
              </p>
            </div>
          ) : (
            <>
              <button
                type="button"
                disabled={selected === null}
                onClick={() => setConfirmed(true)}
                className="w-full touch-manipulation bg-gradient-to-r from-[#D9B968] via-[#F1D78B] to-[#A8792C] px-8 py-4 text-sm font-bold tracking-[0.2em] text-[#17120A] transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:grayscale disabled:opacity-35"
              >
                CONFIRMAR VOTO
              </button>
              <p className="mt-4 text-xs text-white/40">
                {selected === null
                  ? "Seleccioná un jugador para continuar."
                  : "Podés cambiar tu elección antes de confirmar."}
              </p>
            </>
          )}
        </div>

        <footer className="mt-16 border-t border-[#C9A65B]/20 pt-6 text-center">
          <a href="/categorias" className="text-xs tracking-[0.2em] text-white/45 hover:text-[#C9A65B]">
            VOLVER A LAS CATEGORÍAS
          </a>
        </footer>

      </div>
    </main>
  );
}
