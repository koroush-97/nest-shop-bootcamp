import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { TrendingProductsMock } from "@/mock/TrendingProductsMock";
import { ProductVerticalList } from "@/components/common";
import { TopSelling } from "@/mock/TopSellingMock";
import { RecentlyAddedMock } from "@/mock/RecentlyAdded";
import { TopRatedMock } from "@/mock/TopRatedMock";

interface Props {}

export function BottomSlider({}: Props) {
  //
  //
  //
  //
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
        <ProductVerticalList title="Top Selling" data={TopSelling} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductVerticalList
          title="Trending Products"
          data={TrendingProductsMock}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductVerticalList title="Recently" data={RecentlyAddedMock} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductVerticalList title="Top Rate" data={TopRatedMock} />
      </SwiperSlide>
    </Swiper>
  );
}
