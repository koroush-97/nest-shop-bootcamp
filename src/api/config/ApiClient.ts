import axios from "axios";
import { toast } from "react-toastify";

const apiClient = axios.create({
  baseURL: "https://nest.navaxcollege.com/api",
  timeout: 120000,
});

apiClient.interceptors.request.use(function (request) {
  const token = window.localStorage.getItem("token");

  if (token) {
    request.headers.Authorization = "Bearer " + token;
  }

  return request;
});

apiClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response) {
      if (error.response.status === 404) {
        toast.error("منابع درخواستی وجو ندارد");
        console.warn("🔍 خطای 404:", {
          url: error.config?.url,
          method: error.config?.method,
          data: error.config?.data,
          response: error.response?.data,
        });
      } else if (error.response.status === 400) {
        console.log("SERVER RESPONSE:", error.response.data);
        toast.error(" پارامتر های ارسالی صحیح نمی باشند ");
      } else if (error.response.status === 401) {
        toast.error(" لطفا وارد شوید");
      } else if (error.response.status === 403) {
        toast.error(" شما دسترسی به این منابع را ندارید");
      } else {
        toast.error(" خطایی رخ داده است");
      }
    } else if (error.request) {
      toast.error("ارتباط با سرور بر قرار نیست.");
    } else {
      toast.error("خطای نامعلوم");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
