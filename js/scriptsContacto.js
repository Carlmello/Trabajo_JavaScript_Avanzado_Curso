/* IMPORTACIONES */
import{scrollNavbar} from "./scriptsGenerales.js";
/*IMPORTACIONES*/

//Llamada a las funciones importadas
scrollNavbar();


/*
información necesaria: 

divs contenedores
id="ubicacion_Mapa"
id="ubicacion_Ruta"

coordernadas: 40.303416, -4.124478
*/

/*
MAPA 1 MAPA 1 MAPA 1 MAPA 1 MAPA 1
MAPA 1 MAPA 1 MAPA 1 MAPA 1 MAPA 1
MAPA 1 MAPA 1 MAPA 1 MAPA 1 MAPA 1
*/

//Dentro del primer paréntesis ponemos el ID de la caja contenedora del mapa
let mapa_1 = L.map('ubicacion_Mapa').setView([40.303416,-4.124478],15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:"Ubicación con openStreetMap"}).addTo(mapa_1);

//Preparación de icono para popups y marcadores, utilizando los métodos integrados de la librería de leaflet
let icono_1 = L.icon({
  iconUrl:'../assets/images/logotipo.png',
  iconSize:[80,50],//[ancho,alto]
  iconAnchor:[0,0],
  popupAnchor:[0,0]
});

let popup_1 = L.popup().setLatLng([40.303416,-4.124478]).setContent('<a href="../index.html" title="enlace_a_inicio" target="_blank">Cuatrocoches.com</a><br><p>M-530, Villamanta, Comunidad de Madrid<br>CP: 28610<br>España</p><p>Tfno: +99 999 999 999</p>');

L.marker([40.303416,-4.124478],{icon:icono_1}).bindPopup(popup_1).openPopup().addTo(mapa_1);


/*
MAPA 2 MAPA 2 MAPA 2 MAPA 2 MAPA 2
MAPA 2 MAPA 2 MAPA 2 MAPA 2 MAPA 2
MAPA 2 MAPA 2 MAPA 2 MAPA 2 MAPA 2
*/

//Preparación de las opciones de la geolocalización
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

//Geolocalización del usuario
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    success,
    error,
    options
  );
} else {
  alert ("Geolocalización no disponible en este momento")
};

//Desarrollo función success

function success (position) {
  let latitud = position.coords.latitude;
  let longitud = position.coords.longitude;

  let mapa_2 = L.map('ubicacion_Ruta',{
    center:[latitud,longitud],
    zoom: 5
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:"Ruta con openStreetMap"}).addTo(mapa_2);

  L.Routing.control({
    waypoints:[
      //inicio
      L.latLng(latitud,longitud),
      //destino
      L.latLng(40.303416, -4.124478)
    ],

    language:'es',

    //MARCAS DE RUTA
    createMarker:function(i,wp,nWps) {
      switch(i){
        //inicio de la ruta
        case 0:
          return L.marker(wp.latLng,{draggable:true}).bindPopup("Inicio de ruta");

        //final de la ruta  
        case nWps-1:
          return L.marker(wp.latLng,{icon:icono_1,draggable:true}).bindPopup("Destino");

        //posibles puntos intermedios
        default:
          return L.marker(wp.latLng,{draggable:true}).bindPopup("Punto intermedio");
      }
    }
  }).addTo(mapa_2);
};

//función error
function error(){
  alert("Servicio routing no disponible. Puedes intentarlo en otro navegador");
  //mapa por defecto en caso de problemas con la ruta
  let mapa_3 = L.map('ubicacion_Ruta',{
    center:[40.303416, -4.124478],
    zoom:10
  });L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:"Ubicación con openStreetMap"}).addTo(mapa_3);
};