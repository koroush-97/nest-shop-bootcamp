// components
import { Section, Banner, IconBox } from "@/components";
import { FeaturedCategories } from "@/components";
import { MiniProductSlider } from "@/components";
import { SimpleProductSlider } from "@/components/common/product";

// mock
import { popularProducts } from "@/mock/PopularProducts";
import { PopularFruit } from "@/mock/PopularFruit";

export default function Home() {
  return (
    <>
      <Section>
        <Banner
          title={"Dont miss amazing grocey deals"}
          subtitle={"sign up for the daily newsletter"}
          bgImage={"/assets/images/fresh-apples.png"}
          image={"/assets/images/banner_bg.png"}
        />
      </Section>

      <section className="container">
        <div className="hidden sm:flex mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
        </div>
        <FeaturedCategories />
      </section>

      <section className="container mt-[50px]">
        <MiniProductSlider />
      </section>

      <section className="container mt-[50px]">
        <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Popular Products</h2>
          <div className="flex items-center gap-3">
            <IconBox
              icon="swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"
              size={24}
            />
            <IconBox
              icon="swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"
              size={24}
            />
          </div>
        </div>

        <SimpleProductSlider
          nextEl={".swiper-nav-right"}
          prevEl={".swiper-nav-left"}
          sliderData={popularProducts}
        />
      </section>

      <section className="container mt-[50px]">
        <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Popular Fruite</h2>
          <div className="flex items-center gap-3">
            <IconBox
              icon="swiper-nav-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"
              size={24}
            />
            <IconBox
              icon="swiper-nav-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"
              size={24}
            />
          </div>
        </div>

        <SimpleProductSlider
          nextEl={".swiper-nav-right2"}
          prevEl={".swiper-nav-left2"}
          sliderData={PopularFruit}
        />
      </section>
    </>
  );
}
