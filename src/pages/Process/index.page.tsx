import { type FC } from "react";
import Image from "next/image";
import ProcessUs from "./lib/page";
import { NavbarRecipes } from "../(page-lib)/layouts";

const Process: FC = () => {
  return (
    <>
      <NavbarRecipes />
      <div className="m-10 mx-auto w-full max-w-7xl justify-center rounded-3xl bg-slate-50 p-10">
        <h1 className="text-center text-4xl font-bold">Proceso de producción</h1>
        <div className="mt-8 flex flex-col">
          {ProcessUs.map((paso, index) => (
            <div key={index} className="flex flex-wrap items-center p-4">
              {index % 2 === 0 ? (
                // Si el índice es par, mostrar la imagen a la izquierda
                <Image
                  src={paso.imagen}
                  alt={paso.titulo}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              ) : null}
              <div className="w-full p-4 md:w-1/2 lg:w-2/3">
                <h2 className="text-2xl font-semibold text-blue-700">{paso.titulo}</h2>
                <p className="mt-2 text-gray-600">{paso.descripcion}</p>
              </div>
              {index % 2 === 1 ? (
                // Si el índice es impar, mostrar la imagen a la derecha
                <Image
                  src={paso.imagen}
                  alt={paso.titulo}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Process;
