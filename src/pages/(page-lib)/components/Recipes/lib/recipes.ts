interface Recipe {
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
}

const RecipesImages: Recipe[] = [
  {
    id: "Pan-de-bono",
    title: "Pan de bono",
    image: {
      src: "/images/pan-de-bono.jpg",
      alt: "Equipo 1",
    },
    details: {
      description: "12 Unidades",
      time: "30 min",
      calories: "150 Calorias",
    },
    ingredients: [
      "2 tazas de almidón agrio de yuca",
      "1 taza de queso fresco rallado",
      "2 huevos",
      "1/2 de taza de almidón de maíz",
      "1/4 de taza de mantequilla derretida",
      "1/4 de taza de leche",
      "1 cucharadita de polvo de hornear",
      "1/2 cucharadita de sal",
    ],
    instructions: [
      "Precalienta el horno a 180°C (350°F) y forra una bandeja para hornear con papel pergamino.",
      "En un tazón grande, mezcla el almidón agrio de yuca, el queso rallado, el almidón de maíz, el polvo de hornear y la sal.",
      "En otro recipiente, bate los huevos. Agrega la mantequilla derretida y la leche, y mezcla bien.",
      "Vierte la mezcla líquida sobre los ingredientes secos y comienza a mezclar todo con una cuchara de madera o con las manos hasta obtener una masa homogénea y suave.",
      "Con las manos ligeramente engrasadas, toma porciones de masa del tamaño de una pelota de golf y forma bolitas redondas. Colócalas en la bandeja para hornear, dejando espacio entre cada pan de bono.",
      "Hornea durante aproximadamente 20-25 minutos, o hasta que los panes de bono estén dorados y firmes al tacto.",
      "Retira del horno y deja enfriar por unos minutos antes de servir. Los panes de bono se disfrutan mejor cuando están calientes y recién horneados.",
      "¡Y ahí lo tienes! Ahora puedes disfrutar de deliciosos panes de bono caseros. Recuerda que puedes ajustar las cantidades de los ingredientes según tus preferencias y el tamaño de los panes de bono que desees hacer. ¡Buen provecho!",
    ],
    difficulty: "Fácil",
    servings: "12 porciones",
  },
  {
    id: "Arepas-de-yuca",
    title: "Arepas de yuca",
    image: {
      src: "/images/arepas-de-yuca.jpg",
      alt: "Equipo 2",
    },
    details: {
      description: "6 Unidades",
      time: "35 min",
      calories: "180 Calorias",
    },
    ingredients: [
      "2 tazas de almidón agrio de yuca",
      "1 taza de queso fresco rallado",
      "1/2 cucharadita de sal",
      "Agua tibia (aproximadamente 1 taza)",
    ],
    instructions: [
      "En un tazón grande, mezcla el almidón agrio de yuca, el queso rallado y la sal.",
      "Agrega gradualmente el agua tibia, mezclando con las manos hasta formar una masa suave y manejable. La cantidad de agua puede variar, así que agrégala poco a poco hasta obtener una masa que no se desmorone ni esté demasiado pegajosa.",
      "Dividir la masa en porciones del tamaño deseado para las arepas. Puedes hacer arepas pequeñas o medianas según tu preferencia",
      "Forma cada porción en una bola y luego aplánala para darle forma de disco",
      "En una sartén antiadherente, cocina las arepas a fuego medio-alto durante aproximadamente 5-7 minutos por cada lado sin agregar aceite, hasta que estén doradas y crujientes.",
      "Una vez cocidas, retíralas del fuego y déjalas enfriar un poco antes de servirlas.",
      "¡Y ahí lo tienes! Ahora puedes disfrutar de deliciosas arepas de yuca caseras. Recuerda que puedes ajustar las cantidades de los ingredientes según tus preferencias y el tamaño de las arepas de yuca que desees hacer. ¡Buen provecho!",
    ],
    difficulty: "Medio",
    servings: "6 porciones",
  },
  {
    id: "Almojabanas-de-almidon",
    title: "Almojabanas",
    image: {
      src: "/images/almojabanas.jpg",
      alt: "Equipo 2",
    },
    details: {
      description: "12 Unidades",
      time: "40 min",
      calories: "180 Calorias",
    },
    ingredients: [
      "2 tazas de almidón agrio de yuca",
      "1/2 taza de queso fresco rallado",
      "1/4 de taza de mantequilla derretida",
      "1/4 de taza de leche",
      "2 huevos",
      "1 cucharadita de polvo de hornear",
      "1/2 cucharadita de sal",
    ],
    instructions: [
      "Precalienta el horno a 200°C (400°F) y forra una bandeja para hornear con papel pergamino.",
      "En un tazón grande, mezcla el almidón de yuca, el queso rallado, el polvo de hornear y la sal.",
      "En otro recipiente, bate los huevos y agrega la mantequilla derretida y la leche. Mezcla bien.",
      "Vierte la mezcla líquida sobre los ingredientes secos y mezcla hasta obtener una masa homogénea. Si es necesario, agrega un poco más de almidón de yuca si la masa está muy pegajosa.",
      "Con las manos ligeramente engrasadas, toma porciones de masa del tamaño de una pelota de golf y forma bolitas redondas. Colócalas en la bandeja para hornear, dejando suficiente espacio entre cada almojábana.",
      "Hornea durante aproximadamente 20-25 minutos, o hasta que las almojábanas estén doradas y firmes al tacto.",
      "Retira del horno y deja enfriar por unos minutos antes de servir. Las almojábanas son mejores cuando están calientes y recién horneadas.",
    ],
    difficulty: "Medio",
    servings: "12 porciones",
  },
  {
    id: "Panderitos-de-almidon",
    title: "Panderitos",
    image: {
      src: "/images/Panderos.png",
      alt: "Equipo 2",
    },
    details: {
      description: "15 Unidades",
      time: "20 min",
      calories: "83 Calorias",
    },
    ingredients: [
      "2 tazas de almidón agrio de yuca",
      "1 taza de queso fresco rallado",
      "1/4 taza de mantequilla derretida",
      "1/2 taza de leche",
      "2 huevos",
      "1 cucharadita de polvo de hornear",
      "1/2 cucharadita de sal",
      "6 cucharadas de azucar",
    ],
    instructions: [
      "Precalienta el horno a 200°C (400°F) y forra una bandeja para hornear con papel pergamino.",
      "En un tazón grande, mezcla el almidón de yuca, el queso rallado, el polvo de hornear y la sal.",
      "En otro recipiente, bate los huevos y agrega la mantequilla derretida y la leche. Mezcla bien.",
      "Vierte la mezcla líquida sobre los ingredientes secos y mezcla hasta obtener una masa homogénea. Si es necesario, agrega un poco más de almidón de yuca si la masa está muy pegajosa.",
      "Con las manos ligeramente engrasadas, toma porciones de masa del tamaño de una pelota de golf y forma bolitas redondas. Colócalas en la bandeja para hornear, dejando suficiente espacio entre cada almojábana.",
      "Hornea durante aproximadamente 20-25 minutos, o hasta que las almojábanas estén doradas y firmes al tacto.",
      "Retira del horno y deja enfriar por unos minutos antes de servir. Las almojábanas son mejores cuando están calientes y recién horneadas.",
    ],
    difficulty: "Medio",
    servings: "15 porciones",
  },
];
export default RecipesImages;
