export interface Product {
  name: string;
  slug: string;
  sku: string;
  image: string;
  category: string;
  tags: string[];
}

export const CATEGORIES = [
  "Todos",
  "Radiadores",
  "Tanque Rad Entrada",
  "Tanque Rad Salida",
  "Tanque Rad Manguera",
  "Tanque Rad Retorno",
  "Tapas de Radiador",
  "Tapas de Reservorio",
  "Colmenas",
  "Boquillas Aluminio",
  "Boquillas Laton",
  "Empacaduras de Goma",
  "Enfriadores",
  "Herramientas",
  "Tomas de Agua",
  "Termostatos",
  "Intercooler / Aftercooler",
];

export const BRANDS = [
  "Chevrolet","Ford","Toyota","Mitsubishi","Jeep","Hyundai",
  "Honda","Fiat","Kia","Mazda","Nissan","Renault","Peugeot","Universal",
  "Chery","BMW","Mercedes-Benz","Daewoo","Iveco","Mack",
];

export const products: Product[] = [
  {
    name: "206 207 Dongfeng S30 Entrada",
    slug: "206-207-dongfeng-s30-entrada",
    sku: "PG-56542",
    image: "/images/2022/07/PG-56542-1.1-3_resize=320%2C320&ssl=1_v=1758739663.png",
    category: "Tanque Rad Entrada",
    tags: ["Peugeot"],
  },
  {
    name: "350Z Entrada",
    slug: "350z-entrada",
    sku: "NI-75747",
    image: "/images/2025/09/NI-75747-3.1_resize=320%2C320&ssl=1_v=1759148331.png",
    category: "Tanque Rad Entrada",
    tags: ["Nissan"],
  },
  {
    name: "4Runner V6 4.0 L (03-08) FJ Cruiser (Lateral) Entrada",
    slug: "4runner-v6-6-0-l-03-07-fj-cruiser-lateral-entrada",
    sku: "TY-6248",
    image: "/images/2025/09/TY-6248-4.1_resize=320%2C320&ssl=1_v=1759148810.png",
    category: "Tanque Rad Entrada",
    tags: ["Toyota"],
  },
  {
    name: "Radiador Chevrolet Aveo (Automático)",
    slug: "radiador-chevrolet-aveo-automatico",
    sku: "CH-AVEO-AT",
    image: "/images/2025/08/RA-CH-600369-32-AT-3.1_resize=320%2C320&ssl=1_v=1756491550.png",
    category: "Radiadores",
    tags: ["Chevrolet"],
  },
  {
    name: "Radiador Ford Fiesta Power / Max",
    slug: "radiador-ford-fiesta-power-max",
    sku: "FO-FIE-PM",
    image: "/images/2025/08/RA-TY-650590-26-AT-2.1_resize=320%2C320&ssl=1_v=1755112669.png",
    category: "Radiadores",
    tags: ["Ford"],
  },
  {
    name: "Radiador Toyota Corolla (2009-2014)",
    slug: "radiador-toyota-corolla-09-14",
    sku: "TY-COR-09",
    image: "/images/2025/09/TY-6248-4.1_resize=320%2C320&ssl=1_v=1759148810.png",
    category: "Radiadores",
    tags: ["Toyota"],
  },
  {
    name: "Tanque Mazda 3 (Salida)",
    slug: "tanque-mazda-3-salida",
    sku: "MZ-3-SAL",
    image: "/images/2025/09/NI-75747-3.1_resize=320%2C320&ssl=1_v=1759148331.png",
    category: "Tanque Rad Salida",
    tags: ["Mazda"],
  },
  {
    name: "Tapa Radiador 16 Libras Universal",
    slug: "tapa-radiador-16lbs",
    sku: "TP-16LBS",
    image: "/images/2022/07/PG-56542-1.1-3_resize=320%2C320&ssl=1_v=1758739663.png",
    category: "Tapas de Radiador",
    tags: ["Universal"],
  },
  {
    name: "4Runner V6 4.0L (03-08) Fj Cruiser (Automatico) Tanques Laterales",
    slug: "4runner-v6-4-0l-03-08-fj-cruiser-automatico-tanques-laterales",
    sku: "RA-TY-650590-26-AT",
    image: "/images/2025/08/RA-TY-650590-26-AT-2.1_resize=320%2C320&ssl=1_v=1755112669.png",
    category: "Radiadores",
    tags: ["Toyota"],
  },
  {
    name: "Radiador Chery Arauca / Orinoco 350 (Sincrónico)",
    slug: "radiador-chery-arauca-orinoco-350-sincronico",
    sku: "RA-CHI-350638-16-SINC",
    image: "/images/2023/09/RA-CHI-350638-16-SINC-1.1_resize=320%2C320&ssl=1_v=1759322127.png",
    category: "Radiadores",
    tags: ["Chery"],
  },
  {
    name: "Termostato Universal TM-475-190",
    slug: "termostato-universal-tm-475-190",
    sku: "TM-475-190",
    image: "/images/2024/08/TM-475-190_resize=320%2C320&ssl=1_v=1753193875.png",
    category: "Termostatos",
    tags: ["Universal"],
  },
  {
    name: "Termostato Universal TM-5500-KT",
    slug: "termostato-universal-tm-5500-kt",
    sku: "TM-5500-KT",
    image: "/images/2024/08/TM-5500-KT_resize=320%2C320&ssl=1_v=1753193833.png",
    category: "Termostatos",
    tags: ["Universal"],
  },
  {
    name: "Termostato Universal TM-580-212",
    slug: "termostato-universal-tm-580-212",
    sku: "TM-580-212",
    image: "/images/2024/08/TM-580-212_resize=320%2C320&ssl=1_v=1753193645.png",
    category: "Termostatos",
    tags: ["Universal"],
  },
  {
    name: "Termostato Universal TM-758-185",
    slug: "termostato-universal-tm-758-185",
    sku: "TM-758-185",
    image: "/images/2024/08/TM-758-185_resize=320%2C320&ssl=1_v=1753193837.png",
    category: "Termostatos",
    tags: ["Universal"],
  },
  {
    name: "Termostato Universal TM-838-235",
    slug: "termostato-universal-tm-838-235",
    sku: "TM-838-235",
    image: "/images/2024/08/TM-838-235_resize=320%2C320&ssl=1_v=1753193841.png",
    category: "Termostatos",
    tags: ["Universal"],
  },
];
