import { Banner2, BookNowCard, BreathtakingBanner } from "@/components";
import { sustainabilityPageData } from "@/data/pagedate";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sustainability | Kamal Farms Karjat",
  description:
    "Kamal Farms through its two properties 5 bedroom riverview villa and 3 bedroom riverside cottage offers a perfect destination to let go and allow nature to unravel its magic for a calming experience",
  alternates: {
    canonical: "https://www.kamalfarms.com",
    languages: {
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Sustainability | Kamal Farms Karjat",
    description:
      "Kamal Farms through its two properties 5 bedroom riverview villa and 3 bedroom riverside cottage offers a perfect destination to let go and allow nature to unravel its magic for a calming experience",
    url: "https://www.kamalfarms.com",
    siteName: "Kamal Farms Karjat",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://www.kamalfarms.com/og-image.png",
        width: 800,
        height: 600,
        alt: "Sustainability | Kamal Farms Karjat",
      },
      {
        url: "https://www.kamalfarms.com/og-image.png",
        width: 900,
        height: 800,
        alt: "Sustainability | Kamal Farms Karjat",
      },
      {
        url: "https://www.kamalfarms.com/og-image.png",
        width: 1080,
        height: 1080,
        alt: "Sustainability | Kamal Farms Karjat",
      },
    ],
  },
};
const page = () => {
  return (
    <main>
      <Banner2 {...sustainabilityPageData.bannerData} />
      {sustainabilityPageData.breathtakingBannerData.map((item, index) => (
        <BreathtakingBanner {...item} key={index} index={index+1} contentClassName="bg-white lg:!p-12" textStart />
      ))}
      <BookNowCard {...sustainabilityPageData.bookNow} />
    </main>
  );
};

export default page;
