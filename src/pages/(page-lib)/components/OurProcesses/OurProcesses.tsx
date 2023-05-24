import { type FC } from "react";
//import { scrollIntoViewWithOffset } from "@/utils/dom";
import Image from "next/image";

const OurProcesses: FC = () => (
  <section id="production" className="mt-10 bg-slate-200 py-24">
    <div className="m-10 justify-around md:flex lg:px-8 ">
      <div>
        <Image
          className="rounded-xl"
          src={"/images/proceso-almidon.jpg"}
          alt={"Loading..."}
          width={500}
          height={200}
        />
      </div>

      <div className="m-10">
        <h1 className="max-w-3xl font-sans text-6xl font-semibold leading-snug">
          De la yuca al almidón: Descubre nuestro proceso de producción
        </h1>

        <p className="mt-10 max-w-3xl text-left font-sans text-xl leading-10 text-gray-600">
          La calidad del producto es un aspecto fundamental para cualquier empresa que desee tener
          éxito en el mercado. En Almidones El Mana, se han diseñado procesos de producción
          rigurosos para garantizar que el producto final cumpla con los estándares más altos de
          calidad y pureza. Desde la selección de la materia prima, en este caso, la yuca, hasta el
          envasado y distribución del producto final, cada etapa del proceso está cuidadosamente
          controlada y monitoreada por expertos en la materia.
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

export default OurProcesses;
