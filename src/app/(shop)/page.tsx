import ProductGrid from "@/components/products/porduct-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";


const products = initialData.products; 

export default function Home() {
  return (
    <>
     <Title
      title="Tienda"
      subtitle="Todos los productos"
      className="mb-2"
     />

     <ProductGrid
      products={products}
     />
    </>
  );
}
