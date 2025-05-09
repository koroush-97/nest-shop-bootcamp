// components
import { Section, Banner } from "@/components";
import { FeaturedCategories } from "@/components";
import { MiniProductSlider } from "@/components";

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

      <section className="container">
        <div className="hidden sm:flex mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
        </div>
        <FeaturedCategories />
      </section>

      <section className="container mt-[50px]">
        <MiniProductSlider />
      </section>
    </>
  );
}
