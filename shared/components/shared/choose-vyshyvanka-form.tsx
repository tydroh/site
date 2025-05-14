
import React from "react";
import { VyshyvankaImage } from "./vyshyvanka-image";
import { Title } from "./title";
import { GroupVariants } from "./group-variants";
import { Button } from "../ui";
import { cn } from "@/shared/lib/utils";
import { Size, sizes } from "@/shared/constants/vyshyvanka";
import { Ingredient } from "@prisma/client";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items?: any[];
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChooseVyshyvankaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAdd,
  className, 
}) => {
const [size,setSize] = React.useState<Size>(38);

  const textDetaills = "Українське виробництво";
  const totalPrice = 350;

  


  return (
    <div className={cn(className, "flex flex-1")}>
        <VyshyvankaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text ={name} size="md" className="font-extrabold mb-1" />



        <p className="text-gray-400">{textDetaills}</p>

<GroupVariants 
items={sizes} 
value={String(size)} 
onClick={value => setSize(Number(value) as Size)}/>


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
