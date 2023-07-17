import { type FC } from "react";
import Image from "next/image";
import footerContent from "./lib/page";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-blue-900 text-gray-100">
      <div className="mx-auto grid grid-cols-1 gap-8 p-10 md:grid-cols-4 md:justify-around">
        <div className="flex flex-col items-start p-4">
          <div className="mb-4 flex items-center gap-2">
            <Image
              className="rounded-full"
              src={footerContent.company.logo.src}
              alt={footerContent.company.logo.alt}
              width={footerContent.company.logo.width}
              height={footerContent.company.logo.height}
            />
            <span className="text-xl font-bold">{footerContent.company.name}</span>
          </div>
          <p className="max-w-md text-left text-sm">{footerContent.company.description}</p>
          <div className="mt-4 flex items-center gap-4">
            {footerContent.company.socialMedia.map((social, index) => (
              <a key={index} href={social.href} className={social.className}>
                <social.icon className="text-white" size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start p-4">
          <h3 className="mb-4 text-lg font-bold">Enlaces útiles</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {footerContent.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 ease-in-out hover:text-gray-300 hover:underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start p-4">
          <h3 className="mb-4 text-lg font-bold">Información de contacto</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {footerContent.contactInfo.map((info, index) => (
              <li key={index} className="flex items-center gap-2">
                <info.icon className="text-gray-400" size={16} /> {info.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start p-4">
          <h3 className="mb-4 text-lg font-bold">Atención al cliente</h3>
          <p className="mb-4 max-w-md text-sm">{footerContent.customerService.description}</p>
          <Link
            href={footerContent.customerService.ctaButton.href}
            target="_blank"
            className="flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-green-600"
          >
            <footerContent.customerService.ctaButton.icon size={20} />{" "}
            {footerContent.customerService.ctaButton.text}
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center bg-gray-800 p-4">
        <p className="text-sm">© 2023 Almidones El Maná. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
