import React from "react";
import { TitleCard, Section } from "@/components";
import { MainTitlesType1, MainTitlesType2 } from "@/mock/titleCards";

export default function ContactUS() {
  return (
    <>
      <Section classname="h-[356px] p-2 border-2 border-red flex flex-col md:flex-row gap-10">
        <TitleCard data={MainTitlesType1} />
      </Section>
    </>
  );
}
