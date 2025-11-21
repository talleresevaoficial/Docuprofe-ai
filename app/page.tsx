import FormDocente from '@/components/FormDocente';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-950 text-white overflow-x-hidden">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold uppercase">
              Más de 12,400 planeamientos entregados en 2025
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            DocuProfe AI
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-green-400 mb-8">
            Tu planeamiento completo 2026 listo en 60 segundos
          </p>

          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Plan Anual + 8 Unidades Didácticas completas + Sesiones + Rúbricas + Fichas<br />
            100% alineado al Currículo Nacional 2025-2026 · Formato oficial MINEDU
          </p>

          <div className="bg-white text-black inline-block rounded-2xl p-8 shadow-2xl mb-12">
            <p className="text-gray-600 line-through text-2xl">Antes S/. 297</p>
            <p className="text-6xl font-black text-green-600">Solo S/. 89</p>
            <p className="text-lg">Oferta especial cierre de año</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-3xl border border-white/20">
          <FormDocente />
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm opacity-70">
            © 2025 DocuProfe AI • Hecho con ❤️ en Perú • Garantía total de satisfacción
          </p>
        </div>
      </section>
    </main>
  );
}
