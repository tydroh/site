
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { categories, _ingredients, products } from "./constans";
import { Prisma } from "@prisma/client";

const randomDecimalNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,  
  type,
  size,
}: {
  productId: number;
  type?: number;
  size?: number;
}) => {
  return {
    productId,
    price: randomDecimalNumber(890, 950),
    type,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
}

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.com",
        password: hashSync("11111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.com",
        password: hashSync("11111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
    skipDuplicates: true,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
    skipDuplicates: true,
  });

  // Отримуємо всі інгредієнти після створення, щоб мати їхні id
  const createdIngredients = await prisma.ingredient.findMany();

  // Створюємо продукти
  const createdProducts = [];
  for (const product of products) {
    const created = await prisma.product.create({ data: product });
    createdProducts.push(created);
  }

  // Створюємо продукти конкретно (наприклад, Вишиванки)
  const vyshyvanka1 = await prisma.product.create({
    data: {
      name: "Вишиванка жіноча",
      imageUrl: "https://images.prom.ua/5757286338_w215_h266_vishiti-sharfi-ruchnoyi.jpg",
      categoryId: 1,
      ingredients: {
        connect: createdIngredients.slice(0, 5).map((ing) => ({ id: ing.id })),
      },
    },
  });

  const vyshyvanka2 = await prisma.product.create({
    data: {
      name: "Вишиванка чоловіча",
      imageUrl: "https://images.prom.ua/5757286338_w215_h266_vishiti-sharfi-ruchnoyi.jpg",
      categoryId: 1,
      ingredients: {
        connect: createdIngredients.slice(5, 8).map((ing) => ({ id: ing.id })),
      },
    },
  });

  const vyshyvanka3 = await prisma.product.create({
    data: {
      name: "Вишиванка ручного виробництва",
      imageUrl: "https://images.prom.ua/5757286338_w215_h266_vishiti-sharfi-ruchnoyi.jpg",
      categoryId: 1,
      ingredients: {
        connect: createdIngredients.slice(0, 8).map((ing) => ({ id: ing.id })),
      },
    },
  });

  // Створюємо ProductItem для створених продуктів
  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: vyshyvanka1.id, type: 1, size: 46 }),
      generateProductItem({ productId: vyshyvanka1.id, type: 2, size: 48 }),
      generateProductItem({ productId: vyshyvanka1.id, type: 2, size: 50 }),

      generateProductItem({ productId: vyshyvanka2.id, type: 1, size: 46 }),
      generateProductItem({ productId: vyshyvanka2.id, type: 1, size: 52 }),
      generateProductItem({ productId: vyshyvanka2.id, type: 1, size: 40 }),
      generateProductItem({ productId: vyshyvanka2.id, type: 2, size: 54 }),
      generateProductItem({ productId: vyshyvanka2.id, type: 2, size: 40 }),
      generateProductItem({ productId: vyshyvanka2.id, type: 2, size: 46 }),

      generateProductItem({ productId: vyshyvanka3.id, type: 1, size: 50 }),
      generateProductItem({ productId: vyshyvanka3.id, type: 2, size: 48 }),
      generateProductItem({ productId: vyshyvanka3.id, type: 2, size: 46 }),

      // Автоматично створюємо ProductItem для всіх створених продуктів
      ...createdProducts.map((p) => generateProductItem({ productId: p.id })),
    ],
  });

 await prisma.cart.createMany({
 data: [
  {
    userId: 1,
    totalAmount: 0,
    token: '11111',
  },
  {
    userId: 2,
    totalAmount: 0,
    token: '22222',
  },
 ],
 });

 await prisma.cartItem.create({
  data:{
   
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1}, {id: 2}, {id:3}],
      },
    },
 });
}

async function main() {
  await down();
  await up();
  await prisma.$disconnect();
}

main();
