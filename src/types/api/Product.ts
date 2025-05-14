import { CategoryType } from "./Category";
import { ImageType } from "./Image";
import { EntityType, PopulateType } from "./Response";

export interface ProductType {
  title: string;
  description: any;
  quantity: number;
  price: number;
  sell_price?: number;
  discount_expire_date?: string;
  rate: number;
  weight?: number;
  is_popular: boolean;
  is_top_selling: boolean;
  is_trending: boolean;
  SKU: string | null;
  label: string | null;
  unit: string;
  total: number | null;
  sold: number | null;
  is_popular_fruit?: boolean;
  is_best_seller?: boolean;
  thumbnail?: {
    data: EntityType<ImageType>;
  };
  gallery?: PopulateType<ImageType>;
  categories?: PopulateType<CategoryType>;
}
