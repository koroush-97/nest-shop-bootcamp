// react elements

import Link from "next/link";

// components

import { Logo } from "@/components";
import { SearchForm } from "@/components";

export function Header() {
  return (
    <header className="mb-[33px]">
      <div>
        <div className="container flex items-center justify-between py-4 md:py-6 xl:py-8">
          <Logo />
          <SearchForm />
          <ul className="hidden lg:flex gap-5">
            <li className="flex gap-2 cursor-pointer">
              <Link href="#">
                <i className="icon-user text-[24px]" />
              </Link>
              <div className="hidden xl:inline-block text-medium text-gray-500 font-lato">
                Account
              </div>
            </li>
            <li className="flex gap-2 cursor-pointer">
              <div className="relative">
                <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">
                  4
                </span>
                <Link href="#">
                  <i className="icon-shopping-cart text-[24px]" />
                </Link>
              </div>
              <div className="hidden xl:inline-block text-medium text-gray-500 font-lato">
                Card
              </div>
            </li>
          </ul>
          <button
            id="menu_btn"
            className="flex flex-col justify-between py-[4px] lg:hidden w-[24px] h-[24px]"
          >
            <span className="w-full h-[1.5px] bg-black inline-block rounded" />
            <span className="w-full h-[1.5px] bg-black inline-block rounded" />
            <span className="w-full h-[1.5px] bg-black inline-block rounded" />
          </button>
        </div>
        <div className="border-gray-200 border-y h">
          <div className="container transition-all w-4/5 rounded-[24px] lg:rounded-[0px] lg:w-auto flex absolute top-0 bottom-0 -left-[100%] lg:static flex-col lg:flex-row justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center h-[100vh] bg-white lg:h-[70px] mobile-menu z-50">
            <div
              id="all_categories"
              className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center"
            >
              <Link href="#">
                <i className="icon-apps text-[24px]" />
              </Link>
              <div className="text-medium">Browse All Categories</div>
              <i className="icon-angle-small-down text-[24px]" />
              <div
                id="all_categories_box"
                className="hidden absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default"
              >
                <div
                  id="all_cat_inner_box"
                  className="flex flex-wrap justify-between gap-y-[15px]"
                >
                  <Link
                    href="#"
                    className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  >
                    <i className="icon-groceries-1 text-[30px]">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                      <span className="path7" />
                    </i>
                    <div className="text-heading-sm text-blue-300">
                      Milks and Dairies
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  >
                    <i className="icon-drinks-1 text-[30px]">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                    <div className="text-heading-sm text-blue-300">
                      Wines &amp; Drinks
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  >
                    <i className="icon-dress-1 text-[30px]">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                    </i>
                    <div className="text-heading-sm text-blue-300">
                      Clothing &amp; beauty
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  >
                    <i className="icon-crab-1 text-[30px]">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                      <span className="path7" />
                      <span className="path8" />
                      <span className="path9" />
                    </i>
                    <div className="text-heading-sm text-blue-300">
                      Fresh Seafood
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  >
                    <i className="icon-pet-food-1 text-[30px]">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                      <span className="path7" />
                      <span className="path8" />
                    </i>
                    <div className="text-heading-sm text-blue-300">
                      Pet Foods &amp; Toy
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  >
                    <i className="icon-sweet-1 text-[30px]">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                      <span className="path7" />
                    </i>
                    <div className="text-heading-sm text-blue-300">
                      Fast food
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  >
                    <i className="icon-dairy-products-1 text-[30px]">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                    <div className="text-heading-sm text-blue-300">
                      Baking material
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  >
                    <i className="icon-grocery-1 text-[30px]">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                      <span className="path7" />
                    </i>
                    <div className="text-heading-sm text-blue-300">
                      Vegetables
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  >
                    <i className="icon-fruit-1 text-[30px]">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>
                    <div className="text-heading-sm text-blue-300">
                      Fresh Fruit
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  >
                    <span className="icon-milk-products-1 text-[30px]">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </span>
                    <div className="text-heading-sm text-blue-300">
                      Bread and Juice
                    </div>
                  </Link>
                  <div
                    id="more_categories"
                    className="cursor-pointer flex gap-4 items-center justify-center w-full mt-[17px]"
                  >
                    <i className="icon-add text-[24px]" />
                    <div className="text-heading-sm text-blue-300">
                      More Categories
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav id="main_menu">
              <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
                <li>
                  <Link href="#" className="flex flex-row gap-2 items-center">
                    <i className="icon-flame text-[24px]" />
                    <div className="text-heading6 lg:text-heading-sm xl:text-heading6">
                      Hot Deals
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex flex-row">
                    Food
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex flex-row">
                    Vegetables
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="hidden lg:flex items-center shrink-0 gap-3">
              <Link href="#">
                <i className="icon-headset text-[30px] xl:text-[32px] 2xl:text-[36px] aspect-square" />
              </Link>
              <div>
                <Link
                  href="tel:19008888"
                  className="text-green-200 lg:text-heading6 xl:text-heading5 2xl:text-heading4"
                >
                  1900-8888
                </Link>
                <div className="font-lato text-xsmall">
                  <span className="hidden xl:inline-block">24/7 </span>Support
                  Center
                </div>
              </div>
            </div>
          </div>
          <div className="container flex justify-between lg:hidden pt-[20px] pb-[16px] items-end">
            <div className="border-[1px] border-green-150 rounded-[5px] w-full max-w-[220px] p-[6px]">
              <form
                name="search-form"
                action="#"
                method="post"
                className="flex items-center"
              >
                <input
                  type="text"
                  name="search_text"
                  placeholder="Search for items"
                  className="text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none"
                />
                <button type="submit">
                  <i className="icon-search text-[16px]" />
                </button>
              </form>
            </div>
            <ul className="flex gap-5">
              <li className="flex gap-2 cursor-pointer">
                <Link href="#">
                  <i className="icon-user text-[24px]" />
                </Link>
                <div className="hidden xl:inline-block text-medium text-gray-500 font-lato">
                  Account
                </div>
              </li>
              <li className="flex gap-2 cursor-pointer">
                <div className="relative">
                  <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">
                    4
                  </span>
                  <Link href="#">
                    <i className="icon-shopping-cart text-[24px]" />
                  </Link>
                </div>
                <div className="hidden xl:inline-block text-medium text-gray-500 font-lato">
                  Card
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
