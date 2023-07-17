import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const footerContent = {
  company: {
    logo: {
      src: "/images/Yuca.png",
      alt: "Logo",
      width: 50,
      height: 50,
    },
    name: "Almidones El Maná",
    description:
      "Somos una empresa dedicada a la producción y comercialización de almidón agrio de yuca de alta calidad. Ofrecemos un producto orgánico, sostenible y versátil para la industria alimentaria y la gastronomía.",
    socialMedia: [
      {
        icon: FaFacebookF,
        href: "#",
        className:
          "flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition-colors duration-300 ease-in-out hover:bg-blue-500",
      },
      {
        icon: FaInstagram,
        href: "#",
        className:
          "flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 transition-colors duration-300 ease-in-out hover:bg-pink-500",
      },
      {
        icon: FaTwitter,
        href: "#",
        className:
          "flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 transition-colors duration-300 ease-in-out hover:bg-blue-300",
      },
    ],
  },
  links: [
    { text: "Inicio", href: "#" },
    { text: "Productos", href: "#" },
    { text: "Recetas", href: "#" },
    { text: "Nosotros", href: "#" },
    { text: "Contacto", href: "#" },
  ],
  contactInfo: [
    {
      icon: FaPhone,
      text: "+57-312-671-3165",
    },
    {
      icon: FaEnvelope,
      text: "almidoneselmana@gmail.com",
    },
    {
      icon: HiLocationMarker,
      text: "Cienaga de Oro, Córdoba",
    },
  ],
  customerService: {
    description:
      "¿Tienes alguna pregunta o sugerencia? Escríbenos por WhatsApp y te responderemos lo antes posible.",
    ctaButton: {
      icon: FaWhatsapp,
      text: "Escribir por WhatsApp",
      href: "https://wa.me/573126713165?text=Hola,%20Almidones%20el%20Mana,%20Necesito%20Una%20Cotización!",
    },
  },
};
export default footerContent;
