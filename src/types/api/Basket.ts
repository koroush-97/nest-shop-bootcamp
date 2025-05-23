import { ProductType } from "./Product";
import { EntityType } from "./Response";

export interface BasketType {
  uuid: any;
  basket_items: Array<BasketItemType>;
}

export interface BasketItemType {
  id: number;
  quantity: number;
  product: {
    data: EntityType<ProductType>;
  };
}
