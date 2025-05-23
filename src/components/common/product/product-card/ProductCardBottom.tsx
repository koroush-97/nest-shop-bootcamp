import { BasketContext } from "@/store/BasketContext";
import { IconBox } from "../../ui";

import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { useContext } from "react";
import { useBasket } from "@/hooks/use-basket";

interface Props {
  productData: EntityType<ProductType>;
}

export function ProductCardBottom({ productData }: Props) {
  const { addItem, updateItem, getItem } = useBasket();

  const basketItem = getItem(productData.id);

  // const basket = useContext(BasketContext);
  // const currentProductInBasket = basket.getItem(productData.id);

  return (
    <div className="add-product">
      {basketItem ? (
        <div
          className="input-product__container  border-[1px] rounded-[4px] border-green-300 text-green-300 max-h-[30px] min-h-[20px] p-[3px] w-[80px] flex justify-between"
          style={{ border: "2px solid blue" }}
        >
          <div
            className="flex flex-col justify-between"
            style={{ border: "2px solid red", height: "auto" }}
          >
            <IconBox
              icon="up icon-angle-small-up cursor-pointer "
              onClick={() => updateItem(productData.id, "increase")}
              size={22}
            />
            <IconBox
              onClick={() => updateItem(productData.id, "descrese")}
              icon="down icon-angle-small-down cursor-pointer "
              size={22}
            />
          </div>
          {basketItem.quantity}
        </div>
      ) : (
        <button
          onClick={() => addItem(productData.id)}
          className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]"
        >
          Adds +
        </button>
      )}
    </div>
  );
}
