import { type FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { RecipesImages } from "./lib";

const Recipes: FC = () => {
  const router = useRouter();

  const handleRecipeClick = (id: string) => {
    void router.push(`/recipes/${id}`);
  };

  return (
    <section id="recipes" className="relative">
      <div className="justify-center md:flex lg:mx-20">
        <div className="mt-10">
          <div className="text-center">
            <h2 className="mx-10 text-left font-sans text-lg font-semibold capitalize leading-8 text-[#02044a] md:text-center">
              Explora Nuevos Horizontes Culinarios
            </h2>
            <p className="mx-10 mt-2 text-left font-sans text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl">
              Transforma tus recetas con el almidón de yuca
            </p>
            <p className="m-10 mt-6 max-w-5xl text-left text-xl leading-8 text-gray-600 md:mx-auto md:text-center">
              Descubre cómo el almidón de yuca realza su textura y sabor, brindando una experiencia
              culinaria única. Te guiamos en la preparación de estas delicias auténticas ¡Déjate
              seducir por el encanto de nuestras recetas de Almidones el Mana y sorprende a tus
              seres queridos con estas deliciosas creaciones!
            </p>

            <div className="m-5 justify-center md:flex">
              {RecipesImages.map((recipes) => (
                <div
                  key={recipes.id}
                  className="m-5 max-w-sm overflow-hidden rounded shadow-lg transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
                  onClick={() => handleRecipeClick(recipes.id)}
                >
                  <Image
                    width={200}
                    height={200}
                    className="w-full"
                    src={recipes.image.src}
                    alt="Loading..."
                  />
                  <div className="border-b-2 px-6 py-4">
                    <div className="mb-2 text-xl font-bold">{recipes.title}</div>
                    <p className="text-base text-gray-700">{recipes.servings}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      {recipes.details.time}
                    </span>
                    <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      {recipes.details.calories}
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
};

export default Recipes;
