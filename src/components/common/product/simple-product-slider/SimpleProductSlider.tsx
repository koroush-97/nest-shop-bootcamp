import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { SimpleProductCard } from "../product-card";
interface Props {
  sliderData: Array<any>;
  nextEl?: string;
  prevEl?: string;
}

export function SimpleProductSlider({ sliderData, nextEl, prevEl }: Props) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={2}
      autoplay={true}
      modules={[Autoplay, Navigation]}
      navigation={{
        nextEl: nextEl,
        prevEl: prevEl,
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 22,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      }}
    >
      {sliderData.map((slideData, index) => {
        return (
          <SwiperSlide key={index}>
            <SimpleProductCard data={slideData} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
