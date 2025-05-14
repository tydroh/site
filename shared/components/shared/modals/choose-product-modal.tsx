'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { ProductWithRelations } from "@/@types/prisma";
import { ChooseProductForm } from "../choose-product-form";
import { ChooseVyshyvankaForm } from "../choose-vyshyvanka-form";
import { Dialog, DialogContent, DialogTitle } from "../../ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const isVyshyvankaForm = Boolean(product.items[0].type);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1080px] max-w-[1080px] min-h-[600px] bg-white overflow-hidden",
          className
        )}
      >
        {/* Прихований заголовок для screen reader'ів */}
        <DialogTitle asChild>
          <VisuallyHidden>{product.name}</VisuallyHidden>
        </DialogTitle>

        {isVyshyvankaForm ? (
         <ChooseVyshyvankaForm
  imageUrl={product.imageUrl}
  name={product.name}
  ingredients={product.ingredients} 
/>

        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
