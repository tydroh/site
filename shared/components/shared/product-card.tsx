import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number; // додано
  name: string;
  price: number;
  count?: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  count,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}> {/* виправлено */}
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Традиційна жіноча вишиванка з білого льону, оздоблена червоно-чорною
          хрестиковою вишивкою. Ручна робота, символи захисту та гармонії.
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            <b>{price} ₴</b>
          </span>
          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
            Додати
          </Button> 
        </div>
      </Link>
    </div>
  );
};
