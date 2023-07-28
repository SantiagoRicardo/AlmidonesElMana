import { type FC } from "react";
import Image from "next/image";
import data from "./lib/data.json";
import { NavbarRecipes } from "../(page-lib)/layouts";
import cs from "@/utils/cs";

const Process: FC = () => {
  return (
    <>
      <NavbarRecipes />

      <div className="m-10 mx-auto w-full max-w-7xl justify-center rounded-3xl bg-slate-50 p-10">
        <h1 className="text-center text-4xl font-bold">Proceso de producción</h1>
        <div className="mt-8 flex flex-col">
          {data.map((paso, index) => (
            <div
              key={index}
              className={cs(
                "flex flex-wrap items-center p-4",
                index % 2 !== 0 && "flex-row-reverse"
              )}
            >
              <Image
                src={paso.imagen}
                alt={paso.titulo}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />

              <div className="w-full p-4 md:w-1/2 lg:w-2/3">
                <h2 className="text-2xl font-semibold text-blue-700">{paso.titulo}</h2>
                <p className="mt-2 text-gray-600">{paso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Process;
