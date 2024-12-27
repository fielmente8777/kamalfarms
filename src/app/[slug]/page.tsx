import {
  Banner,
  BookNowCard,
  SlideComponentImage,
  TestimonialMain,
} from "@/components";
import AmenitiesMain from "@/components/Amenities/AmenitiesMain";
import SleepingMain from "@/components/SleepingArrangement.tsx/SleepingMain";
import TwoColGridCard from "@/components/TwoColGridCard";
import { SlugData } from "@/data/SlugData";
interface Params {
  params: Promise<{ slug: string }>;
}
export async function generateStaticParams() {
  const data = SlugData;

  return data.map((data) => ({
    slug: data.slug,
    fallback: false,
  }));
}

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const paramsData = await params.slug;
  const data = SlugData.find((item) => item.slug === paramsData);

  if (!data) {
    return { title: "Page not found" };
  }

  return {
    title: data.bannerData.title,
    description: data.bannerData.desc[0],
    openGraph: {
      title: data.bannerData.title,
      description: data.bannerData.desc[0],
      url: `https://www.kamalfarmskarjat.com/${data.slug}`,
      siteName: "Kamal Farms Karjat",
      locale: "en-IN",
      type: "website",
      images: [
        {
          url: `https://www.kamalfarmskarjat.com/${data.slug}/og-image.png`,
          width: 800,
          height: 600,
          alt: `www.kamalfarmskarjat.com/${data.slug}`,
        },
        {
          url: `https://www.kamalfarmskarjat.com/${data.slug}/og-image.png`,
          width: 900,
          height: 800,
          alt: `www.kamalfarmskarjat.com/${data.slug}`,
        },
        {
          url: `https://www.kamalfarmskarjat.com/${data.slug}/og-image.png`,
          width: 1000,
          height: 800,
          alt: `www.kamalfarmskarjat.com/${data.slug}`,
        },
      ],
    },
    alternate: {
      languages: {
        en: "/en/[slug]",
      },
      canonical: `https://www.kamalfarmskarjat.com/${data.slug}`,
    },
  };
}

const page = async (props: Params) => {
  const params = await props.params;
  const paramsData = await params.slug;
  const data = SlugData.find((item) => item.slug === paramsData);

  if (!data) {
    return <div>Page not found</div>;
  }

  return (
    <main>
      <Banner {...data.bannerData} />
      <TwoColGridCard {...data.experience} index={1} />
      <SleepingMain {...data.sleepingArrangement} />
      <AmenitiesMain {...data.amenities} />
      <SlideComponentImage {...data.gallery} />
      <TestimonialMain testimonialData={data.testimonial} />

      <BookNowCard {...data.bookNow} />
    </main>
  );
};

export default page;
