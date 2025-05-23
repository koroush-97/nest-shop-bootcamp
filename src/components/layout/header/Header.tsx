// react elements
import { useQueryClient } from "@tanstack/react-query";
import RegisterModal from "@/components/common/auth/RegisterModal";
import Link from "next/link";

// components

import { Logo, Menu } from "@/components";
import { SearchForm } from "@/components";
import { IconBox } from "@/components";
import { useContext, useState } from "react";
import { useOverlay } from "@/hooks/use-overlay";
import LoginModal from "@/components/common/auth/LoginModal";
import { useModal } from "@/store/ModalContext";
import { useUser } from "@/store/AuthContext";
import { toast } from "react-toastify";

import { useBasket } from "@/hooks/use-basket";

export function Header() {
  const { basketItems } = useBasket();

  console.log("basketItems ", basketItems);

  const { isLogin, logout } = useUser();

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const { currentModal, openModal, closeModal } = useModal();

  const queryClient = useQueryClient();

  // const basket = useContext(BasketContext);

  useOverlay({
    onclick() {
      setShowMobileMenu(false);
    },
    isOverFlowHidden: showMobileMenu,
  });

  const menubtnclickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMobileMenu((prevState) => !prevState);
  };

  const menuBodyClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const accountHandler = () => {
    if (isLogin) {
      logout();
      queryClient.invalidateQueries({ queryKey: ["get-basket"] });
      toast.success("شما با موفقیت از اکانت خود خارج شدید");
    } else {
      openModal("login");
    }
  };

  return (
    <header className="mb-[33px]">
      {currentModal === "login" && <LoginModal onClose={closeModal} />}
      {currentModal === "register" && <RegisterModal onClose={closeModal} />}
      <div>
        <div className="container flex items-center justify-between py-4 md:py-6 xl:py-8">
          <Logo />
          <div className="border-2 border-green-150 rounded-[5px] max-w-[700px] w-full mx-[15px] px-[15px] hidden lg:inline-block">
            <SearchForm inputClassName={"py-[15px]"} />
          </div>
          <ul className="hidden lg:flex gap-5">
            <li onClick={accountHandler} className="flex gap-2 cursor-pointer">
              <IconBox
                linkClassName={"flex item-center"}
                icon={"icon-user"}
                size={24}
                title={`${isLogin ? "logout" : "login/register"}`}
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
                badge={basketItems.length}
                titleClassName={"text-medium text-gray-500 font-lato  ml-2"}
              />
            </li>
          </ul>
          <button
            onClick={menubtnclickHandler}
            id="menu_btn"
            className="flex flex-col justify-between py-[4px] lg:hidden w-[24px] h-[24px]"
          >
            <span className="w-full h-[1.5px] bg-black inline-block rounded" />
            <span className="w-full h-[1.5px] bg-black inline-block rounded" />
            <span className="w-full h-[1.5px] bg-black inline-block rounded" />
          </button>
        </div>
        <div className="border-gray-200 border-y h">
          <div
            onClick={menuBodyClickHandler}
            className={`container transition-all w-4/5 rounded-[24px] lg:rounded-[0px] lg:w-auto flex  top-0 bottom-0 lg:static flex-col lg:flex-row justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center 
              ${
                showMobileMenu
                  ? "left-0 fixed overflow-y-scroll"
                  : "-left-[100%] absolute"
              } h-[100vh] bg-white lg:h-[70px] mobile-menu z-50`}
          >
            <Menu />

            <div className="hidden lg:flex items-center shrink-0 gap-3">
              <IconBox
                icon={
                  "icon-headset xl:text-[32px] 2xl:text-[36px] aspect-square"
                }
                size={30}
                link={"#"}
              />

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
          <div className="container flex justify-between lg:hidden pt-[20px] pb-[16px] items-center">
            <div className="border-[1px] border-green-150 rounded-[5px] w-full max-w-[220px] p-[6px]">
              <SearchForm />
            </div>
            <ul className="flex gap-5">
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
          </div>
        </div>
      </div>
    </header>
  );
}
