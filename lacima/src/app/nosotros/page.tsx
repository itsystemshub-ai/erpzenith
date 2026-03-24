import Image from "next/image";
import Link from "next/link";

export default function NosotrosPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#1d9e4a]">Inicio</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Nosotros</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nosotros</h1>
          <div className="w-12 h-1 bg-[#1d9e4a] mb-6 rounded" />
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Radiadores y Tanques de Venezuela, C.A.</strong> es una empresa venezolana especializada en la distribución y comercialización de repuestos para sistemas de enfriamiento automotriz.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Con sede en Valencia, Venezuela, ofrecemos la más amplia variedad de radiadores, tanques plásticos, colmenas, tapas, tomas de agua, termostatos y accesorios para todas las marcas del mercado nacional.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nuestro compromiso es brindar productos de calidad garantizada, con atención personalizada y precios competitivos para talleres, distribuidores y clientes finales.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/2025/02/cropped-cropped-logo-01_Milwaukee_v=1753193479.png"
            alt="Radiadores y Tanques de Venezuela"
            width={400} height={240}
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>
      </div>

      {/* Values */}
      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {[
          { icon: "🏆", title: "Calidad", desc: "Productos seleccionados con los más altos estándares de calidad para garantizar el rendimiento de tu vehículo." },
          { icon: "🤝", title: "Confianza", desc: "Más de años de experiencia en el mercado venezolano nos respaldan como referencia en el sector automotriz." },
          { icon: "🚗", title: "Variedad", desc: "Cubrimos todas las marcas del mercado: Ford, Toyota, Chevrolet, Hyundai, Nissan, Honda y muchas más." },
        ].map(v => (
          <div key={v.title} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">{v.icon}</div>
            <h3 className="font-bold text-gray-800 mb-2">{v.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="bg-[#1d9e4a] text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">¿Necesitas un repuesto?</h2>
        <p className="mb-6 text-white/90">Contáctanos y te ayudamos a encontrar lo que necesitas.</p>
        <Link href="/contactenos"
          className="bg-white text-[#1d9e4a] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block">
          Contáctenos
        </Link>
      </div>
    </div>
  );
}
