import { MenuItemType } from "./MenuItem"
import {  PopulateType } from "./Response"

  export interface menuType {
    title: string
    position: string
    menu_items: PopulateType<MenuItemType>
  }
  