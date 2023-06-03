import { type FC } from "react";
import { useRouter } from "next/router";
import { RecipesImages } from "../(page-lib)/components/Recipes/lib";
import Image from "next/image";
import { NavbarRecipes } from "../(page-lib)/layouts";
//import { BiTime, BiChevronsRight, BiFoodMenu } from "react-icons/bi";
import { FaHotjar, FaUser, FaCheck } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

type Recipe = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  details: {
    description: string;
    time: string;
    calories: string;
  };
  ingredients: string[];
  instructions: string[];
  difficulty: string;
  servings: string;
};

const RecipePage: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const recipe: Recipe | undefined = RecipesImages.find(
    (recipe: Recipe) => recipe.id === id
  ) as Recipe;

  if (!recipe) {
    // Si no se encuentra la receta, redirige a la página principal
    void router.push("/");
    return null;
  }

  return (
    <>
      <NavbarRecipes />
      <section className="m-5 rounded-3xl bg-gray-50 p-5 text-center md:m-10">
        <h1 className="mb-4 text-5xl font-bold">{recipe.title}</h1>

        <div className="mb-10 flex justify-center">
          <ul className="grid w-full grid-cols-1 items-center gap-10 rounded-lg bg-gray-300 p-5 text-sm text-gray-700 md:flex md:w-auto">
            <li className="flex items-center">
              <FaHotjar className="fill-orange-600" size={20} /> {recipe.details.calories}
            </li>
            <li className="flex items-center">
              <MdWatchLater className="fill-blue-700" size={20} /> {recipe.details.time}
            </li>
            <li className="flex items-center">
              <HiAdjustmentsHorizontal className="fill-red-600" size={20} /> {recipe.difficulty}
            </li>
            <li className="flex items-center">
              <FaUser className="fill-indigo-800" size={20} /> {recipe.servings}
            </li>
          </ul>
        </div>

        <div className="mb-4 flex justify-center">
          <Image
            className="rounded-2xl shadow-lg"
            src={recipe.image.src}
            alt={recipe.image.alt}
            width={1020 / 2}
            height={576 / 2}
          />
        </div>

        <div className="mt-4 w-full text-left md:m-10">
          <h2 className="mb-4 text-4xl font-bold">Ingredientes:</h2>
          <ul className="list-item pl-4 text-base leading-loose md:text-xl">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <div className="flex items-center gap-1">
                  <FaCheck className="flex text-green-400" size={20} />
                  {ingredient}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 w-full text-left md:m-10">
          <h2 className="mb-4 text-4xl font-bold">Instrucciones:</h2>
          <ol className="max-w-4xl list-decimal pl-12 text-base leading-loose md:text-xl">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default RecipePage;
