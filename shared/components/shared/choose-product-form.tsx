
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { cn } from "@/shared/lib/utils";

interface Props {
  imageUrl: string;
  name: string;
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  onClickAdd,
  className,
}) => {
  const textDetaills = "Українське виробництво";
  const totalPrice = 350;

  return (
    <div className={cn(className, "flex flex-1")}>

      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
        src={imageUrl}
        alt={name}
     className="relative left-2 top-2 transition-all z-10 duration-300 w-[400px] h-[400px]"
             />
             </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>
        <Button
  onClick={onClickAdd}
  className="w-full bg-[#ff5c00] hover:bg-[#e55300] text-white text-base font-semibold py-4 rounded-xl transition mt-10"
>
  Додати в корзину за {totalPrice} ₴
</Button>

      </div>
    </div>
  );
};
