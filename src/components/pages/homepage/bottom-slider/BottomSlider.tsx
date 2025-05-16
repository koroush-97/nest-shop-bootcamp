import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ProductVerticalList } from "@/components/common";
import { getAllProductsApiCall } from "@/api/Product";
import { ApiResponseType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/types/api/Product";

interface Props {}

export function BottomSlider({}: Props) {
  const { data: topRateData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "top-rate"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["thumbnail"],
        sort: ["rate:desc"],
        pagination: {
          start: 1,
          limit: 3,
          withCount: false,
        },
      }),
  });

  const { data: topSellingApiData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "top-selling"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["thumbnail"],
        filters: {
          is_top_selling: { $eq: true },
        },
        sort: ["sold:desc"],
        pagination: {
          start: 0,
          limit: 8,
          withCount: false,
        },
      }),
  });

  const { data: recentlyApiData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "recently-added"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["thumbnail"],

        filters: {
          is_trending: { $eq: true },
        },
        pagination: {
          start: 1,
          limit: 3,
          withCount: false,
        },
      }),
  });

  const { data: trendingApiData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "trending"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["thumbnail"],

        pagination: {
          start: 0,
          limit: 3,
        },
      }),
  });

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      autoplay={true}
      modules={[Autoplay]}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 22,
        },
      }}
    >
      <SwiperSlide>
        {topSellingApiData && (
          <ProductVerticalList
            title="Top Selling"
            data={topSellingApiData?.data}
          />
        )}
      </SwiperSlide>
      {trendingApiData && (
        <SwiperSlide>
          <ProductVerticalList
            title="Trending Products"
            data={trendingApiData?.data}
          />
        </SwiperSlide>
      )}

      {recentlyApiData && (
        <SwiperSlide>
          <ProductVerticalList title="Recently" data={recentlyApiData?.data} />
        </SwiperSlide>
      )}

      {topRateData?.data && (
        <SwiperSlide>
          <ProductVerticalList title="Top Rate" data={topRateData.data} />
        </SwiperSlide>
      )}
    </Swiper>
  );
}
