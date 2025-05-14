import apiClient from "./config/ApiClient";

interface Props {
  populate?: Array<"categories" | "thumbnail" | "gallary">;
  filters?: {
    is_popular?: boolean;
  };
}

interface filters {
  is_popular?: { $eq: boolean };
}

export function getAllProductsApiCall({ populate, filters }: Props) {
  const customFilter: filters = {};

  if (filters?.is_popular) {
    customFilter.is_popular = { $eq: filters.is_popular };
  }

  return apiClient.get("/products", {
    params: {
      populate: populate?.join(","),
      filters: filters,
    },
  });
}
