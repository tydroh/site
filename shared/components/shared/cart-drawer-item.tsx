import { cn } from "@/shared/lib/utils";
import React from "react";

import * as CartItem from './cart-item-details'
import { CartItemProps } from "@/shared/cart-item-details/cart-item-details.types";

interface Props extends CartItemProps {
    className?: string;
}

export const CartItemDrawer: React.FC<Props> = ({
    id,
    imageUrl,
    name,
    price,
    quantity,
    className,
}) => {
    return (
        <div className={cn('flex bg-white p-5 gap-6', className)}>
            <CartItem.Image scr = {imageUrl} />
            <div className="flex-1">
<CartItem.Info/>
            </div>
        </div>
    );
};
