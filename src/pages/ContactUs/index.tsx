import { MainTitlesType1, MainTitlesType2 } from "@/mock/titleCards";
// components
import {
  TitleCard,
  Section,
  ServicesCard,
  ImagView,
  Input,
  TextArea,
} from "@/components";
import dynamic from "next/dynamic";

import { ServiceCardMock, compareShopMock } from "../../mock/ServiceCard";
import { useForm } from "react-hook-form";

export default function ContactUS() {
  const MapClient = dynamic(() => import("@/components/common/map/MapClient"), {
    ssr: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("data");
  };

  return (
    <>
      <Section classname="min-h-[356px] lg:p-20  flex flex-col md:justify-center md:items-center md:flex-row gap-0 md:gap-10">
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

      <Section classname="h-[483px] border-2 mb-0  p-0">
        <MapClient />
      </Section>

      <Section classname="min-h-[213px] lg:p-20  flex flex-col md:flex-row gap-10">
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

      <Section classname="min-h-[697px]  lg:p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-[66.33%] flex flex-col ">
          <div className="h-1/3">
            <TitleCard
              data={MainTitlesType2}
              className="w-full   flex flex-col"
            />
          </div>
          <div className="h-2/3 gap-1 flex flex-col ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="min-h-[135px] flex flex-col p-2 md:flex-row gap-5">
                <div className="flex flex-col w-full  md:w-1/2 gap-5">
                  <Input
                    type="text"
                    register={register("your-name", {
                      required: "Please write your name",
                    })}
                    {...{ placeholder: "Your Name *" }}
                    errors={errors}
                  />
                  <Input
                    type="tel"
                    register={register("Email", {
                      required: "Please write your phone number",
                    })}
                    {...{ placeholder: "phone Number *" }}
                    errors={errors}
                  />
                </div>
                <div className=" flex flex-col w-full  md:w-1/2 gap-5">
                  <Input
                    type="email"
                    register={register("email", {
                      required: "Please write your Email ",
                    })}
                    {...{ placeholder: "Email *" }}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    register={register("subject", {
                      required: "you should fill this input",
                    })}
                    {...{ placeholder: "subject *" }}
                    errors={errors}
                  />
                </div>
              </div>

              <div>
                <TextArea
                  placeholder="Your message *"
                  register={register("message", {
                    required: "Please write your message",
                  })}
                  errors={errors}
                />
              </div>
              <div className="p-3 w-[191px] h-[61px] flex justify-center items-center">
                <button
                  className="bg-[#253D4E] flex justify-center items-center p-6 text-[#fff] rounded-md text-[14px] w-full h-full"
                  type="submit"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" hidden md:flex md:w-[33.33%] justify-center items-center">
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
