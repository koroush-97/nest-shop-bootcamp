import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ProductDealsCard } from "@/components/common/product";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props {
  sliderData: Array<EntityType<ProductType>>;
}

export function DealsOFTheDaySlider({ sliderData }: Props) {
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
          spaceBetween: 22,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 22,
        },
      }}
    >
      {sliderData.map((slideData, index) => {
        return (
          <SwiperSlide key={index}>
            <ProductDealsCard data={slideData} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
