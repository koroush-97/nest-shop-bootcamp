import { ApiResponseSingleType } from "@/types";
import apiClient from "./config/ApiClient";
import { BasketType } from "@/types/api/Basket";

export interface UpdateBasketData {
  basket_items: Array<{
    product: {
      connect: Array<{ id: number }>;
    };
    quantity: number;
  }>;
}

export async function basketApiCall(): Promise<
  ApiResponseSingleType<BasketType>
> {
  return await apiClient.get("/my-basket");
}

export async function updateBasketApiCall(
  data: UpdateBasketData
): Promise<ApiResponseSingleType<BasketType>> {
  return await apiClient.put("/my-basket", {
    data: data,
  });
}
