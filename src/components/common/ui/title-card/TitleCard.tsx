import { twMerge } from "tailwind-merge";

interface TitleCardData {
  Greenheader: string;
  MainHeader: string;
  paragraphes: string[];
}

interface Props {
  data: TitleCardData;
  pragraphesClassName?: string;
  className?: string;
}

export function TitleCard({
  data,
  pragraphesClassName = "",
  className = "",
}: Props) {
  return (
    <div className={twMerge("w-[33.33%] flex flex-col gap-3 p-1", className)}>
      <h1 className="text-[#3BB77E] text-[24px] font-bold">
        {data.Greenheader}
      </h1>
      <h1 className="text-[#253D4E] text-[48px] font-bold leading-none mt-2">
        {data.MainHeader}
      </h1>
      {data.paragraphes?.map((item, index) => (
        <p
          key={index}
          className={`${pragraphesClassName} mt-1  text-base text-justify`}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
