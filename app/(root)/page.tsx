import { prisma } from "@/prisma/prisma-client";
import { Container, Filters, Title, TopBar, ProductsGroupList } from "@/shared/components/shared";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });


  return (
    <>
      <Container className="mt-10">
        <Title text="Асортимент товару" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter((category)=> category.products.length>0)} />

      <Container className="mt-10 pb-14"> {/*mt до відступ зверху*/}
        <div className="flex gap-[75px]"> 
          {/* Фільтрація */}
          <div className="w-[250px]">
            <Filters />
          </div>

         {/* Список товарів */}
<div className="flex-1">
  <div className="flex flex-col gap-16">
    {categories.map((category) => {
      if (category.products.length === 0) return null;

      return (
        <ProductsGroupList
          key={category.id}
          title={category.name}
          categoryId={category.id}
          items={category.products}
        />
      );
    })}
  </div>
</div>
        </div>
      </Container>
    </>
  );
} 