import FormDocente from '@/components/FormDocente';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-950 text-white overflow-x-hidden">
      {/* Hero */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              Más de 12,400 planeamientos entregados en 2025
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            DocuProfe AI<br />
            <span className="text-green-400">Tu planeamiento 2026 listo en 60 segundos</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Plan Anual + 8 Unidades Didácticas + Sesiones + Rúbricas<br />
            100% alineado al Currículo Nacional 2025-2026 · Formato MINEDU oficial
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-lg mb-10">
            <span>✓ Aceptado en UGEL y DRE</span>
            <span>✓ Actualizado noviembre 2025</span>
            <span>✓ Garantía de devolución 30 días</span>
          </div>

          {/* Precio destacado */}
          <div className="inline-block mb-10">
            <div className="bg-white text-black rounded-2xl p-8 shadow-2xl">
              <p className="text-gray-600 line-through">Precio normal S/. 197</p>
              <p className="text-5xl font-black text-green-600">Solo S/. 89</p>
              <p className="text-gray-600">Oferta cierre de año (hasta el 31 dic)</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-3xl border border-white/20">
          <FormDocente />
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-green-400">12,400+</p>
            <p className="text-sm">Docentes felices</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-400">4.9/5</p>
            <p className="text-sm">Reseñas en grupos</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-400">60 seg</p>
            <p className="text-sm">Entrega inmediata</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-400">100%</p>
            <p className="text-sm">Alineado MINEDU</p>
          </div>
        </div>

        <p className="text-center mt-16 text-sm opacity-70">
          © 2025 DocuProfe AI · Todos los derechos reservados · Hecho con ❤️ en Perú
        </p>
      </section>
    </main>
  );
}
