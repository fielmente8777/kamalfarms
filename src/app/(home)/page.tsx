import { Banner, CompanyFacts } from "./components";
import { BgImage } from "@/icons/icons";

export default function Home() {
  return (
    <main>
      <Banner />
      <CompanyFacts />
      <section className="max-w-[1920px] overflow-hidden mx-auto w-full pt-10 -mb-1">
        <BgImage />
      </section>
    </main>
  );
}
