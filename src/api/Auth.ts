import { RegisterResponseType } from "@/types/api/Auth";
import apiClient from "./config/ApiClient";

interface Props {
  username: string;
  email: string;
  password: string;
}

export function registerApiCall(data: Props): Promise<RegisterResponseType> {
  return apiClient.post("/auth/local/register", data);
}
