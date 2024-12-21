// import { Banner } from "./components";

import { SlideComponentImage } from "@/components";
import { slider1 } from "@/data/homepage";

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      banner
      <SlideComponentImage {...slider1} />
    </main>
  );
}
