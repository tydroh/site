import { AxiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> => {
    return (await AxiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};
