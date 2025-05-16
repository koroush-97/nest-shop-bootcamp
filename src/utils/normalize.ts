export interface NormalizedProduct {
  image: string;
  title: string;
  rate: number;
  price: number;
  sale_price?: number | null;
}

export function normalizeProduct(item: any): NormalizedProduct {
  const attr = item.attributes || {};

  return {
    image: attr.thumbnail?.data?.attributes?.url || "/fallback.jpg",
    title: attr.title || "",
    rate: attr.rate || 0,
    price: attr.price || 0,
    sale_price: attr.sale_price ?? attr.sell_price ?? null,
  };
}
