// react elements
import Link from "next/link";

// mock
import { browserCategoryMock } from "@/mock/BrowserCategory";

// components
import { IconBox } from "@/components/common";

export function Menu() {
  return (
    <>
      <div
        id="all_categories"
        className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center"
      >
        <IconBox
          icon={"icon-apps"}
          size={24}
          title={"Browse All Categories"}
          link={"#"}
          titleClassName={"text-medium ml-1"}
          linkClassName={"flex item-center "}
        />

        <IconBox icon={"icon-angle-small-down"} size={24} />

        <div
          id="all_categories_box"
          className=" absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default"
        >
          <div
            id="all_cat_inner_box"
            className="flex flex-wrap justify-between gap-y-[15px]"
          >
            {browserCategoryMock.map((item, index) => {
              return (
                <IconBox
                  key={index}
                  linkClassName={
                    "flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  }
                  link={item.link}
                  icon={item.icon}
                  size={30}
                  title={item.title}
                  titleClassName={"text-heading-sm text-blue-300"}
                  path={item.iconPath}
                />
              );
            })}

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
    </>
  );
}
