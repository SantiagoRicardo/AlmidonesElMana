import { type FC } from "react";
import { NavbarRecipes } from "../(page-lib)/layouts";

const BlogPost: FC = () => {
  return (
    <>
      <NavbarRecipes />
      <div className="container m-10 mx-auto w-full max-w-7xl justify-center rounded-3xl bg-gray-50 p-10">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          ¿Qué es el almidón agrio de yuca?
        </h1>
        <p className="mt-4 text-justify text-lg text-gray-600">
          El almidón agrio de yuca es un tipo de almidón que se extrae de la raíz de la planta de
          yuca. Es conocido por su textura cremosa y su capacidad para espesar y estabilizar
          productos alimenticios, además de ser resistente a la congelación y la descongelación.
        </p>
        <p className="mt-4 text-justify text-lg text-gray-600">
          Una de las principales características del almidón agrio de yuca es su acidez, que es
          causada por la fermentación natural del almidón después de su extracción. Este proceso de
          fermentación produce ácido láctico, lo que da al almidón agrio de yuca su sabor
          ligeramente ácido y su capacidad para actuar como conservante natural.
        </p>
        <p className="mt-4 text-justify text-lg text-gray-600">
          El almidón agrio de yuca se utiliza ampliamente en la industria alimentaria para mejorar
          la textura y estabilidad de productos como salsas, sopas, postres, panes y bebidas.
          También es popular en la cocina de América Latina y el Caribe, donde se utiliza para
          preparar platos tradicionales como arepas, hallacas, tamales y empanadas.
        </p>
        <p className="mt-4 text-justify text-lg text-gray-600">
          Además, el almidón agrio de yuca es una alternativa popular al almidón de maíz y trigo
          para aquellos que siguen una dieta libre de gluten. También es considerado una opción más
          sostenible que otros espesantes, ya que la yuca es una planta resistente y de bajo
          mantenimiento que puede ser cultivada en climas cálidos y húmedos sin la necesidad de
          pesticidas y fertilizantes químicos intensivos.
        </p>
        <h2 className="mt-8 text-left text-3xl font-bold text-gray-800">
          Características del almidón agrio de yuca
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-4 text-lg text-gray-600">
          <li className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-green-500"></span>
            Alta calidad: El almidón agrio de yuca de Almidones El Maná se produce utilizando raíces
            de yuca de la más alta calidad, garantizando un producto superior.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-green-500"></span>
            Textura suave: El almidón agrio de yuca tiene una textura suave y sedosa que lo hace
            perfecto para espesar salsas, sopas y postres, brindando una consistencia agradable a
            tus preparaciones.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-green-500"></span>
            Sabor ligeramente ácido: El almidón agrio de yuca tiene un sabor distintivo y
            agradablemente ácido, que agrega un toque de acidez a tus recetas, realzando los sabores
            de los platos.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-green-500"></span>
            Conservante natural: Gracias a su acidez natural, el almidón agrio de yuca actúa como un
            conservante natural, prolongando la vida útil de los alimentos y brindando una mayor
            estabilidad a las preparaciones.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-green-500"></span>
            Alternativa sin gluten: El almidón agrio de yuca es una excelente opción para personas
            que siguen una dieta sin gluten, ya que no contiene gluten y puede ser utilizado como
            sustituto en recetas que requieren almidón de trigo u otros almidones que contengan
            gluten.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-green-500"></span>
            Sostenible: La yuca es una planta resistente y de bajo mantenimiento, lo que la
            convierte en una opción sostenible para la producción de alimentos. Al elegir el almidón
            agrio de yuca, estás optando por un producto que es amigable con el medio ambiente.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-green-500"></span>
            Versatilidad culinaria: El almidón agrio de yuca se puede utilizar en una amplia
            variedad de recetas, desde panes y postres hasta platos salados tradicionales. Su
            versatilidad en la cocina te brinda opciones creativas para experimentar y explorar
            nuevos sabores.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-green-500"></span>
            Rico en fibra: El almidón agrio de yuca contiene una cantidad significativa de fibra, lo
            que lo convierte en una opción saludable para incluir en tu dieta. La fibra es
            importante para la salud digestiva y ayuda a mantener un sistema digestivo saludable.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-green-500"></span>
            Producto orgánico: El almidón agrio de yuca de Almidones El Maná se produce utilizando
            métodos orgánicos, lo que garantiza un producto libre de pesticidas y químicos dañinos.
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogPost;
