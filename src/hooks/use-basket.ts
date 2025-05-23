import {
  basketApiCall,
  updateBasketApiCall,
  UpdateBasketData,
} from "@/api/Basket";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useBasket() {
  const queryClient = useQueryClient();

  const { data: basketData } = useQuery({
    queryKey: ["get-basket"],
    queryFn: basketApiCall,
  });

  const basketItems = basketData?.data.attributes.basket_items ?? [];

  const mutate = useMutation({ mutationFn: updateBasketApiCall });

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

  return { basketItems: basketItems, addItem: addItemHandler };
}
