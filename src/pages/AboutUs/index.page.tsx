import Image from "next/image";
import { type FC } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const AboutUs: FC = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        {" "}
        <h1 className="text-center text-4xl font-bold">Nuestra historia</h1>{" "}
        <p className="mt-4 text-center text-lg text-gray-700">
          Almidones el Mana nació en el año 2000 como una iniciativa familiar para aprovechar los
          recursos naturales de nuestra región y ofrecer un producto de calidad a nuestros clientes.
        </p>{" "}
        <div className="mt-8 flex flex-wrap items-center justify-center">
          {" "}
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            {" "}
            <Image
              src="/historia1.jpg"
              alt="Historia 1"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />{" "}
            <p className="mt-4 text-center text-gray-600">
              Comenzamos con una pequeña planta de producción en nuestra finca, donde procesábamos
              el almidón de yuca con métodos artesanales.
            </p>{" "}
          </div>{" "}
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            {" "}
            <Image
              src="/historia2.jpg"
              alt="Historia 2"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />{" "}
            <p className="mt-4 text-center text-gray-600">
              Con el paso del tiempo, fuimos creciendo y ampliando nuestra capacidad de producción,
              incorporando nuevas tecnologías y maquinarias que nos permitieron mejorar la calidad y
              la variedad de nuestros productos.
            </p>{" "}
          </div>{" "}
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            {" "}
            <Image
              src="/historia3.jpg"
              alt="Historia 3"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />{" "}
            <p className="mt-4 text-center text-gray-600">
              Actualmente, contamos con una planta moderna y certificada, donde producimos almidones
              de diferentes tipos y aplicaciones, como almidón nativo, modificado, pregelatinizado y
              premezclas.
            </p>{" "}
          </div>{" "}
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            {" "}
            <Image
              src="/historia4.jpg"
              alt="Historia 4"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />{" "}
            <p className="mt-4 text-center text-gray-600">
              Nuestro objetivo es seguir innovando y creciendo, manteniendo siempre nuestro
              compromiso con la calidad, el servicio y la responsabilidad social y ambiental.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="container mx-auto px-4 py-8">
        {" "}
        <h1 className="text-center text-4xl font-bold">Nosotros</h1>{" "}
        <p className="mt-4 text-center text-lg text-gray-700">
          Somos una empresa dedicada a la producción y comercialización de almidones de alta
          calidad.
        </p>{" "}
        <div className="mt-8 flex flex-wrap items-center justify-center">
          {" "}
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            {" "}
            <Image
              src="/mision.jpg"
              alt="Misión"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />{" "}
            <h2 className="mt-4 text-center text-2xl font-semibold">Misión</h2>{" "}
            <p className="mt-2 text-center text-gray-600">
              Nuestra misión es satisfacer las necesidades de nuestros clientes con productos
              innovadores y de excelente calidad, contribuyendo al desarrollo económico y social de
              nuestro país.
            </p>{" "}
          </div>{" "}
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            {" "}
            <Image
              src="/vision.jpg"
              alt="Visión"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />{" "}
            <h2 className="mt-4 text-center text-2xl font-semibold">Visión</h2>{" "}
            <p className="mt-2 text-center text-gray-600">
              Nuestra visión es ser líderes en el mercado nacional e internacional de almidones,
              ofreciendo soluciones integrales y personalizadas a nuestros clientes, con
              responsabilidad social y ambiental.
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-8 flex flex-col items-center">
          {" "}
          <h3 className="text-xl font-medium text-gray-800">
            Síguenos en nuestras redes sociales
          </h3>{" "}
          <div className="mt-4 flex space-x-4">
            {" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaFacebook size={24} />
            </a>{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaInstagram size={24} />
            </a>{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaTwitter size={24} />
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      );
    </section>
  );
};

export default AboutUs;
