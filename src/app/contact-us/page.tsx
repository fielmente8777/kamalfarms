import { contactBannerData } from "@/data/contact";
// import ContactBanner from "./components/ContactBanner";
import { Metadata } from "next";
import ContactDetails from "./components/ContactDetails";
import { Banner } from "@/components";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Kamal Farms Karjat",
  description:
    "Kamal Farms through its two properties 5 bedroom riverview villa and 3 bedroom riverside cottage offers a perfect destination to let go and allow nature to unravel its magic for a calming experience",
  alternates: {
    canonical: "https://www.kamalfarms.com",
    languages: {
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Contact | Kamal Farms Karjat",
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
        alt: "Contact | Kamal Farms Karjat",
      },
      {
        url: "https://www.kamalfarms.com/og-image.png",
        width: 900,
        height: 800,
        alt: "Contact | Kamal Farms Karjat",
      },
      {
        url: "https://www.kamalfarms.com/og-image.png",
        width: 1080,
        height: 1080,
        alt: "Contact | Kamal Farms Karjat",
      },
    ],
  },
};
const page = () => {
  return (
    <main>
      {/* <ContactBanner {...contactBannerData} /> */}
      <Banner {...contactBannerData.data} />
      <ContactForm />
      <ContactDetails addresses={contactBannerData.addresses} />
    </main>
  );
};

export default page;
