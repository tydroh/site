import { Ingredient } from "@prisma/client";


interface Props {
  name: string;
  size?: number | null;
  type?: number | null;
  ingredients?: Ingredient[];
}

export const CartItemInfo: React.FC<Props> = ({ name, ingredients }) => {
  const details = [];

  

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      <p className="text-xs text-gray-400">{details.join(', ')}</p>
    </div>
  );
};
