/* IMPORTACIONES */

import { scrollNavbar , coches } from "./scriptsGenerales.js";

/*IMPORTACIONES*/


//Llamada a las funciones importadas
scrollNavbar();


// GALERÍA DE FOTOS DE COCHES
//recupereación de elementos necesarios
const GALLERY_CONTAINER = document.querySelector("#galleryContainer");

for (let i = 0 ; i < coches.length ; i++) {
  //creación e integración de elemento div contenedor de las imágenes
  const CARD = document.createElement("div");
  CARD.classList.add("card");
  GALLERY_CONTAINER.appendChild(CARD);

  //creación e integración de elemento div para contener enlace/imagen
  const CARD_IMAGE = document.createElement("div");
  CARD_IMAGE.classList.add("card-image");
  CARD.appendChild(CARD_IMAGE);

  //creación e integración de elemento enlace, tratando de configurar los atributos necesarios para el lightbox (data-lightbox y data-title)
  const CAR_ANCHOR = document.createElement("a");
  CAR_ANCHOR.href = coches[i].imagen;
  CAR_ANCHOR.target = "_blank"
  CAR_ANCHOR.title = "enlace_a_imagen_de_producto_" + (i + 1) ;
  CAR_ANCHOR.setAttribute("data-lightbox" , "roadtrip");
  let carDataTitle = coches[i].marca + " " + coches[i].tipo + ". Color " + coches[i].color; 
  CAR_ANCHOR.setAttribute("data-title" , carDataTitle);
  CARD_IMAGE.appendChild(CAR_ANCHOR);

  //creación e integración del elemento IMG
  const CAR_IMG = document.createElement("img");
  CAR_IMG.src = coches[i].imagen;
  CAR_IMG.alt = "Imagen_" + coches[i].marca;
  CAR_ANCHOR.appendChild(CAR_IMG);

  //creación e integración de elemento div para más información acerca de vehículos
  const INFO_CARD = document.createElement("div");
  INFO_CARD.classList.add("info-card");
  CARD.appendChild(INFO_CARD);

  const CAR_NAME = document.createElement("h4");
  INFO_CARD.appendChild(CAR_NAME);
  let carName = document.createTextNode(coches[i].marca);
  CAR_NAME.appendChild(carName);

  //MÁS INFO
  //Recogemos la información necesaria del objeto "otros" incluido en cada coche
  let doors = coches[i].otros.Puertas;
  let engine = coches[i].otros.Motor;
  let power = coches[i].otros.Potencia;
  const OTHER_INFO = document.createElement("div");
  INFO_CARD.appendChild(OTHER_INFO);
  OTHER_INFO.innerHTML += `
    <hr>
    <ul>
      <li>Potencia: ${power}</li>
      <li>Motor: ${engine}</li>
      <li>Puertas: ${doors}</li>
    </ul>
  `
};


//pruebas
/*
console.log(coches[1]);
for (let i = 0 ; i < coches.length ; i++) {
  let doors = coches[i].otros.Puertas;
  let engine = coches[i].otros.Motor;
  let power = coches[i].otros.Potencia;
  console.log(doors);
  console.log(engine);
  console.log(power);
};
*/