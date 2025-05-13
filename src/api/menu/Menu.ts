import { ApiResponseType, menuType } from "@/types";
import apiClient from "../config/ApiClient";

export async function getMenuApiCall () : Promise<ApiResponseType<menuType>> {
    return  await apiClient.get('/menus' , {
        params: {
            populate : '*'
        }
    })
   
}
