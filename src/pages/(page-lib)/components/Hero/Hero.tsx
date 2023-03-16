import { type FC } from "react";
import Image from "next/image";

const Hero: FC = () => (
  <section id="home" className="relative">
    <div className="absolute inset-0 z-0">
      <Image src="/images/sembrado-de-yuca.png" fill priority alt="Hero" className="object-cover" />
    </div>

    <div className="relative z-10 flex h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white">Hero</h1>
    </div>
  </section>
);
export default Hero;
