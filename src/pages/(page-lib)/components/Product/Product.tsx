import { type FC } from "react";
//import { scrollIntoViewWithOffset } from "@/utils/dom";
import Image from "next/image";

const Nosotros: FC = () => (
  <section id="us">
    <div className="mx-10 mt-20 justify-around md:flex">
      <div>
        <Image
          className="rounded-xl"
          src={"/images/Almidon.jpg"}
          alt={"Loading..."}
          width={500}
          height={200}
        />
      </div>

      <div className="m-10">
        <h1 className="max-w-xl font-sans text-6xl font-semibold leading-snug">
          Ofrecemos un producto orgánico de alta calidad
        </h1>

        <p className="mt-10 max-w-2xl text-left font-sans text-xl leading-10 text-gray-600">
          Por eso, te presentamos nuestro almidón agrio de yuca de la más alta calidad,
          cuidadosamente seleccionado y elaborado para garantizar la mejor textura, sabor y
          estabilidad. Nuestro almidón agrio de yuca es naturalmente ácido y actúa como conservante
          natural. Además, es una alternativa sin gluten y sostenible, ya que la yuca es una planta
          resistente y de bajo mantenimiento. ¡Compra ahora en Almidones El Mana y experimenta la
          diferencia!
        </p>

        <button
          className="
            mt-7 items-center rounded-md bg-blue-600 px-10 py-4
            text-sm
            font-medium text-white 
          hover:bg-blue-500 
            focus:outline-none 
            focus:ring-2 
          focus:ring-blue-500 
            focus:ring-offset-2 
            md:inline"
        >
          Ver más
        </button>
      </div>
    </div>
  </section>
);

export default Nosotros;
