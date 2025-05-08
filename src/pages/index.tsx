// components
import { Section, Banner } from "@/components";

export default function Home() {
  return (
    <>
      <Section>
        <Banner
          title={"Dont miss amazing grocey deals"}
          subtitle={"sign up for the daily newsletter"}
          bgImage={"/assets/images/fresh-apples.png"}
          image={"/assets/images/banner_bg.png"}
        />
      </Section>
    </>
  );
}
