import { type FC } from "react";
import { Footer, NavbarRecipes } from "../(page-lib)/layouts";
import properties from "./sour_cassava_starch_properties.json";
import descriptions from "./sour_cassava_starch_description.json";

const BlogPost: FC = () => {
  return (
    <>
      <NavbarRecipes />

      <div className="container m-10 mx-auto w-full max-w-7xl justify-center rounded-3xl bg-gray-50 p-10">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          ¿Qué es el almidón agrio de yuca?
        </h1>

        {descriptions.map((description) => (
          <p key={description} className="mt-4 text-justify text-lg text-gray-600">
            {description}
          </p>
        ))}

        <h2 className="mt-8 text-left text-3xl font-bold text-gray-800">
          Características del almidón agrio de yuca
        </h2>

        <ul className="mt-6 ml-4 list-inside list-disc flex-col text-lg marker:text-lg marker:text-green-500">
          {properties.map((property) => (
            <li key={property}>{property}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
