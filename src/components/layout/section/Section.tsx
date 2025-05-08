import React from "react";

// packages
import { twMerge } from "tailwind-merge";

interface Props {
  classname?: string;
  children: React.ReactNode;
}

export function Section({ classname = "", children }: Props) {
  return (
    <section className={twMerge("container mb-[68px] ", classname)}>
      {children}
    </section>
  );
}
