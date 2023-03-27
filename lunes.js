// son dos personas que saludan
const personahola ={ f:function(){console.log('hola soy una persona')}};
personahola.f();

const personadios ={ f:function(){console.log('adios soy una persona')}};
personadios.f();

// misma persona saluda
const persona = {
     a:function(){console.log('hola soy una persona')},

      b:function(){console.log('adios soy una persona')}
};
persona.a();
persona.b();

/// persona edad y nombre 
//declaracion 
function personadescribir (a,b){
    this.edad= a;
    this.nombre= b;}

/*nueva persna new es un constructor el a va vinculado a al 18 y el b al nombre, 
si invertimos el nombre de sitio cambia el resultado*/
let manoli= new personadescribir (18,'Maria manuela');
//console log registra y pide los datos
console.log(manoli.edad);
console.log(manoli.nombre);


// nueva funcion se tiene que poner dentro de la anterior para que funcione 
function saludar(){
let resultado="hola,soy una persona" ;console.log(resultado);

};
function perona(){this.saludo=saludar}

console.log(manoli.saludo)
/////////////////poner hola soy antonio en la misma linea



function persona(edad, nombre) {
    this.edad = edad;
    this.nombre = nombre;
  }
  let antonio = new persona(21, "Antonio");
  console.log(antonio.nombre);
  console.log(antonio.edad);
  console.log("Hola soy" + " "+  antonio.nombre);

//////FORMA 2 DE HACERLO
function persona(edad, nombre) {
    this.edad = edad;
    this.nombre = nombre;
    this.saludo= saludar;
  }
////ejercicio141

const sumar = (a,b) => { return a + b; };
const restar = (a,b) => { return a - b; };
const multiplicar = (a,b) => { return a * b; };
const dividir = (a,b) => { return a / b; };
console.log(sumar(6,8));
console.log(restar(9,2));
console.log(multiplicar(2,2));
console.log(dividir(9,3));