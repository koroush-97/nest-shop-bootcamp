import { MainTitlesType1, MainTitlesType2 } from "@/mock/titleCards";
// components
import { TitleCard, Section, ServicesCard, ImagView } from "@/components";
import { ServiceCardMock, compareShopMock } from "../../mock/ServiceCard";

export default function ContactUS() {
  return (
    <>
      <Section classname="min-h-[356px] p-2  flex flex-col md:justify-center md:items-center md:flex-row gap-0 md:gap-10">
        <TitleCard
          data={MainTitlesType1}
          className="w-full md:w-[33.33%]  flex flex-col"
        />
        <Section classname="w-full md:w-[33.33%]  flex flex-col gap-5 p-3 justify-between items-center h-full mb-0">
          <ServicesCard data={ServiceCardMock[0]} cardmock />
          <ServicesCard data={ServiceCardMock[2]} cardmock />
        </Section>
        <Section classname="w-full md:w-[33.33%]  flex flex-col p-3 gap-5 justify-between items-center h-full mb-0">
          <ServicesCard data={ServiceCardMock[1]} cardmock />
          <ServicesCard data={ServiceCardMock[3]} cardmock />
        </Section>
      </Section>

      <Section classname="h-[483px] border-2">test</Section>

      <Section classname="min-h-[213px]  border-red-500 flex flex-col md:flex-row gap-10">
        <ServicesCard
          data={compareShopMock[0]}
          className="md:w-[33.33%]  flex flex-col h-auto p-2"
          studio
        />
        <ServicesCard
          data={compareShopMock[1]}
          className="md:w-[33.33%]  flex flex-col h-auto p-2"
          studio
        />
        <ServicesCard
          data={compareShopMock[2]}
          className="md:w-[33.33%]  flex flex-col h-auto p-2"
          studio
        />
      </Section>

      <Section classname="min-h-[697px] border-2 p-2 flex flex-col md:flex-row">
        <div
          className="w-full md:w-[66.33%] flex flex-col "
          style={{ border: "2px solid red" }}
        >
          <div className="h-1/3" style={{ border: "2px solid blue" }}>
            <TitleCard
              data={MainTitlesType2}
              className="w-full   flex flex-col"
            />
          </div>
          <div className="h-2/3" style={{ border: "2px solid black" }}>
            2
          </div>
        </div>
        <div
          className=" hidden md:flex md:w-[33.33%] justify-center items-center"
          style={{ border: "2px solid red" }}
        >
          <ImagView
            src="/assets/images/contactus/girlwithphone.jpg"
            width={378}
            height={412}
            alt="girl with phone"
            className="h-[412px] w-[378px] object-cover"
          />
        </div>
      </Section>
    </>
  );
}
