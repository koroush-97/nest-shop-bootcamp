import { ImagView } from "@/components";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"}>
      <ImagView
        className={"w-[117px] lg:w-[242px]"}
        src={"/assets/images/Logo.png"}
        width={242}
        height={66}
        alt={"logo"}
      />
    </Link>
  );
}
