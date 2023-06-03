import { type FC } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4 flex items-center gap-2">
            <Image
              className="rounded-full"
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <span className="text-xl font-bold">Almidones El Maná</span>
          </div>
          <p className="text-center text-sm md:text-left">
            Somos una empresa dedicada a la producción y comercialización de almidón agrio de yuca
            de alta calidad. Ofrecemos un producto orgánico, sostenible y versátil para la industria
            alimentaria y la gastronomía.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-4 text-lg font-bold">Información de contacto</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone className="text-gray-400" size={16} />
              +57 312 345 6789
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" size={16} />
              almidoneselmana@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <HiLocationMarker className="text-gray-400" size={16} />
              Calle 123 # 45-67, Bogotá, Colombia
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-4 text-lg font-bold">Enlaces útiles</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:text-gray-100 hover:underline"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:text-gray-100 hover:underline"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:text-gray-100 hover:underline"
              >
                Recetas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:text-gray-100 hover:underline"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:text-gray-100 hover:underline"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-4 text-lg font-bold">Atención al cliente</h3>
          <p className="mb-4 text-sm">
            ¿Tienes alguna pregunta o sugerencia? Escríbenos por WhatsApp y te responderemos lo
            antes posible.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-green-600"
          >
            <FaWhatsapp size={20} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between border-t border-gray-700 p-4">
        <p className="text-sm">© 2023 Almidones El Maná. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition-colors duration-300 ease-in-out hover:bg-blue-500"
          >
            <FaFacebookF className="text-white" size={20} />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 transition-colors duration-300 ease-in-out hover:bg-pink-500"
          >
            <FaInstagram className="text-white" size={20} />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 transition-colors duration-300 ease-in-out hover:bg-blue-300"
          >
            <FaTwitter className="text-white" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
