import { ApiResponseType } from "@/types";
import apiClient from "./config/ApiClient";
import { CategoryType } from "@/types/api/Category";

export function getFeaturedCategory(): Promise<ApiResponseType<CategoryType>> {
  return apiClient.get("/categories", {
    params: {
      populate: "thumbnail",
      filters: {
        is_featured: {
          $eq: true,
        },
      },
    },
  });
}
