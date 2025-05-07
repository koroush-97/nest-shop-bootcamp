// react elements

import Link from "next/link";

// components

import { Logo, Menu } from "@/components";
import { SearchForm } from "@/components";
import { IconBox } from "@/components";

export function Header() {
  return (
    <header className="mb-[33px]">
      <div>
        <div className="container flex items-center justify-between py-4 md:py-6 xl:py-8">
          <Logo />
          <SearchForm />
          <ul className="hidden lg:flex gap-5">
            <li className="flex gap-2 cursor-pointer">
              <IconBox
                linkClassName={"flex item-center"}
                icon={"icon-user"}
                size={24}
                title={"Account"}
                link={"#"}
                hideTitleOnMobile={true}
                titleClassName={"text-medium text-gray-500 font-lato  ml-2"}
              />
            </li>
            <li className="flex gap-2 cursor-pointer">
              <IconBox
                linkClassName={"flex item-center"}
                icon={"icon-shopping-cart"}
                size={24}
                title={"Card"}
                link={"#"}
                hideTitleOnMobile={true}
                badge={2}
                titleClassName={"text-medium text-gray-500 font-lato  ml-2"}
              />
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
            {/* { menu component } */}
            <Menu />

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
