/* IMPORTACIONES */
import { scrollNavbar , coches } from "./scriptsGenerales.js";
/*IMPORTACIONES*/

//Llamada a las funciones importadas
scrollNavbar();


//RECUPERACIÓN DE LOS ELEMENTOS HTML QUE VAMOS A USAR
//inputs
const FORMULARIO = document.querySelector('#formulario');
const NOMBRE_INPUT = document.querySelector('#nombre_input');
const APELLIDO_INPUT = document.querySelector('#apell_input');
const TELEFONO_INPUT = document.querySelector('#tfno_input');
const EMAIL_INPUT = document.querySelector('#email_input');
const TOTAL_INPUT = document.querySelector('#total_value');
const ERROR_SPAN = document.querySelectorAll('.errorSpan');
const CHECK_POLITICAS = document.querySelector('#politicas-checkbox');
//select
const PRODUCTOS_SELECT = document.querySelector('#productos-select');
//botones
const ADD_BTN = document.querySelector('#add_to_chart');
const COMPRAR_BTN = document.querySelector('#comprar_btn');
//divs
const CARRITO_DIV = document.querySelector('#carrito');


/*
DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES
DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES
DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES
DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES DATOS PERSONALES
*/

//Aquí voy a controlar la parte de validación y envío de los datos del formulario
function validacionNOMBRE(){
  //lo explicaré una vez, porque luego es repetir el proceso para cada input
  //recupero el valor que se está introduciendo en el input, y creo una constante con la expresión regular para, en este caso, un nombre de entre 1 y 15 caracteres entre los que se incluyen todas las letras del abecedario español con espacios, mayúsculas y minúsculas
  const NOMBRE = NOMBRE_INPUT.value;
  const NOMBRE_PATTERN = /^[A-ZÑÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÜ a-zñáéíóúàèìòùâêîôûü]{1,15}$/;

  //condicionamos que se cumplan dos condiciones, siendo TEST el método necesario para comprobar la espresión regular. también controlaré que el input vuelva a ser azul cuando esté vacío
  if (NOMBRE == "") {
    
    NOMBRE_INPUT.classList.remove('valido');
    NOMBRE_INPUT.classList.remove('novalido');
    NOMBRE_INPUT.classList.add('empty');
    ERROR_SPAN[0].textContent = "";

  } else if ( NOMBRE.length >= 2 && NOMBRE_PATTERN.test(NOMBRE) ) {

    //acciones a realizar si se cumple la condición
    NOMBRE_INPUT.classList.remove('empty');
    NOMBRE_INPUT.classList.remove('novalido');
    NOMBRE_INPUT.classList.add('valido');
    ERROR_SPAN[0].textContent = "";

  } else {

    //acciones a realizar si NO se cumple la condición
    NOMBRE_INPUT.classList.remove('empty');
    NOMBRE_INPUT.classList.remove('valido');
    NOMBRE_INPUT.classList.add('novalido');
    //incluimos mensaje de error en el span CORRESPONDIENTE
    ERROR_SPAN[0].textContent = "Nombre no válido";
  };//fin IF

};

function validacionAPELLIDO(){
  const APELLIDO = APELLIDO_INPUT.value;
  const APELLIDO_PATTERN = /^[A-ZÑÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÜ a-zñáéíóúàèìòùâêîôûü]{1,40}$/;
  if (APELLIDO == "") {
    APELLIDO_INPUT.classList.remove('valido');
    APELLIDO_INPUT.classList.remove('novalido');
    APELLIDO_INPUT.classList.add('empty');
    ERROR_SPAN[1].textContent = "";
  } else if ( APELLIDO.length >= 2 && APELLIDO_PATTERN.test(APELLIDO) ) {
    APELLIDO_INPUT.classList.remove('empty');
    APELLIDO_INPUT.classList.remove('novalido');
    APELLIDO_INPUT.classList.add('valido');
    ERROR_SPAN[1].textContent = "";
  } else {
    APELLIDO_INPUT.classList.remove('empty');
    APELLIDO_INPUT.classList.remove('valido');
    APELLIDO_INPUT.classList.add('novalido');
    ERROR_SPAN[1].textContent = "Apellido no válido";
  };
};

function validacionTELEFONO(){
  const TELEFONO = TELEFONO_INPUT.value;
  const TELEFONO_PATTERN = /^\d{9}$/;
  if (TELEFONO == "") {
    TELEFONO_INPUT.classList.remove('valido');
    TELEFONO_INPUT.classList.remove('novalido');
    TELEFONO_INPUT.classList.add('empty');
    ERROR_SPAN[2].textContent = "";
  } else if ( TELEFONO.length >= 2 && TELEFONO_PATTERN.test(TELEFONO) ) {
    TELEFONO_INPUT.classList.remove('empty');
    TELEFONO_INPUT.classList.remove('novalido');
    TELEFONO_INPUT.classList.add('valido');
    ERROR_SPAN[2].textContent = "";
  } else {
    TELEFONO_INPUT.classList.remove('empty');
    TELEFONO_INPUT.classList.remove('valido');
    TELEFONO_INPUT.classList.add('novalido');
    ERROR_SPAN[2].textContent = "Teléfono no válido";
  };
};

function validacionEMAIL(){
  const EMAIL = EMAIL_INPUT.value;
  const EMAIL_PATTERN = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  if (EMAIL == "") {
    EMAIL_INPUT.classList.remove('valido');
    EMAIL_INPUT.classList.remove('novalido');
    EMAIL_INPUT.classList.add('empty');
    ERROR_SPAN[3].textContent = "";
  } else if ( EMAIL.length >= 2 && EMAIL_PATTERN.test(EMAIL) ) {
    EMAIL_INPUT.classList.remove('empty');
    EMAIL_INPUT.classList.remove('novalido');
    EMAIL_INPUT.classList.add('valido');
    ERROR_SPAN[3].textContent = "";
  } else {
    EMAIL_INPUT.classList.remove('empty');
    EMAIL_INPUT.classList.remove('valido');
    EMAIL_INPUT.classList.add('novalido');
    ERROR_SPAN[3].textContent = "E-mail no válido";
  };
};

//EVENTOS PARA CONTROLAR DE MANERA DINÁMICA LA VALIDACIÓN DEL FORMULARIO
NOMBRE_INPUT.addEventListener('input' , validacionNOMBRE);
APELLIDO_INPUT.addEventListener('input' , validacionAPELLIDO);
TELEFONO_INPUT.addEventListener('input' , validacionTELEFONO);
EMAIL_INPUT.addEventListener('input' , validacionEMAIL);


/*
CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS
CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS
CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS
CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS CARGAR PRODUCTOS
*/

//recorremos el array de coches
for ( let i = 0 ; i < coches.length ; i++ ) {

  //recuperamos la información necesaria para 
  let nombre_vehiculo = coches[i].marca;
  let precio_vehiculo = coches[i].precio;
  
  //creación de elemento OPTION por cada producto disponible, con atributo VALUE y el nombre del vehiculo en el placeholder
  let OPCION = document.createElement("option");
  OPCION.setAttribute("value",precio_vehiculo);
  OPCION.setAttribute("label",nombre_vehiculo + " - " + precio_vehiculo + " €");//este atributo de la etiqueta OPTION nos ayudará a recuperar la información del producto en el evento siguiente
  //OPCION.innerHTML = `${nombre_vehiculo}`; //esto ya no es necesario gracias al descubrimiento del atributo label en la línea de código anterior

  //integración del elemento OPTION creado, en el select
  PRODUCTOS_SELECT.appendChild(OPCION);
};


/*
COMPRA COMPRA COMPRA COMPRA COMPRA
COMPRA COMPRA COMPRA COMPRA COMPRA
COMPRA COMPRA COMPRA COMPRA COMPRA
COMPRA COMPRA COMPRA COMPRA COMPRA
*/

//ARRAY PARA ALMACENAR PRODUCTOS (CARRITO)
let carrito = [];

//EVENTO PARA AGREGAR AL CARRITO
ADD_BTN.addEventListener('click' , () => {

  //recuperamos los datos de la selección del cliente
  const SELECCION = PRODUCTOS_SELECT.options[PRODUCTOS_SELECT.selectedIndex];
  const [SELECCION_NOMBRE,] = SELECCION.label.split("-");//esto es para que no se muestre dos veces el coste del vehículo
  const SELECCION_VALUE = SELECCION.value;

  //aviso en caso de que no se haya seleccionado nada
  if(!SELECCION_VALUE) {
    alert('No se detecta selección válida de producto');
    return;
  };

  //aseguramos que el precio es un número válido
  const PRECIO = parseFloat(SELECCION_VALUE);

  //agregamos el producto al carrito
  carrito.push({SELECCION_NOMBRE,PRECIO});

  //llamamos a la función que actualiza el carrito, aún por definir
  actualizarCarrito();

});//fin evento ADD_BTN

//desarrollo de función actualizarCarrito
function actualizarCarrito(){

  if ( carrito.length === 0 ) {
    CARRITO_DIV.classList.remove("carrito");
    CARRITO_DIV.classList.add("carritoEMPTY");
  } else {
    CARRITO_DIV.classList.remove("carritoEMPTY");
    CARRITO_DIV.classList.add("carrito");
  };

  //primero limpiamos el contenido previo, si lo hubiere
  CARRITO_DIV.innerHTML = "";
  let presupuestoTOTAL = 0;

  //mostramos los productos
  carrito.forEach((producto , index) => {
    presupuestoTOTAL += producto.PRECIO;

    //generar DIV por cada producto
    const DIV_INTERNO_CARRITO = document.createElement("div");
    DIV_INTERNO_CARRITO.classList.add('display_interno_carrito');

    //definición del contenido de estos nuevos DIV
    DIV_INTERNO_CARRITO.innerHTML = `
      ${producto.SELECCION_NOMBRE} - ${producto.PRECIO.toFixed(2)}<br>
      <button class="delete-btn" data-index="${index}">Eliminar</button>
    `

    //integración del DIV creado en el contenedor
    CARRITO_DIV.appendChild(DIV_INTERNO_CARRITO);

  });//fin carrito.forEach

  //eliminación de producto
  document.querySelectorAll(".delete-btn").forEach((boton)=>{

    boton.addEventListener('click' , (e) => {

      //recuperación del elemento a borrar
      const INDEX = e.target.dataset.index;
      eliminarPRODUCTO(INDEX);//más tarde definiré esta función

    });//fin evento boton

  });//fin deleteBTN.forEach

  //llamada a la función que muestra el total en pantalla, para actualizar el precio de forma dinámica
  actualizarPresupuestoFinal();

};//fin de ADD_BTN.addEventListener('click',()=>{});

//voy a declarar la variable total de manera general para poder utilizarla en otras funciones

//función de cálculo de presupuesto final
function actualizarPresupuestoFinal(){

  //utilizo el método REDUCE, que crea la variable "suma", dentro de la cual se irá sumando el "item.precio", empezando desde "0" 
  let total = carrito.reduce( ( suma , item ) => suma + item.PRECIO , 0);

  //RECOGEMOS DATOS DE LOS EXTRAS SELECCIONADOS
  const EXTRAS = document.querySelectorAll(".checkbox-extra:checked");
  
  EXTRAS.forEach((checkbox) => {

    const [,precioEXTRA] = checkbox.value.split(':');
    if(carrito.length != 0){total += parseFloat(precioEXTRA)};

  });//fin de EXTRAS.forEach

  //COSTE ENTREGA
  //recuperamos el radiobutton seleccionado por el cliente, y el valor de su VALUE
  const ENTREGA_SELECCIONADA = document.querySelector('input[name="plazo"]:checked');
  const ENTREGA_VALOR = parseFloat(ENTREGA_SELECCIONADA.value);

  //hacemos el cálculo teniendo en mente que estoy hablando de un porcentaje
  if(carrito.length != 0){total = total + ( total * (ENTREGA_VALOR / 100) )};

  //MOSTRAMOS EL PRESUPUESTO FINAL EN PANTALLA EN EL ESPACIO RESERVADO PARA ELLO
  TOTAL_INPUT.value = total.toFixed(2) + " €";

};//fin actualizarPresupuestoFinal(){};


//función para eliminar artículo del carrito
function eliminarPRODUCTO(index){
  carrito.splice(index,1); //quito un elemento desde el índice
  actualizarCarrito();//y actualizo carrito
};


//FUNCIONALIDAD PARA ACTUALIZACIÓN DINÁMICA DEL PRESUPUESTO SEGÚN SELECCIONEMOS/DESELECCIONEMOS CHECKBOX Y RADIOS

//recuperación de los elementos con los que vamos a trabajar
const CHECKBOX_DYMANICS = document.querySelectorAll(".checkbox-extra");
const RADIOS_DYNAMICS = document.querySelectorAll('input[name="plazo"]');

CHECKBOX_DYMANICS.forEach((element) => {
  element.addEventListener('change',actualizarPresupuestoFinal);
});
RADIOS_DYNAMICS.forEach((element) => {
  element.addEventListener('change',actualizarPresupuestoFinal);
});

/*
CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT
CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT
CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT
CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT
CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT CONTROL_DE_SUBMIT
*/

//elementos: FORMULARIO / COMPRAR_BTN
FORMULARIO.addEventListener('submit',function(event){
  //lo primero es desactivar la opción por defecto del propio evento llamado (submit)
  event.preventDefault();

  //variables de control
  let datosOK = false;
  let carritoOK = false;
  let politicasOK = false;
  

  //COMPROBACIÓN DATOS COMPRADOR
  //llamamos a las funciones que verifican nuestros elementos obligatorios
  validacionNOMBRE();
  validacionAPELLIDO();
  validacionTELEFONO();
  validacionEMAIL();

  //nos podemos servir de que cada input contenga la clase 'valido'
  if(
    NOMBRE_INPUT.classList.contains('valido') &&
    APELLIDO_INPUT.classList.contains('valido') &&
    TELEFONO_INPUT.classList.contains('valido') &&
    EMAIL_INPUT.classList.contains('valido')
  ){
    datosOK = true;
  } else {
    datosOK = false;
  };

  //COMPROBACIÓN CARRITO VACÍO
  if(carrito.length != 0){
    carritoOK = true;
  }else{
    carritoOK = false;
  };

  //COMPROBACIÓN CHECKBOX
  if(CHECK_POLITICAS.checked){
    politicasOK = true;
  }else{
    politicasOK = false;
  };

  //ENVÍO
  if(!datosOK){
    alert("Asegúrese de haber introducido bien TODOS sus datos personales");
  }else if(!carritoOK){
    alert("El carrito está vacío");
  }else if(!politicasOK){
    alert("Asegúrese de haber aceptado las políticas de privacidad de la empresa");
  }else{
    //TODO OK. PROGRAMAMOS ENVÍO
    //AVISO A CLIENTE
    alert("SOLICITUD DE TRANSACCIÓN RECIBIDA. EL EQUIPO DE 'CUATROCOCHESPUNTOCOM S.I.U.' LE AGRADECE SU COMPRA. ESPERAMOS QUE LA DISFRUTE");
    FORMULARIO.submit();
    
    //RESETEAMOS TODO, AUNQUE CON EL MÉTODO POST DEL FORMULARIO YA NOS REDIRIGE A OTRA PÁGINA
    //NO OBSTANTE, CAMBIANDO EL MÉTODO A "get" PUEDO COMPROBAR QUE EL CÓDIGO QUE ESTÁ A CONTINUACIÓN FUNCIONA CORRECTAMENTE
    FORMULARIO.reset();
    NOMBRE_INPUT.classList.remove("valido");
    NOMBRE_INPUT.classList.add("empty");
    APELLIDO_INPUT.classList.remove("valido");
    APELLIDO_INPUT.classList.add("empty");
    TELEFONO_INPUT.classList.remove("valido");
    TELEFONO_INPUT.classList.add("empty");
    EMAIL_INPUT.classList.remove("valido");
    EMAIL_INPUT.classList.add("empty");
  };
});