interface Process {
  titulo: string;
  descripcion: string;
  imagen: string;
}

const ProcessUs: Process[] = [
  {
    titulo: "Recepción de materia prima",
    descripcion:
      "En el proceso de recepción de materia prima se reciben los vehículos con yuca verde dulce o amarga, en este proceso se realiza el pesaje de la yuca.",
    imagen: "/imagesProcess/recepcion.jpg",
  },
  {
    titulo: "Almacenamiento",
    descripcion:
      "Se almacena la yuca verde en plataforma para su posterior proceso de transformación.",
    imagen: "/imagesProcess/almacenamiento.jpg",
  },
  {
    titulo: "Lavado y pelado",
    descripcion:
      "En el proceso de lavado y pelado se retira la piel e impurezas contenidas en la yuca como tierra, piedras, entre otros; con el fin de garantizar la calidad del producto final.",
    imagen: "/imagesProcess/lavado.jpg",
  },
  {
    titulo: "Rayado",
    descripcion:
      "El proceso de rayado se realiza con rodillos de acero inoxidable, reduciendo el tamaño de la yuca obteniendo un afrecho donde se encuentra los gránulos de almidón, del tamaño de los gránulos del afrecho depende el rendimiento del almidón entre más grande menor separación del almidón, entre más fino el almidón sufre degradación.",
    imagen: "/imagesProcess/rayado.jpg",
  },
  {
    titulo: "Filtrado",
    descripcion:
      "La yuca rayada con agua se hace pasar por filtros de acero inoxidable rotatorios con fin de realizar la separación del almidón y el afrecho.",
    imagen: "/imagesProcess/filtrado.jpg",
  },
  {
    titulo: "Sedimentación",
    descripcion:
      "El mosto de yuca rayada pasa al proceso de sedimentación en albercas donde el almidón por ser mas denso se sedimenta en el fondo de la alberca separándose así del agua, la sedimentación se realiza en un periodo de 16 horas. Este producto sedimentado es lavado superficialmente para retirar la mancha.",
    imagen: "/imagesProcess/sedimentacion.jpg",
  },
  {
    titulo: "Fermentación",
    descripcion:
      "El producto sedimentado en fermentado en tanques de fermentación, por un periodo de 45 días, esto se realiza con el fin de lograr una expansión adecuada del producto, aspectos requeridos para almidones destinado a panadería y repostería.",
    imagen: "/imagesProcess/fermentacion.jpg",
  },
  {
    titulo: "Secado",
    descripcion:
      "El producto fermentado es secado con la ayuda de sol en carpas o lonas de polietileno hasta alcanzar la humedad deseada.",
    imagen: "/imagesProcess/secado.jpg",
  },
  {
    titulo: "Envasado",
    descripcion:
      "El almidón seco es envasado en bultos de 12.5 kg y de 50 kg esto de acuerdo con requerimiento de los clientes.",
    imagen: "/imagesProcess/producto-final.jpg",
  },
  {
    titulo: "Producto",
    descripcion:
      "El producto terminado y envasado es almacenado en bodega libre de infestación de plagas, malos olores y humedad con el fin de garantizar la calidad del producto terminado.",
    imagen: "/imagesProcess/envasado.jpg",
  },
];

export default ProcessUs;
