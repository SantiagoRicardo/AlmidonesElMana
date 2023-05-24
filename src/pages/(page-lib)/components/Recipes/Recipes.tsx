import { type FC } from "react";
import Image from "next/image";

type RecipesImages = {
  id: string;
  title: string;
  description: string;
  time: string;
  calories: string;
  src: string;
  alt: string;
};

const recipesImages: RecipesImages[] = [
  {
    id: "recipe-1",
    title: "Pan de bono",
    description: "12 Unidades",
    src: "/images/pan-de-bono.jpg",
    alt: "Equipo 1",
    time: "30 min",
    calories: "150 Calorias",
  },
  {
    id: "picture-2",
    title: "Arepas de yucas",
    description: "6 Unidades",
    src: "/images/arepas-de-yuca.jpg",
    alt: "Equipo 2",
    time: "35 min",
    calories: "180 Calorias",
  },
  {
    id: "picture-3",
    title: "Almojabanas",
    description: "12 Unidades",
    src: "/images/almojabanas.jpg",
    alt: "Equipo 3",
    time: "40 min",
    calories: "140 Calorias",
  },
  {
    id: "picture-4",
    title: "Panderitos",
    description: "15 Unidades",
    src: "/images/panderitos.jpg",
    alt: "Equipo 4",
    time: "20 min",
    calories: "83 Calorias",
  },
];

const Recipes: FC = () => (
  <section id="recipes" className="relative">
    <div className="justify-center md:flex lg:mx-20">
      <div className="mt-10">
        <div className="text-center">
          <h2 className="text-center font-sans text-lg font-semibold leading-8 text-[#02044a]">
            Explora Nuevas Horizontes Culinarios con Almidón de Yuca
          </h2>
          <p className="mt-2 font-sans text-6xl font-semibold tracking-tight text-gray-900">
            Transforma tus Recetas con el Encanto del Almidón de Yuca
          </p>
          <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-gray-600">
            Sumérgete en la deliciosa tradición culinaria de América Latina con nuestras recetas de
            almidón de yuca. Desde un irresistible pan de bono hasta los crujientes wafles y las
            sabrosas arepas, te guiamos en la preparación de estas delicias auténticas. Descubre
            cómo el almidón de yuca realza su textura y sabor, brindando una experiencia culinaria
            única. ¡Déjate seducir por el encanto de nuestras recetas de Almidones el Manay
            sorprende a tus seres queridos con estas deliciosas creaciones!
          </p>

          <div className="m-5 justify-center md:flex">
            {recipesImages.map((recipes) => (
              <div key={recipes.id} className="m-5 max-w-sm overflow-hidden rounded shadow-lg">
                <Image
                  width={200}
                  height={200}
                  className="w-full"
                  src={recipes.src}
                  alt="Loading..."
                />
                <div className="border-b-2 px-6 py-4">
                  <div className="mb-2 text-xl font-bold">{recipes.title}</div>
                  <p className="text-base text-gray-700">{recipes.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    {recipes.time}
                  </span>
                  <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    {recipes.calories}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Recipes;
