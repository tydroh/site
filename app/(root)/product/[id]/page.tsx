import { prisma } from "@/prisma/prisma-client";
import { Container, GroupVariants, Title, VyshyvankaImage } from "@/shared/components/shared";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number(params.id); // ← деструктуризація ПІСЛЯ того, як params доступний
  if (isNaN(productId)) return notFound();

  const product = await prisma.product.findUnique({
    where: { id: productId }
  });
  if (!product) return notFound();

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <VyshyvankaImage imageUrl={product.imageUrl} size={40} />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1" />

          <p className="text-gray-400">bbvkjdbvkjdfkjvdfbkvjfkj</p>

          <GroupVariants
            items={[
              { name: 'XS', value: '1' },
              { name: 'S', value: '2' },
              { name: 'M', value: '3' },
              { name: 'XL', value: '4' },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
