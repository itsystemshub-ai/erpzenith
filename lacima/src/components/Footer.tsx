import Link from "next/link";
import Image from "next/image";

const brandLogos = [
  { name: "Ford", file: "/images/2022/08/logos_ford_W_w=640&ssl=1.png" },
  { name: "Chevrolet", file: "/images/2022/08/logos_chevrolet_W_w=640&ssl=1.png" },
  { name: "Toyota", file: "/images/2022/08/logos_toyota_W_w=640&ssl=1.png" },
  { name: "Jeep", file: "/images/2022/08/logos_jeep_W_w=640&ssl=1.png" },
  { name: "Hyundai", file: "/images/2022/08/logos_hyundai_W_w=640&ssl=1.png" },
  { name: "Fiat", file: "/images/2022/08/logos_fiat_W_w=640&ssl=1.png" },
  { name: "Chery", file: "/images/2022/08/logos_chery_W_w=640&ssl=1.png" },
  { name: "Honda", file: "/images/2022/08/logos_honda_W_w=640&ssl=1.png" },
  { name: "Nissan", file: "/images/2022/08/logos_nissan_W_w=640&ssl=1.png" },
  { name: "Renault", file: "/images/2022/08/logos_renault_W_w=640&ssl=1.png" },
  { name: "Volkswagen", file: "/images/2022/08/logos_volkswagen_W_w=640&ssl=1.png" },
  { name: "Kia", file: "/images/2023/01/logos_kia_W_w=640&ssl=1.png" },
  { name: "Mitsubishi", file: "/images/2023/01/logos_mitsubishi_W_w=640&ssl=1.png" },
  { name: "Peugeot", file: "/images/2023/01/logos_peugeot_W_w=640&ssl=1.png" },
  { name: "Daewoo", file: "/images/2023/01/logos_daewoo_W_w=640&ssl=1.png" },
  { name: "Iveco", file: "/images/2023/01/logos_iveco_W_w=640&ssl=1.png" },
  { name: "Mack", file: "/images/2023/01/logos_mack_W_w=640&ssl=1.png" },
  { name: "BMW", file: "/images/2023/08/logos_bmw_w_w=640&ssl=1.png" },
  { name: "Mazda", file: "/images/2023/08/logos_mazda_W_w=640&ssl=1.png" },
  { name: "Mercedes-Benz", file: "/images/2023/08/logos_mercedesbenz_W_w=640&ssl=1.png" },
];

const popularBrands = ["Chevrolet","Ford","Toyota","Mitsubishi","Jeep","Hyundai","Honda","Fiat","Kia","Mazda","Nissan","Renault","Peugeot","Chery","BMW","Mercedes-Benz","Daewoo","Iveco","Mack"];

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-100 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Brand slider */}
          <h3 className="text-center font-bold text-gray-800 text-lg mb-6">Nuestras Marcas</h3>
          <div className="overflow-hidden mb-8">
            <div className="brand-track">
              {[...brandLogos, ...brandLogos].map((b, i) => (
                <div key={i} className="mx-6 flex-shrink-0">
                  <Image src={b.file} alt={b.name} width={100} height={60}
                    className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-300 mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: Categories */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Categorías de Productos</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Radiadores","Tanque Rad Entrada","Tanque Rad Salida","Tomas de Agua","Tapas de Radiador","Colmenas","Enfriadores"].map(c => (
                  <li key={c}>
                    <Link href={`/?categoria=${encodeURIComponent(c)}`}
                      className="hover:text-[#1d9e4a] hover:pl-1 transition-all">
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Quick links + brands */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Enlace Rápido</h4>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li><Link href="/" className="hover:text-[#1d9e4a] transition-colors">Inicio</Link></li>
                <li><Link href="/" className="hover:text-[#1d9e4a] transition-colors">Productos</Link></li>
                <li><Link href="/contactenos" className="hover:text-[#1d9e4a] transition-colors">Contáctenos</Link></li>
                <li><Link href="/nosotros" className="hover:text-[#1d9e4a] transition-colors">Nosotros</Link></li>
              </ul>
              <h4 className="font-bold text-gray-800 mb-3">Marcas Populares</h4>
              <div className="flex flex-wrap gap-1.5">
                {popularBrands.map(b => (
                  <Link key={b} href={`/?q=${b}`}
                    className="text-xs px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-[#1d9e4a] hover:text-[#1d9e4a] transition-colors">
                    {b}
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Contacto</h4>
              <p className="font-semibold text-sm text-gray-800 mb-1">Radiadores y Tanques de Venezuela, C.A.</p>
              <p className="text-sm text-gray-600 mb-1">RIF: J-50101341-1</p>
              <p className="text-sm text-gray-600 mb-4">Valencia - Venezuela</p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="text-[#1d9e4a] mr-2">📞</span>(0241) 414.56.19
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <span className="text-[#1d9e4a] mr-2">📱</span>(0414) 143.51.14
              </p>
              <p className="text-xs font-semibold text-gray-700 mb-2">Correos Electrónicos:</p>
              <ul className="space-y-1 text-sm">
                {["ventas@rytdv.com.ve","info@rytdv.com.ve","logistica@rytdv.com.ve"].map(e => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="text-gray-600 hover:text-[#1d9e4a] transition-colors">{e}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Logo + social */}
            <div className="flex flex-col items-center text-center">
              <Link href="/">
                <Image
                  src="/images/2022/07/cropped-logo-corporativo_800_resize=300%2C189&ssl=1.png"
                  alt="RYTDV Logo"
                  width={200} height={126}
                  className="h-24 w-auto object-contain mb-4"
                />
              </Link>
              <div className="flex gap-3 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61550056921038" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://instagram.com/rytdvzla" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#e1306c] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="mailto:info@rytdv.com.ve"
                  className="w-9 h-9 rounded-full bg-[#dd4b39] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Email">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#1d9e4a] text-white text-sm py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Radiadores y Tanques de Venezuela, C.A. - Todos los derechos reservados.
          </span>
          <span>Diseñado con Next.js</span>
        </div>
      </div>
    </footer>
  );
}
