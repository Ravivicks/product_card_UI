import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ProductCard({
  image,
  title,
  description,
}: ProductCardProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg">
      <div className="relative w-full h-48">
        <Image
          src={image || "/product.webp"}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-4 flex flex-col items-center">
        <h2 className="text-xl font-bold text-center mb-2">{title}</h2>

        <p className="text-sm text-gray-600 text-center mb-4">{description}</p>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
          View More
        </button>
      </div>
    </div>
  );
}
