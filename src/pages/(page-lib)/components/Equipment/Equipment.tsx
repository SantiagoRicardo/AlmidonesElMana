import { type FC } from "react";
import Image from "next/image";

const Equipment: FC = () => (
  <section id="equipments" className="relative">
    <div className="justify-center md:flex lg:mx-20">
      <div className="mt-10">
        <div className="text-center">
          <h2 className="text-center font-sans text-lg font-semibold leading-8 text-[#02044a]">
            Nuestro Equipo
          </h2>
          <p className="mt-2 font-sans text-6xl font-semibold tracking-tight text-gray-900">
            ¡Conozca a nuestro equipo de trabajo!
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            ¡Para ser la empresa que nuestros clientes quieren que seamos, se necesita un grupo de
            operadores apasionados. Conozca a las personas que lideran el camino en Almidones el
            Mana!
          </p>

          <div className="m-5 justify-center">
            <div className="">
              <Image
                className="rounded-2xl"
                src="/images/Team.jpg"
                alt="Loading..."
                width={1020}
                height={576}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Equipment;
