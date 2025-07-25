import Link from "next/link";

interface Props {
  icon: string;
  size?: number;
  link?: string;
  title?: string;
  hideTitleOnMobile?: boolean;
  badge?: number;
  titleClassName?: string;
  path?: number;
  linkClassName?: string;
  onClick?: () => void;
}

export function IconBox({
  icon,
  size = 22,
  link,
  title,
  hideTitleOnMobile = false,
  badge = 0,
  titleClassName = "",
  path = 0,
  linkClassName = "",
  onClick,
}: Props) {
  let span = [];

  for (let i = 1; i <= path; i++) {
    span.push(<span className={`path${i}`}></span>);
  }
  if (link) {
    return (
      <Link
        className={` flex items-center cursor-pointer ml-1 ${linkClassName} `}
        href={link ?? "#"}
      >
        {badge ? (
          <div className="relative">
            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">
              {badge}
            </span>

            <i style={{ fontSize: `${size}px` }} className={` ${icon}  `}>
              {span}
            </i>
          </div>
        ) : (
          <i style={{ fontSize: `${size}px` }} className={` ${icon} `}>
            {span}
          </i>
        )}

        {title && (
          <div
            className={` ml-1 ${
              hideTitleOnMobile ? "hidden xl:inline-block" : "inline-block"
            } ${titleClassName}  `}
          >
            {title}
          </div>
        )}
      </Link>
    );
  } else {
    return (
      <>
        {badge ? (
          <div onClick={onClick} className="relative">
            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">
              {badge}
            </span>

            <i onClick={onClick} className={` ${icon} text-[${size}px] `}>
              {span}
            </i>
          </div>
        ) : (
          <i onClick={onClick} className={` ${icon} text-[${size}px] `}>
            {span}
          </i>
        )}

        {title && (
          <div
            onClick={onClick}
            className={` ml-1 ${
              hideTitleOnMobile ? "hidden xl:inline-block" : "inline-block"
            } ${titleClassName}  `}
          >
            {title}
          </div>
        )}
      </>
    );
  }
}
