import ProductCard from "@/components/product-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-sm">
        <ProductCard
          image="/product.webp"
          title="Premium Headphones"
          description="High-quality wireless headphones with noise cancellation and premium sound quality for an immersive audio experience."
        />
      </div>
    </main>
  );
}
