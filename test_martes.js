// Imprime "undefined" pero no marca error, si fuera con let/const, marca error.
console.log(msj);
var msj = "Hoisting!!";

// Si se usa var para declarar i, i después puede ser accesida desde global:
// Lo mismo pasa con bloques if (y loops), para var estos bloques no tienen scope.
for (var i = 0; i < 5; i++) {
    console.log("i: ", i);
}
console.log("final: ", i);

if (true) {
    var dentro = "dentro";
}
console.log(dentro);

// var sí restrinqe a scope de bloque en los demás bloques
function Test(algo) {
    var doble = 2;
    return doble;
}
// La siguiente línea arroja error:
//console.log(doble);

// var puede usarse para declarar varias veces la misma variable:
// Lo siguiente no genera un error:
var repetida = "Un texto";
var repetida = "Otro texto";

// Let y const funcionan de forma más "correcta", también toman en cuneta loops e ifs
// Let y const, pueden declararse con la misma variable en scopes distintos y anidados,
// sin que se genere algún error y pudiendo tener valores distintos en cada scope.
let name = "Ironhacker";
if (true) {
  let name = "Ted";
  console.log(`Name inside if statement: ${name}`);
}
console.log(`Name outside if statement: ${name}`);
// Name inside if statement: Ted
// Name outside if statement: Ironhacker


// var respeta el scope y puede tener variables simultáneas con valores independientes
var anyvar = "AnyVar";
function Anyvar(a) {
  var anyvar = "anyvar";
  console.log(`Name inside if statement: ${anyvar}`);
}
Anyvar();
console.log(`Name outside if statement: ${anyvar}`);

// const tambíen permite manejar variables con el mimso nombre simultáneamente en
// diferentes scopes
const somevar = "SomeVar";
function Somevar(a) {
  const somevar = "somevar";
  console.log(`Name inside if statement: ${somevar}`);
}
Somevar();
console.log(`Name outside if statement: ${somevar}`);

// ++++ LEARNING:  ES6 Advanced

// En el siguiente ejemplo, this se refiere al objeto window en lugar de a la
// instancia de la clase.
UnFuncionConParametro(function() {
    console.log(this.coun);
})