import { ApiResponseSingleType } from "@/types";
import apiClient from "./config/ApiClient";
import { BasketType } from "@/types/api/Basket";

export async function basketApiCall(): Promise<
  ApiResponseSingleType<BasketType>
> {
  return await apiClient.get("/my-basket");
}
