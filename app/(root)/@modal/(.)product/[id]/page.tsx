
import React from "react";
import { ChooseProductModal } from "@/shared/components/shared";
import { notFound } from "next/navigation";
import { prisma } from "@/prisma/prisma-client";

export default async function ProductModalPage(props: { params: { id: string } }) {
  const { id } = await props.params;

  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: { ingredients: true, items: true },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}


// export default async function ProductModalPage(props: any) {
//   const { id } = await props.params;

//   const product = await prisma.product.findFirst({
//     where: {
//       id: Number(id),
//     },
//     include: {
//       ingredients: true,
//       items: true,
//     },
//   });

//   if (!product) return notFound();

//   return <ChooseProductModal product={product} />;
// }
