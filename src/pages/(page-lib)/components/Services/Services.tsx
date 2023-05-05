import { type FC } from "react";
import Image from "next/image";

const Services: FC = () => (
  <section id="services" className="mt-32 bg-slate-200 py-24 sm:py-32 lg:py-20">
    <div className="mx-10 md:flex md:justify-around lg:px-8 ">
      <div className="m-10 text-left">
        <p className="mt-10 font-sans text-6xl font-semibold leading-snug tracking-tight text-gray-900">
          ¡Conoce la historia detrás de Almidones El Mana!
        </p>
        <p className="mt-5 max-w-2xl text-left font-sans text-xl leading-10 text-gray-600">
          En Almidones El Mana, nos enorgullece ofrecer los mejores productos de almidón agrio de
          yuca de calidad premium. Pero nuestra historia va más allá de la elaboración de un
          producto excepcional. Desde nuestro humilde comienzo en el campo hasta convertirnos en
          líderes de la industria, hemos sido guiados por nuestra pasión por la calidad y la
          sostenibilidad. Queremos compartir nuestra historia contigo para que puedas conocer más
          acerca de nuestra empresa y lo que nos motiva a hacer lo que hacemos.
        </p>

        <button
          className="
            mt-5
            rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:bg-blue-500 
            hover:text-white 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:ring-offset-2
            md:inline"
        >
          Ver más
        </button>
      </div>

      <div className="gap-6 text-center md:flex">
        <div className="m-2 justify-center">
          <Image
            className="rounded-xl"
            src="/images/SecadoAlmidon.jpg"
            width={720}
            height={620}
            alt={"Loading..."}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Services;
