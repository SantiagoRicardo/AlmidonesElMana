import { type FC } from "react";
import Image from "next/image";
import { scrollIntoViewWithOffset } from "@/utils/dom";

const Hero: FC = () => (
  <section id="home" className="relative">
    <div id="hero-image" className="relative justify-center bg-[url('.../Sembrado-de-yuca.png')] ">
      
      <div className="absolute">
        <h1>
          almidones el mana
        </h1>
      </div>
    </div>
  </section>
);
export default Hero;
