import Image from "next/image";
import { MessageCircle, MapPin, Eye } from "lucide-react";
import { Badge } from "@/app/components/atoms/Badge";
import { Button } from "@/app/components/atoms/Button";

export interface AnuncioProps {
  id: string;
  titulo: string;
  categoria: string;
  subcategoria: string;
  precio: number;
  tipoPrecio: "evento" | "persona" | "cotizacion";
  imagenUrl: string;
  ubicacion: string;
  whatsapp: string; // Ej. "5215512345678"
  destacado?: boolean;
}

export function AnuncioCard({ anuncio }: { anuncio: AnuncioProps }) {
  const mensajeWA = encodeURIComponent(
    `Hola, vi tu anuncio de "${anuncio.titulo}" en el directorio y me gustaría solicitar información.`,
  );
  const waUrl = `https://wa.me/${anuncio.whatsapp}?text=${mensajeWA}`;

  const precioFormateado = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(anuncio.precio);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Insignia de Destacado */}
      {anuncio.destacado && (
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="amber">Destacado</Badge>
        </div>
      )}

      {/* Contenedor de la Imagen */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={anuncio.imagenUrl}
          alt={anuncio.titulo}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-4">
        {/* Categoría y Ubicación */}
        <div className="mb-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span className="font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            {anuncio.subcategoria}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {anuncio.ubicacion}
          </span>
        </div>

        {/* Título */}
        <h3 className="line-clamp-2 text-base font-bold text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
          {anuncio.titulo}
        </h3>

        {/* Precio */}
        <div className="mt-3 mb-4">
          {anuncio.tipoPrecio === "cotizacion" ? (
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Cotización a medida
            </span>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-gray-900 dark:text-white">
                {precioFormateado}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {anuncio.tipoPrecio === "evento" ? "/ evento" : "/ persona"}
              </span>
            </div>
          )}
        </div>

        {/* Botonera utilizando átomos */}
        <div className="mt-auto flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
          <Button href={`/anuncios/${anuncio.id}`} variant="secondary">
            <Eye className="h-4 w-4" />
            Detalles
          </Button>

          <Button
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            WhatsApp
          </Button>
        </div>
      </div>
    </article>
  );
}
