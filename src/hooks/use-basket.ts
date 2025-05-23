import {
  basketApiCall,
  updateBasketApiCall,
  UpdateBasketData,
  UUID2UserApiCall,
} from "@/api/Basket";
import { BasketItemType } from "@/types/api/Basket";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useBasket() {
  const queryClient = useQueryClient();

  const { data: basketData } = useQuery({
    queryKey: ["get-basket"],
    queryFn: basketApiCall,
  });

  const basketItems = basketData?.data.attributes.basket_items ?? [];

  const mutate = useMutation({ mutationFn: updateBasketApiCall });
  const mutateUUID2User = useMutation({
    mutationFn: UUID2UserApiCall,
    onSuccess: (response) => {
      console.log("response", response);
      window.localStorage.removeItem("uuid");
      queryClient.invalidateQueries({ queryKey: ["get-basket"] });
    },
  });

  const addItemHandler = (producrId: number) => {
    const prepareUpdateData = basketItems.map((item) => {
      return {
        product: {
          connect: [{ id: item.product.data.id }],
        },
        quantity: item.quantity,
      };
    });

    prepareUpdateData.push({
      product: {
        connect: [{ id: producrId }],
      },
      quantity: 1,
    });

    const updateData: UpdateBasketData = {
      basket_items: prepareUpdateData,
    };

    mutate.mutate(updateData, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({ queryKey: ["get-basket"] });
      },
    });
  };

  const updateItemHandler = (
    producrId: number,
    type: "increase" | "descrese"
  ) => {
    let prepareUpdateData = basketItems.map((item) => {
      return {
        product: {
          connect: [{ id: item.product.data.id }],
        },
        quantity: item.quantity,
      };
    });

    prepareUpdateData = prepareUpdateData.map((item) => {
      if (item.product.connect[0].id === producrId) {
        if (type === "increase") {
          item.quantity = item.quantity + 1;
        } else {
          item.quantity = item.quantity - 1;
        }
      }
      return item;
    });

    const updateData: UpdateBasketData = {
      basket_items: prepareUpdateData,
    };

    mutate.mutate(updateData, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({ queryKey: ["get-basket"] });
      },
    });
  };

  const getItemHandler = (productId: number): BasketItemType | undefined => {
    return basketItems.find((item) => item.product.data.id === productId);
  };

  const uuid2userHandler = () => {
    const token = window.localStorage.getItem("token");
    const uuid = window.localStorage.getItem("uuid");

    if (token && uuid) {
      if (basketItems.length > 0) {
        mutateUUID2User.mutate(uuid);
      }
    } else {
      window.localStorage.removeItem("uuid");
      queryClient.invalidateQueries({ queryKey: ["get-basket"] });
    }
  };

  return {
    basketItems: basketItems,
    addItem: addItemHandler,
    updateItem: updateItemHandler,
    getItem: getItemHandler,
    uuid2user: uuid2userHandler,
  };
}
