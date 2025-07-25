// components
import {
  Section,
  Banner,
  IconBox,
  BestSellerSlider,
  DealsOFTheDaySlider,
  BottomSlider,
} from "@/components";
import { FeaturedCategories } from "@/components";
import { MiniProductSlider } from "@/components";
import { SimpleProductSlider } from "@/components/common/product";
// mock

import Link from "next/link";
import { getAllProductsApiCall } from "@/api/Product";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType } from "@/types";
import { ProductType } from "@/types/api/Product";

export default function Home() {
  const { data: popularProduct } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "popular_product"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { is_popular: { $eq: true } },
      }),
  });

  const { data: PopularFruitProductsData } = useQuery<
    ApiResponseType<ProductType>
  >({
    queryKey: [getAllProductsApiCall.name, "popular_Fruit"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { is_popular_fruit: { $eq: true } },
      }),
  });

  const { data: BestSellerProductsData } = useQuery<
    ApiResponseType<ProductType>
  >({
    queryKey: [getAllProductsApiCall.name, "Best_seller"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { is_best_seller: { $eq: true } },
      }),
  });

  const { data: dealsOfDayData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "deal_of_day"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { discount_expire_date: { $notNull: true } },
      }),
  });

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
        {popularProduct && (
          <SimpleProductSlider
            nextEl={".swiper-nav-right"}
            prevEl={".swiper-nav-left"}
            sliderData={popularProduct.data}
          />
        )}
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

        {PopularFruitProductsData && (
          <SimpleProductSlider
            nextEl={".swiper-nav-right2"}
            prevEl={".swiper-nav-left2"}
            sliderData={PopularFruitProductsData?.data}
          />
        )}
      </section>

      <section>
        <div className="container mt-[50px]">
          <div className="flex justify-between mb-[50px]">
            <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">
              Best Sellers
            </h2>
          </div>
          <div className="flex gap-[24px]">
            <div className="bg-[url('/assets/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-12 pt-[38px] self-stretch flex-col justify-between max-w-[370px] hidden xl:flex">
              <h3 className="text-heading2 text-blue-300">
                Bring nature into your home
              </h3>
              <Link
                href="#"
                className="mt-6 pl-[15px] pr-2.5 py-2 bg-yellow-100 hover:bg-green-200 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5"
              >
                <div className="text-xsmall text-white">Shop now</div>
                <i className="icon-arrow-small-right text-[24px]" />
              </Link>
            </div>
            {BestSellerProductsData && (
              <div className="w-[100%] h-full">
                <BestSellerSlider sliderData={BestSellerProductsData?.data} />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="container mt-[50px]">
        <div className="container flex justify-between items-center mt-5 mb-5">
          <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">
            Deals Of The Days
          </h2>
          <Link className="flex items-center" href="#">
            All Deals{" "}
            <IconBox icon="icon-angle-small-right text-[24px]" size={24} />
          </Link>
        </div>
        {dealsOfDayData && (
          <DealsOFTheDaySlider sliderData={dealsOfDayData.data} />
        )}
      </section>

      <section className="container mt-[50px]">
        <BottomSlider />
      </section>
    </>
  );
}
