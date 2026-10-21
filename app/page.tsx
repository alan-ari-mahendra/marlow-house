import Amenities from "@/components/sections/Amenities";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Design from "@/components/sections/Design";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Location from "@/components/sections/Location";
import Nav from "@/components/sections/Nav";
import Register from "@/components/sections/Register";
import Residences from "@/components/sections/Residences";
import Team from "@/components/sections/Team";
import { buildFaqSchema, buildResidenceSchema, toJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(buildResidenceSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(buildFaqSchema()) }} />
      <AnnouncementBar />
      <Nav />
      <main id="top">
        <Hero />
        <Intro />
        <Residences />
        <Amenities />
        <Location />
        <Design />
        <Team />
        <Faq />
        <Register />
      </main>
      <Footer />
    </>
  );
}
