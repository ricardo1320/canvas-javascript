//Traer el contexto del formulario
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var boton_clear = document.getElementById("botoncito_limpiar");

//Traer el contexto de canvas
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

//Añadir al boton el evento del click
boton.addEventListener("click", dibujoPorClick);
boton_clear.addEventListener("click", clearLienzo);

//Funciones dibujar linea y cuadrado
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarCuadrado(color, xinicial, yinicial, xfinal, yfinal){
  dibujarLinea(color,xinicial,yinicial,xfinal,yinicial);
  dibujarLinea(color,xfinal,yinicial,xfinal,yfinal);
  dibujarLinea(color,xfinal,yfinal,xinicial,yfinal);
  dibujarLinea(color,xinicial,yfinal,xinicial,yinicial);
}

//Funcion a ejecutar al evento de click en nuestros botones
function dibujoPorClick(){
  //Traer el numero de lineas de la caja de texto del formulario
  var num_lineas = parseInt(texto.value);

  //Fondo del lienzo de color:
  lienzo.fillStyle = "black";
  lienzo.fillRect(0, 0, d.width, d.height);

  //Dibujar lineas onduladas
  var l;
  var xi,xf,yi,yf;
  var espacio = ancho / num_lineas;
  for(l=0; l<num_lineas; l++){
    yi = espacio * l;
    xf = espacio * (l+1);
    dibujarLinea("aqua",0,yi,xf,300);
    xi = yi;
    yf = xf;
    dibujarLinea("#AAF",xi,0,300,yf);
  }

  //Dibujar un marco
  dibujarCuadrado("fuchsia",1,1,299,299);

  //Dibujar cuadrados al centro
  var p_inicial = 90;
  var p_final = 210;

  if(num_lineas > 25) num_lineas = 25;

  for(l=0; l<num_lineas; l++){
      dibujarCuadrado("yellow",p_inicial,p_inicial,p_final,p_final);
      p_inicial = p_inicial + 5;
      p_final = p_final - 5;
  }
}

function clearLienzo(){
  location.reload();
}
