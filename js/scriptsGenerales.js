/*
NAVBAR NAVBAR NAVBAR INICIO INICIO INICIO
NAVBAR NAVBAR NAVBAR INICIO INICIO INICIO
NAVBAR NAVBAR NAVBAR INICIO INICIO INICIO
NAVBAR NAVBAR NAVBAR INICIO INICIO INICIO
NAVBAR NAVBAR NAVBAR INICIO INICIO INICIO
*/

//Recuperamos el elemento navbar
const NAVBAR = document.querySelector("#navbar");

//Función para comportamiento ante scroll
function scrollNavbar () {
  if ( window.scrollY > 50 ) {
    NAVBAR.classList.add('nav-scroll'); /*Definir clase en css*/
  } else {
    NAVBAR.classList.remove('nav-scroll');
  };
};


//Evento que activa esta función
window.addEventListener('scroll' , scrollNavbar);

/*
NAVBAR NAVBAR NAVBAR FIN FIN FIN
NAVBAR NAVBAR NAVBAR FIN FIN FIN
NAVBAR NAVBAR NAVBAR FIN FIN FIN
NAVBAR NAVBAR NAVBAR FIN FIN FIN
NAVBAR NAVBAR NAVBAR FIN FIN FIN
*/



/*
CLASE COCHE CLASE COCHE CLASE COCHE INICIO INICIO INICIO
CLASE COCHE CLASE COCHE CLASE COCHE INICIO INICIO INICIO
CLASE COCHE CLASE COCHE CLASE COCHE INICIO INICIO INICIO
CLASE COCHE CLASE COCHE CLASE COCHE INICIO INICIO INICIO
CLASE COCHE CLASE COCHE CLASE COCHE INICIO INICIO INICIO
*/

//CREACIÓN DE LA CLASE COCHE PARA GUARDAR LOS COCHES CÓMODAMENTE A POSTERIORI
class Coche {
  //Función constructora de la clase COCHE
  constructor ( marca , color , tipo , imagen , otros , precio ) {
    this.marca = marca;
    this.color = color;
    this.tipo = tipo;
    this.imagen = imagen;
    this.otros = otros;
    this.precio = precio;
  };

  getMarca(){return this.marca};
  getColor(){return this.color};
  getTipo(){return this.tipo};
  getImagen(){return this.imagen};
  getOtros(){return this.otros};
  getPrecio(){return this.precio};

  setMarca(marca){this.marca = marca};
  setColor(color){this.color = color};
  setTipo(tipo){this.tipo = tipo};
  setImagen(imagen){this.imagen = imagen};
  setOtros(otros){this.otros = otros};
  setPrecio(precio){this.precio = precio};
};

/*
CLASE COCHE CLASE COCHE CLASE COCHE FIN FIN FIN
CLASE COCHE CLASE COCHE CLASE COCHE FIN FIN FIN
CLASE COCHE CLASE COCHE CLASE COCHE FIN FIN FIN
CLASE COCHE CLASE COCHE CLASE COCHE FIN FIN FIN
CLASE COCHE CLASE COCHE CLASE COCHE FIN FIN FIN
*/



/*
COCHES COCHES COCHES COCHES COCHES COCHES
COCHES COCHES COCHES COCHES COCHES COCHES
COCHES COCHES COCHES COCHES COCHES COCHES
COCHES COCHES COCHES COCHES COCHES COCHES
*/

//Coche ( marca , color , tipo , imagen , otros , precio )
let coches = [
  new Coche ( "Audi" , "Azul" , "Sedán" , "../assets/images/products/producto1_Sedan_Audi _Azul_1919_1280.jpg" , {"Puertas":"5","Motor":"3 Cilindros","Potencia":"170 cv"} , 12000 ) ,
  new Coche ( "Alpha Romeo" , "Rojo" , "Deportivo" , "../assets/images/products/producto2_Deportivo_AlphaRomeo_Rojo_1920_1280.jpg" ,{"Puertas":"3","Motor":"4 Cilindros","Potencia":"190 cv"} , 9999 ) ,
  new Coche ( "Dodge" , "Rojo - Blanco" , "Deportivo" , "../assets/images/products/producto3_Deportivo_Dodge_Rojo_1920_1280.jpg" ,{"Puertas":"3","Motor":"4 Cilindros","Potencia":"222 cv"} , 11399 ) ,
  new Coche ( "Chevrolet" , "Rojo - Nacarado" , "Clásico" , "../assets/images/products/producto4_Clasico_Chevrolet_Rojo_1920_1280.jpg" , {"Puertas":"3","Motor":"4 Cilindros","Potencia":"124 cv"} , 8799 )
];

/*
COCHES COCHES COCHES COCHES COCHES COCHES
COCHES COCHES COCHES COCHES COCHES COCHES
COCHES COCHES COCHES COCHES COCHES COCHES
COCHES COCHES COCHES COCHES COCHES COCHES
*/


/* EXPORTACIONES */
export { scrollNavbar , coches };