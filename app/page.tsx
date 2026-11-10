import {
  AnuncioCard,
  AnuncioProps,
} from "@/app/components/molecules/AnuncioCard";

const anunciosDePrueba: AnuncioProps[] = [
  {
    id: "1",
    titulo: "Renta de Inflable Acuático Castillo Mágico",
    categoria: "Fiestas Infantiles",
    subcategoria: "Inflables",
    precio: 1200,
    tipoPrecio: "evento",
    imagenUrl:
      "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?auto=format&fit=crop&q=80&w=800",
    ubicacion: "CDMX / Sur",
    whatsapp: "5215512345678",
    destacado: true,
  },
  {
    id: "2",
    titulo: "Servicio de Banquete Gourmet y Mesas de Dulces",
    categoria: "Bodas",
    subcategoria: "Banquetes",
    precio: 95,
    tipoPrecio: "persona",
    imagenUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ubicacion: "Guadalajara, JAL",
    whatsapp: "5213312345678",
    destacado: false,
  },
];

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Proveedores Destacados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {anunciosDePrueba.map((anuncio) => (
          <AnuncioCard key={anuncio.id} anuncio={anuncio} />
        ))}
      </div>
    </main>
  );
}
