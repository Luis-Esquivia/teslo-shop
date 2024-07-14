import ProductGrid from "@/components/products/porduct-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products; 

interface Props {
  params: {
    id: Category;
  }
}


export default function({ params }: Props){

  const { id } = params;
  const products = seedProducts.filter(products => products.gender === id);

  const labels: Record<Category, string> = {
    'kid': 'para niños',
    'men': 'para hombres',
    'women': 'para mujeres',
    'unisex': 'para todos los productos'
  }

  if (!['kid', 'men', 'women'].includes(id)) {
    return notFound();
  }


  return (
    <>
    <Title
     title={`Articulos de ${ labels [id]}`}
     subtitle="Todos los productos"
     className="mb-2"
    />

    <ProductGrid
     products={products}
    />
   </>
  )
}
