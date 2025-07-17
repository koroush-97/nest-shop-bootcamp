interface apimock {
  headerTitle?: string;
  paraghraph?: string;
  header?: string;
  area?: string;
  city?: string;
  phone?: string;
  email?: string;
}

interface Props {
  className?: string;
  paragheraphClassName?: string;
  data: apimock;
  studio?: boolean;
  cardmock?: boolean;
}
import Link from "next/link";

import { twMerge } from "tailwind-merge";

export function ServicesCard({
  className = "",
  paragheraphClassName = "",
  data,
  studio,
  cardmock,
}: Props) {
  if (studio) {
    return (
      <div
        className={twMerge(
          "w-full p-1 h-full gap-4 cursor-pointer ",
          className
        )}
      >
        <h4 className="text-[20px] font-bold ">{data.header}</h4>
        <div className="text-[#7E7E7E]">
          <p className={paragheraphClassName}>{data.area}</p>
          <p className={paragheraphClassName}>{data.city}</p>
          <p className={paragheraphClassName}>{data.phone}</p>
          <p className={paragheraphClassName}>{data.email}</p>
        </div>

        <Link
          href="tel:19008888"
          className="text-[#fff] bg-[#3BB77E] mt-3 p-2 rounded-sm w-1/2 md:w-[66.33%] lg:w-1/3"
        >
          Add button
        </Link>
      </div>
    );
  }
  if (cardmock)
    return (
      <div className={twMerge("w-full p-1 group cursor-pointer", className)}>
        <h4 className="text-[20px] font-bold mb-5 group-hover:text-[#3BB77E]">
          {data.headerTitle}
        </h4>
        <p className={paragheraphClassName}>{data.paraghraph}</p>
      </div>
    );
}
