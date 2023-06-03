import Image from "next/image";
import { type FC } from "react";
import ProcessUs from "./lib/page";
import { FaArrowRight } from "react-icons/fa";

const Process: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-bold">Proceso de producción</h1>
      <div className="mt-8 flex flex-col">
        {ProcessUs.map((paso, index) => (
          <div key={index} className="flex flex-wrap items-center justify-center p-4">
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
            {index < ProcessUs.length - 1 ? (
              // Si no es el último paso, mostrar una flecha
              <div className="flex w-full justify-center p-4">
                <FaArrowRight size={32} className="text-blue-500" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Process;
