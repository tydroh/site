import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
  imageUrl: string;
  size?: 20 | 30 | 40; // Розміри зберігаємо, якщо треба далі керувати
}

export const VyshyvankaImage: React.FC<Props> = ({ imageUrl, className, size }) => {
  return (
    <div className={cn("flex items-center justify-center flex-1 relative w-full", className)}>
      <img
        src={imageUrl}
        alt="Logo"
        className={cn("relative left-2 top-2 transition-all duration-300", {
          "w-[300px] h-[300px]": size === 20,
          "w-[400px] h-[400px]": size === 30,
          "w-[500px] h-[500px]": size === 40,
        })}
      />
    </div>
  );
};
