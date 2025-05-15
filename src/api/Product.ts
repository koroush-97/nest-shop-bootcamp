import { ApiResponseType } from "@/types";
import apiClient from "./config/ApiClient";
import { ProductType } from "@/types/api/Product";

// interface Props {
//   populate?: Array<"categories" | "thumbnail" | "gallary">;
//   filters?: {
//     is_popular?: boolean;
//     is_popular_fruit?: boolean;
//     is_best_seller?: boolean;
//     discount_expire_date?: boolean;
//   };
// }

// interface filters {
//   is_popular?: { $eq: boolean };
//   is_popular_fruit?: { $eq: boolean };
//   is_best_seller?: { $eq: boolean };
//   discount_expire_date?: { $notNull: boolean };
// }

// export function getAllProductsApiCall({
//   populate,
//   filters,
// }: Props): Promise<ApiResponseType<ProductType>> {
//   const customFilter: filters = {};

//   if (filters?.is_popular) {
//     customFilter.is_popular = { $eq: filters.is_popular };
//   }

//   if (filters?.is_popular_fruit) {
//     customFilter.is_popular_fruit = { $eq: filters.is_popular_fruit };
//   }

//   if (filters?.is_best_seller) {
//     customFilter.is_best_seller = { $eq: filters.is_best_seller };
//   }
//   if (filters?.discount_expire_date) {
//     customFilter.discount_expire_date = {
//       $notNull: filters.discount_expire_date,
//     };
//   }

//   return apiClient.get("/products", {
//     params: {
//       populate: populate?.join(","),
//       filters: filters,
//     },
//   });
// }

interface Props {
  populate?: Array<"categories" | "thumbnail" | "gallary">;
  filters?: {};
}

interface filters {
  is_popular?: { $eq: boolean };
  is_popular_fruit?: { $eq: boolean };
  is_best_seller?: { $eq: boolean };
  discount_expire_date?: { $notNull: boolean };
}

export function getAllProductsApiCall({
  populate,
  filters = {},
}: Props): Promise<ApiResponseType<ProductType>> {
  return apiClient.get("/products", {
    params: {
      populate: populate?.join(","),
      filters: filters,
    },
  });
}
