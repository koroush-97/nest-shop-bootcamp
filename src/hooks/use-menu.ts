
import { useQuery } from "@tanstack/react-query";
import { getMenuApiCall } from "@/api/menu/Menu";
import { EntityType, MenuItemType, menuType, PopulateType } from "@/types";

interface Props {
    position : string
}

export function useMenu ({ position } : Props ) {
      const { data: menuData } = useQuery({
        queryKey: [getMenuApiCall.name],
        queryFn: () => getMenuApiCall(),
      });
    
      let MenuItems: null | PopulateType<MenuItemType> = null;
      
    
      if (menuData) {
        const findMenu = menuData.data.filter(
          (item: EntityType<menuType>) => item.attributes.position === position
        );
        if (findMenu.length > 0) {
          MenuItems = findMenu[0].attributes.menu_items;
          MenuItems.data.sort(
            (a: EntityType<MenuItemType>, b: EntityType<MenuItemType>) => {
              if (a.attributes.rank < b.attributes.rank) {
                return -1;
              }
    
              if (a.attributes.rank > b.attributes.rank) {
                return 1;
              }
    
              return 0;
            }
          );
        }

      
      }
    
      // //////////////////// findd category menu
      return {data : MenuItems}
    
}