
const categories = [
  {
    number: "01",
    name: "MEJOR GOL DEL AÑO",
    type: "INDIVIDUAL",
    description: "El momento que hizo explotar al Monumental.",
    image: "/images/categorias/mejor-gol.jpg",
  },
  {
    number: "02",
    name: "MEJOR PARTIDO DEL AÑO",
    type: "COLECTIVO",
    description: "Una actuación que quedó en la memoria.",
    image: "/images/categorias/mejor-partido.jpg",
  },
  {
    number: "03",
    name: "MEJOR JUGADOR DEL AÑO",
    type: "INDIVIDUAL",
    description: "El máximo reconocimiento de LaMaquinaAwards.",
    image: "/images/categorias/mejor-jugador.jpg",
  },
];

export default function CategoriasPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] px-5 py-10 text-[#F5F1E8] md:px-12 md:py-16">
      <header className="mx-auto mb-12 flex max-w-6xl items-center justify-between border-b border-[#C9A65B]/30 pb-5">
        <a href="/" className="text-xl font-bold tracking-[0.25em] text-[#C9A65B]">
          LMA
        </a>
        <span className="text-xs tracking-[0.2em] text-white/50">
          LA MAQUINA AWARDS · 2026
        </span>
      </header>

      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs tracking-[0.35em] text-[#C9A65B]">
            LA TEMPORADA SE RECONOCE
          </p>
          <h1 className="text-4xl font-semibold tracking-wide md:text-6xl">
            LAS CATEGORÍAS
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/55 md:text-base">
            Cada premio tiene una historia. Elegí la categoría y descubrí a sus nominados.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.number}
              className="group relative flex min-h-[330px] flex-col justify-end overflow-hidden border border-[#C9A65B]/20 bg-[#171717] p-6 transition duration-300 hover:border-[#C9A65B]/70"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm tracking-[0.2em] text-[#C9A65B]">
                    {category.number}
                  </span>
                  <span className="border border-white/20 px-3 py-1 text-[9px] tracking-[0.2em] text-white/65">
                    {category.type}
                  </span>
                </div>

                <h2 className="text-2xl font-semibold leading-tight tracking-wide">
                  {category.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {category.description}
                </p>

                <div className="mt-6 h-px w-full bg-[#C9A65B]/40" />

                <p className="mt-4 text-[10px] tracking-[0.25em] text-[#C9A65B]">
                  PRÓXIMAMENTE
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-[#C9A65B]/20 pt-6 text-center">
          <a
            href="/"
            className="text-xs tracking-[0.2em] text-white/50 transition hover:text-[#C9A65B]"
          >
            VOLVER AL INICIO
          </a>
        </div>
      </section>
    </main>
  );
}
