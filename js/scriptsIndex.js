/* IMPORTACIONES */
import { scrollNavbar } from "./scriptsGenerales.js";
/*IMPORTACIONES*/

//Llamada a las funciones importadas
scrollNavbar();

/*
NEWS NEWS NEWS INICIO INICIO INICIO
NEWS NEWS NEWS INICIO INICIO INICIO
NEWS NEWS NEWS INICIO INICIO INICIO
NEWS NEWS NEWS INICIO INICIO INICIO
NEWS NEWS NEWS INICIO INICIO INICIO
*/

//FECHA
const DATE_CONTAINER = document.querySelector("#show-date");
const TIME_CONTAINER = document.querySelector("#show-time");

window.addEventListener('load', function () {
  this.setInterval(reloj(), 1000);
});

function reloj() {
  //Abrimos instancia de la clase Date de javascript
  let date = new Date();
  //Recogemos los datos que queremos con los métodos de la clase Date
  let anyo = date.getFullYear();
  let mes = date.getMonth() + 1; //PROBLEMAS PARA MOSTRAR FECHA REAL. INVESTIGAR MÁS TARDE
  let dia = date.getDay() + 8; //PROBLEMAS PARA MOSTRAR FECHA REAL. INVESTIGAR MÁS TARDE
  let hora = date.getHours();
  let minuto = date.getMinutes();

  DATE_CONTAINER.innerHTML += `
    ${dia} / ${mes} / ${anyo}
  `

  let time = "";

  time += ((hora < 10) ? "0" : "") + hora + " : ";
  time += ((minuto < 10) ? "0" : "") + minuto;

  TIME_CONTAINER.innerHTML += `
    ${time}
  `
};




//Voy a recuperar datos ficticios de la página 'https://jsonplaceholder.typicode.com/posts'
//He extraído un pequeño fragmento del archivo .json y lo he guardado en mi proyecto

//Programación del FETCH
function newsFetch(url) {

  return fetch(url)

    .then(response => {  /* Hay respuesta */
      if (!response.ok) {   /* Respuesta NEGATIVA */
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      return response.json()  /* Respuesta POSITIVA */
    })

    .catch(error => {  /* ERROR antes de obtener respuesta */
      throw new Error('Error de red: ' + error)
    })

}; /* function newsFetch */

//Recuperamos los elementos que necesitamos para mostrar la información
const NEWS = document.querySelector("#newsContainer");
const ERRORDIV = document.querySelector("#errordiv");

newsFetch('./assets/json/news.json')

  .then(data => {

    data.forEach(object => {
      NEWS.innerHTML += `
        <div class="box-news">
          <h3>User Id: ${object.userId}</h3>
          <h4>Id: ${object.id}</h4>
          <h5>Título: ${object.title}</h5>
          <p>${object.body}</p>
        </div>  
      `
    })
    /* ESTAS LÍNEAS ME DAN ERROR DE CONSOLA, Y NO ENTIENDO LO SUFICIENTE DE 'FETCH' COMO PARA SABER POR QUÉ
    .catch (error => {
      ERRORDIV.innerHTML += `<p>Error (fetch):` + error + `</p>`
    })
    */
  });

/*
NEWS NEWS NEWS FIN FIN FIN
NEWS NEWS NEWS FIN FIN FIN
NEWS NEWS NEWS FIN FIN FIN
NEWS NEWS NEWS FIN FIN FIN
NEWS NEWS NEWS FIN FIN FIN
*/


/*
INDEX LOGO CAROUSEL SECTION 4 INICIO
INDEX LOGO CAROUSEL SECTION 4 INICIO
INDEX LOGO CAROUSEL SECTION 4 INICIO
INDEX LOGO CAROUSEL SECTION 4 INICIO
INDEX LOGO CAROUSEL SECTION 4 INICIO
*/

//Recuperación de elementos HTML
const BOXES_CAROUSEL_INDEX = document.querySelectorAll(".boxCarousel");
const PREV_BTN_CAROUSEL_INDEX = document.querySelector("#brands-prev-btn");
const NEXT_BTN_CAROUSEL_INDEX = document.querySelector("#brands-next-btn");
const DOTS_CONTAINER_CAROUSEL_INDEX = document.querySelector("#dots-container-index");

//Array con toda la información agrupada en parejas clave:valor
const BRANDS = [
  {
    'brand': 'Fiat',
    'anchor': 'https://www.fiat.com',
    'logo': 'assets/images/brands_logos/fiat-svgrepo-com.svg'
  },
  {
    'brand': 'Ford',
    'anchor': 'https://www.ford.com',
    'logo': '/assets/images/brands_logos/ford-svgrepo-com.svg'
  },
  {
    'brand': 'Honda',
    'anchor': 'https://www.honda.com',
    'logo': './assets/images/brands_logos/honda-svgrepo-com.svg'
  },
  {
    'brand': 'Hyundai',
    'anchor': 'https://www.hyundai.com/es/es.html',
    'logo': './assets/images/brands_logos/hyundai-svgrepo-com.svg'
  },
  {
    'brand': 'Jaguar',
    'anchor': 'https://www.jaguar.com/index.html?hide_msb=true',
    'logo': './assets/images/brands_logos/jaguar-alt-svgrepo-com.svg'
  },
  {
    'brand': 'Jeep',
    'anchor': 'https://www.jeep.es/?campaignid=CN~JEEP-ES-HAGAKURE-BRAND-VARIACIONES-X-VN-ONGOING-SDF-X-X-X-VA_MK~ES_MB~JEEP_CAT~VN_PR~RANGE_CX~OnGoing_CH~SEA-SDF_AU~S_GL~TF_PK~LEAD_EN~RANGE_FF~VARIACIONES_ID~GLB0003LGN_FS~Local&source=GOOGLE&gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_id=336708405&utm_campaign=336708405&utm_term=10088611&utm_content=336708405_20476395765&gad_source=1&gad_campaignid=336708405&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5AIG-NDe4VH_591J0XTPgk4MpMOxrixviE4bdN-Qxum4EVx5tSULYhoCPwUQAvD_BwE',
    'logo': './assets/images/brands_logos/jeep-alt-svgrepo-com.svg'
  },
  {
    'brand': 'Kia',
    'anchor': 'https://www.kia.com/es/',
    'logo': './assets/images/brands_logos/kia-svgrepo-com.svg'
  },
  {
    'brand': 'Lamborghini',
    'anchor': 'https://www.lamborghini.com/es-en',
    'logo': './assets/images/brands_logos/lamborghini-alt-svgrepo-com.svg'
  },
  {
    'brand': 'Lotus',
    'anchor': 'https://www.lotuscars.com/en-GB',
    'logo': './assets/images/brands_logos/lotus-alt-svgrepo-com.svg'
  },
  {
    'brand': 'Maserati',
    'anchor': 'https://www.maserati.com/es/es/shopping-tools/wtl-grecale?campaignName=7017T000000UZZC&wtl_source=7017T000000UZZC&utm_medium=paidsearch&utm_source=google&utmcampaign=eu_digit_grgtpmax_lead_es_2024_es_gr_hyb_pmax&gclsrc=aw.ds&gad_source=1&gad_campaignid=20750986734&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5FvuMhq3nwxVZy1tuBsEJ5yoG--vyuGX5xsWWcZZ0sTSSZgRxV6TqhoCvAkQAvD_BwE',
    'logo': './assets/images/brands_logos/maserati-svgrepo-com.svg'
  },
  {
    'brand': 'Mazda',
    'anchor': 'https://www.mazda.com/en/',
    'logo': './assets/images/brands_logos/mazda-svgrepo-com.svg'
  },
  {
    'brand': 'McLaren',
    'anchor': 'https://cars.mclaren.com/es-es',
    'logo': './assets/images/brands_logos/mclaren-alt-svgrepo-com.svg'
  },
  {
    'brand': 'Mercedes_Benz',
    'anchor': 'https://www.mercedes-benz.es/?gagcmid=GA_20716971962_155060255716_679585325237&utm_source=GOOGLE&utm_medium=cpc&utm_campaign=C.B.SEA.MB_NA_LA_ES_PUREBRAND_HYS202412996271&gclsrc=aw.ds&gad_source=1&gad_campaignid=20716971962&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5Ck55wrd4GM_U-z_yIEvBLa_Coa0RAKCdT4OWQ_JVyPzmp2N8G1URRoCNvMQAvD_BwE',
    'logo': './assets/images/brands_logos/mercedes-benz-svgrepo-com.svg'
  },
  {
    'brand': 'Mitsubishi',
    'anchor': 'https://www.mitsubishi-motors.es',
    'logo': './assets/images/brands_logos/mitsubishi-svgrepo-com.svg'
  },
  {
    'brand': 'Nissan',
    'anchor': 'https://www.nissan.es',
    'logo': './assets/images/brands_logos/nissan-svgrepo-com.svg'
  },
  {
    'brand': 'Opel',
    'anchor': 'https://www.opel.es',
    'logo': './assets/images/brands_logos/opel-svgrepo-com.svg'
  },
  {
    'brand': 'Peugeot',
    'anchor': 'https://www.peugeot.es/?srsltid=AfmBOorqS8kKNXEDJfFmChlPq_RzvFboD0MZbypJ2pPK9q7f3K4OUQCv',
    'logo': './assets/images/brands_logos/peugeot-svgrepo-com.svg'
  },
  {
    'brand': 'Porsche',
    'anchor': 'https://www.porsche.com/spain/',
    'logo': './assets/images/brands_logos/porsche-svgrepo-com.svg'
  },
  {
    'brand': 'Renault',
    'anchor': 'https://www.renault.es/?CAMPAIGN=es-es-r-l-def-brand-all_products-na-go-classic-marca_variaciones-omd202412996482&ORIGIN=paid_search&utm_source=google&utm_source_platform=SA360&utm_medium=cpc&utm_campaign=es-es-r-l-def-brand-all_products-na-go-classic-marca_variaciones-omd202412996482&utm_id=10380308560&gclsrc=aw.ds&&&ppc_keyword=renault%20online&gad_source=1&gad_campaignid=10380308560&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5JTU2W0AuUliQE_8Jgoj24EtvQ9ctARIbwI1GWhTWdg6MXiY-F9J7xoCJOoQAvD_BwE',
    'logo': './assets/images/brands_logos/renault-alt-svgrepo-com.svg'
  },
  {
    'brand': 'Subaru',
    'anchor': 'https://www.subaru.com/es/index.html',
    'logo': './assets/images/brands_logos/subaru-svgrepo-com.svg'
  },
  {
    'brand': 'Suzuki',
    'anchor': 'https://www.globalsuzuki.com',
    'logo': './assets/images/brands_logos/suzuki-svgrepo-com.svg'
  },
  {
    'brand': 'Toyota',
    'anchor': 'https://www.toyota.com',
    'logo': './assets/images/brands_logos/toyota-svgrepo-com.svg'
  },
  {
    'brand': 'Volkswagen',
    'anchor': 'https://www.vw.com/es/en.html',
    'logo': './assets/images/brands_logos/volkswagen-svgrepo-com.svg'
  },
  {
    'brand': 'Volvo',
    'anchor': 'https://www.volvo.com/en/',
    'logo': './assets/images/brands_logos/volvo-svgrepo-com.svg'
  }
];

//Variable control index array
let currentIndex_carousel_logos = 0;

//Crear elementos A y IMG dentro de cada caja
BOXES_CAROUSEL_INDEX.forEach((box) => {
  //CREACIÓN <a>
  const BRAND_ANCHOR = document.createElement('a');
  BRAND_ANCHOR.title = "";
  BRAND_ANCHOR.target = "_blank";
  //INTRODUCIMOS A DENTRO DE CADA CAJA
  box.appendChild(BRAND_ANCHOR);

  //CREACIÓN <img>
  const BRAND_LOGO = document.createElement('img');
  BRAND_LOGO.alt = "";
  BRAND_LOGO.draggable = false;
  BRAND_LOGO.classList.add("ampliable");
  //INTRODUCIMOS IMG DENTRO DE A
  BRAND_ANCHOR.appendChild(BRAND_LOGO);
});

//Crear un punto por cada logo
BRANDS.forEach(() => {
  const DOT = document.createElement('div');
  DOT.classList.add('carousel_dot', 'inactiveDot');
  DOTS_CONTAINER_CAROUSEL_INDEX.appendChild(DOT);
});

//Función para actualizar el carrusel
function updateLOGOcarousel() {
  //cálculo del índice de las cajas
  const prevIndex = (currentIndex_carousel_logos - 1 + BRANDS.length) % BRANDS.length;

  const nextIndex = (currentIndex_carousel_logos + 1) % BRANDS.length;

  BOXES_CAROUSEL_INDEX.forEach((caja, index) => {

    const LOGO_ANCHOR = caja.querySelector('a');
    const LOGO_IMG = caja.querySelector('img');

    if (index === 0) {
      LOGO_ANCHOR.href = BRANDS[prevIndex].anchor;
      LOGO_ANCHOR.title = "Enlace_a_" + BRANDS[prevIndex].brand
      LOGO_IMG.src = BRANDS[prevIndex].logo;
      LOGO_IMG.alt = BRANDS[prevIndex].brand + "_logo";
    } else if (index === 1) {
      LOGO_ANCHOR.href = BRANDS[currentIndex_carousel_logos].anchor;
      LOGO_ANCHOR.title = "Enlace_a_" + BRANDS[currentIndex_carousel_logos].brand
      LOGO_IMG.src = BRANDS[currentIndex_carousel_logos].logo;
      LOGO_IMG.alt = BRANDS[currentIndex_carousel_logos].brand + "_logo";
    } else if (index === 2) {
      LOGO_ANCHOR.href = BRANDS[nextIndex].anchor;
      LOGO_ANCHOR.title = "Enlace_a_" + BRANDS[nextIndex].brand
      LOGO_IMG.src = BRANDS[nextIndex].logo;
      LOGO_IMG.alt = BRANDS[nextIndex].brand + "_logo";
    };

  });

  //Actualizar DOTS
  const DOTS = document.querySelectorAll(".carousel_dot");

  DOTS.forEach((dot, index) => {
    if (index === currentIndex_carousel_logos) {
      dot.classList.add('activeDot');
      dot.classList.remove('inactiveDot');
    } else {
      dot.classList.remove('activeDot');
      dot.classList.add('inactiveDot');
    };
  });

};

//EVENTOS CARRUSEL BOTONES
PREV_BTN_CAROUSEL_INDEX.addEventListener('click', () => {
  currentIndex_carousel_logos = (currentIndex_carousel_logos - 1 + BRANDS.length) % BRANDS.length;
  updateLOGOcarousel();
});

NEXT_BTN_CAROUSEL_INDEX.addEventListener('click', () => {
  currentIndex_carousel_logos = (currentIndex_carousel_logos + 1) % BRANDS.length;
  updateLOGOcarousel();
});

updateLOGOcarousel();

/* AQUÍ EL EJEMPLO DE CÓMO LO HABÍA HECHO ANTES DE AGRUPAR TODA LA INFORMACIÓN EN UN SOLO ARRAY */
/*
  //Array para contener las imágenes
  const IMAGES_CAROUSEL_LOGOS = [
    '../assets/images/brands_logos/fiat-svgrepo-com.svg' ,
    '../assets/images/brands_logos/ford-svgrepo-com.svg' ,
    '../assets/images/brands_logos/honda-svgrepo-com.svg' ,
    '../assets/images/brands_logos/hyundai-svgrepo-com.svg' ,
    '../assets/images/brands_logos/jaguar-alt-svgrepo-com.svg' ,
    '../assets/images/brands_logos/jeep-alt-svgrepo-com.svg' ,
    '../assets/images/brands_logos/kia-svgrepo-com.svg' ,
    '../assets/images/brands_logos/lamborghini-alt-svgrepo-com.svg' ,
    '../assets/images/brands_logos/lotus-alt-svgrepo-com.svg' ,
    '../assets/images/brands_logos/maserati-svgrepo-com.svg' ,
    '../assets/images/brands_logos/mazda-svgrepo-com.svg' ,
    '../assets/images/brands_logos/mclaren-alt-svgrepo-com.svg' ,
    '../assets/images/brands_logos/mercedes-benz-svgrepo-com.svg' ,
    '../assets/images/brands_logos/mitsubishi-svgrepo-com.svg' ,
    '../assets/images/brands_logos/nissan-svgrepo-com.svg' ,
    '../assets/images/brands_logos/opel-svgrepo-com.svg' ,
    '../assets/images/brands_logos/peugeot-svgrepo-com.svg' ,
    '../assets/images/brands_logos/porsche-svgrepo-com.svg' ,
    '../assets/images/brands_logos/renault-alt-svgrepo-com.svg' ,
    '../assets/images/brands_logos/subaru-svgrepo-com.svg' ,
    '../assets/images/brands_logos/suzuki-svgrepo-com.svg' ,
    '../assets/images/brands_logos/toyota-svgrepo-com.svg' ,
    '../assets/images/brands_logos/volkswagen-svgrepo-com.svg' ,
    '../assets/images/brands_logos/volvo-svgrepo-com.svg' ,
  ];
  //Array para guardar los enlaces de cada marca
  const BRANDS_URL = [
    'https://www.fiat.com' ,
    'https://www.ford.com' ,
    'https://www.honda.com' ,
    'https://www.hyundai.com/es/es.html' ,
    'https://www.jaguar.com/index.html?hide_msb=true' ,
    'https://www.jeep.es/?campaignid=CN~JEEP-ES-HAGAKURE-BRAND-VARIACIONES-X-VN-ONGOING-SDF-X-X-X-VA_MK~ES_MB~JEEP_CAT~VN_PR~RANGE_CX~OnGoing_CH~SEA-SDF_AU~S_GL~TF_PK~LEAD_EN~RANGE_FF~VARIACIONES_ID~GLB0003LGN_FS~Local&source=GOOGLE&gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_id=336708405&utm_campaign=336708405&utm_term=10088611&utm_content=336708405_20476395765&gad_source=1&gad_campaignid=336708405&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5AIG-NDe4VH_591J0XTPgk4MpMOxrixviE4bdN-Qxum4EVx5tSULYhoCPwUQAvD_BwE' ,
    'https://www.kia.com/es/' ,
    'https://www.lamborghini.com/es-en' ,
    'https://www.lotuscars.com/en-GB' ,
    'https://www.maserati.com/es/es/shopping-tools/wtl-grecale?campaignName=7017T000000UZZC&wtl_source=7017T000000UZZC&utm_medium=paidsearch&utm_source=google&utmcampaign=eu_digit_grgtpmax_lead_es_2024_es_gr_hyb_pmax&gclsrc=aw.ds&gad_source=1&gad_campaignid=20750986734&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5FvuMhq3nwxVZy1tuBsEJ5yoG--vyuGX5xsWWcZZ0sTSSZgRxV6TqhoCvAkQAvD_BwE' ,
    'https://www.mazda.com/en/' ,
    'https://cars.mclaren.com/es-es' ,
    'https://www.mercedes-benz.es/?gagcmid=GA_20716971962_155060255716_679585325237&utm_source=GOOGLE&utm_medium=cpc&utm_campaign=C.B.SEA.MB_NA_LA_ES_PUREBRAND_HYS202412996271&gclsrc=aw.ds&gad_source=1&gad_campaignid=20716971962&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5Ck55wrd4GM_U-z_yIEvBLa_Coa0RAKCdT4OWQ_JVyPzmp2N8G1URRoCNvMQAvD_BwE' ,
    'https://www.mitsubishi-motors.es' ,
    'https://www.nissan.es' ,
    'https://www.opel.es' ,
    'https://www.peugeot.es/?srsltid=AfmBOorqS8kKNXEDJfFmChlPq_RzvFboD0MZbypJ2pPK9q7f3K4OUQCv' ,
    'https://www.porsche.com/spain/' ,
    'https://www.renault.es/?CAMPAIGN=es-es-r-l-def-brand-all_products-na-go-classic-marca_variaciones-omd202412996482&ORIGIN=paid_search&utm_source=google&utm_source_platform=SA360&utm_medium=cpc&utm_campaign=es-es-r-l-def-brand-all_products-na-go-classic-marca_variaciones-omd202412996482&utm_id=10380308560&gclsrc=aw.ds&&&ppc_keyword=renault%20online&gad_source=1&gad_campaignid=10380308560&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5JTU2W0AuUliQE_8Jgoj24EtvQ9ctARIbwI1GWhTWdg6MXiY-F9J7xoCJOoQAvD_BwE' ,
    'https://www.subaru.com/es/index.html' ,
    'https://www.globalsuzuki.com' ,
    'https://www.toyota.com' ,
    'https://www.vw.com/es/en.html' ,
    'https://www.volvo.com/en/' ,
  ];
  //Variable control index array
  let currentIndex_carousel_logos = 0;
  //Crear elementos A y IMG dentro de cada caja
  BOXES_CAROUSEL_INDEX.forEach( (box) => {
    //CREACIÓN <a>
    const BRAND_ANCHOR = document.createElement ('a');
    BRAND_ANCHOR.title = "Enlace_sitio_web_externo";
    BRAND_ANCHOR.target = "_blank";
    //INTRODUCIMOS A DENTRO DE CADA CAJA
    box.appendChild(BRAND_ANCHOR);

    //CREACIÓN <img>
    const BRAND_LOGO = document.createElement ('img');
    BRAND_LOGO.alt = "Carousel_logo_brand";
    BRAND_LOGO.draggable = false;
    //INTRODUCIMOS IMG DENTRO DE A
    BRAND_ANCHOR.appendChild(BRAND_LOGO);
  } );
  //Crear un punto por cada logo
  IMAGES_CAROUSEL_LOGOS.forEach( () => {
    const DOT = document.createElement ('div');
    DOT.classList.add('carousel_dot' , 'inactiveDot');
    DOTS_CONTAINER_CAROUSEL_INDEX.appendChild(DOT);
  } );
  //Función para actualizar el carrusel
  function updateLOGOcarousel () {
    //cálculo del índice de las cajas
    const prevIndex = ( currentIndex_carousel_logos -1 + IMAGES_CAROUSEL_LOGOS.length ) % IMAGES_CAROUSEL_LOGOS.length;

    const nextIndex = ( currentIndex_carousel_logos +1 ) % IMAGES_CAROUSEL_LOGOS.length;

    BOXES_CAROUSEL_INDEX.forEach ( (caja , index) => {

      const LOGO_ANCHOR = caja.querySelector('a');
      const LOGO_IMG = caja.querySelector('img');

      if (index === 0) {
        LOGO_ANCHOR.href = BRANDS_URL[prevIndex];
        LOGO_IMG.src = IMAGES_CAROUSEL_LOGOS[prevIndex];
      } else if (index === 1) {
        LOGO_ANCHOR.href = BRANDS_URL[currentIndex_carousel_logos];
        LOGO_IMG.src = IMAGES_CAROUSEL_LOGOS[currentIndex_carousel_logos];
      } else if (index === 2) {
        LOGO_ANCHOR.href = BRANDS_URL[nextIndex];
        LOGO_IMG.src = IMAGES_CAROUSEL_LOGOS[nextIndex];
      };

    } );

    //Actualizar DOTS
    const DOTS = document.querySelectorAll (".carousel_dot");

    DOTS.forEach ( (dot, index) => {
      if (index === currentIndex_carousel_logos) {
        dot.classList.add('activeDot');
        dot.classList.remove('inactiveDot');
      } else {
        dot.classList.remove('activeDot');
        dot.classList.add('inactiveDot');
      };
    } );

  };
  //EVENTOS CARRUSEL BOTONES
  PREV_BTN_CAROUSEL_INDEX.addEventListener('click' , () => {
    currentIndex_carousel_logos = (currentIndex_carousel_logos -1 + IMAGES_CAROUSEL_LOGOS.length) % IMAGES_CAROUSEL_LOGOS.length;
    updateLOGOcarousel();
  });
  NEXT_BTN_CAROUSEL_INDEX.addEventListener('click' , () => {
    currentIndex_carousel_logos = (currentIndex_carousel_logos +1) % IMAGES_CAROUSEL_LOGOS.length;
    updateLOGOcarousel();
  });
  updateLOGOcarousel();
*/
/*
INDEX LOGO CAROUSEL SECTION 4 FIN
INDEX LOGO CAROUSEL SECTION 4 FIN
INDEX LOGO CAROUSEL SECTION 4 FIN
INDEX LOGO CAROUSEL SECTION 4 FIN
INDEX LOGO CAROUSEL SECTION 4 FIN
*/
