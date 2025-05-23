import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { createContext, ReactNode, useReducer, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ProductItem {
  productId: number;
  title: string;
  price: number;
  img?: string;
  quantity: number;
}

export const BasketContext = createContext<{
  basketItems: Array<ProductItem>;
  addItem: (product: EntityType<ProductType>) => void;
  increaseItem: (productId: number) => void;
  decreaseItem: (productId: number) => void;
  deleteItem: (productId: number) => void;
  getItem: (productId: number) => undefined | ProductItem;
}>({
  basketItems: [],
  addItem: (product: EntityType<ProductType>) => {},
  increaseItem: (productId: number) => {},
  decreaseItem: (productId: number) => {},
  deleteItem: (productId: number) => {},
  getItem: (productId: number) => undefined,
});

type Action =
  | { type: "ADD_ITEM"; product: EntityType<ProductType> }
  | { type: "INCREASE_ITEM"; productId: number }
  | { type: "DECREASE_ITEM"; productId: number }
  | { type: "DELETE_ITEM"; productId: number };

const basketReducer = (currentState: ProductItem[], action: Action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...currentState,
        {
          productId: action.product.id,
          title: action.product.attributes.title,
          img: action.product.attributes.thumbnail?.data?.attributes.url,
          price: action.product.attributes.price,
          quantity: 1,
        },
      ];
    case "INCREASE_ITEM":
      return currentState.map((item) => {
        if (item.productId === action.productId)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
    case "DECREASE_ITEM":
      const currentProduct = currentState.find(
        (item) => item.productId === action.productId
      );

      if (currentProduct && currentProduct.quantity === 1) {
        // remove
        return currentState.filter(
          (item) => item.productId != action.productId
        );
      }
      return currentState.map((item) => {
        if (item.productId === action.productId)
          return { ...item, quantity: item.quantity - 1 };
        return item;
      });
    case "DELETE_ITEM":
      return currentState.filter((item) => item.productId != action.productId);
    default:
      return currentState;
  }
};

export const BasketContextProvider = (prop: Props) => {
  // const [basketItems, setBasketItems] = useState<Array<ProductItem>>([]);

  const [basketItems, dispatch] = useReducer(basketReducer, []);

  const addItemsHandler = (product: EntityType<ProductType>) => {
    dispatch({ type: "ADD_ITEM", product: product });
  };

  const increaseItemHandler = (productId: number) => {
    dispatch({ type: "INCREASE_ITEM", productId: productId });
  };

  const decreaseItemHandler = (productId: number) => {
    dispatch({ type: "DECREASE_ITEM", productId: productId });
  };

  const deleteItemHandler = (productId: number) => {
    dispatch({ type: "DELETE_ITEM", productId: productId });
  };

  const getItemHandler = (productId: number): ProductItem | undefined => {
    return basketItems.find((item) => item.productId === productId);
  };

  return (
    <BasketContext.Provider
      value={{
        getItem: getItemHandler,
        basketItems: basketItems,
        addItem: addItemsHandler,
        increaseItem: increaseItemHandler,
        decreaseItem: decreaseItemHandler,
        deleteItem: deleteItemHandler,
      }}
    >
      {prop.children}
    </BasketContext.Provider>
  );
};
