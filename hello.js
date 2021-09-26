/*const sayHello = function (name){
  console.log("Hello, " + name);
}

sayHello("Dany");
sayHello("Mana");
sayHello("John");
*/

//Return vs console.log

const returnSayHello = function (name){
  return "Hi, " + name;

}
const greeting = returnSayHello ("Maya");
console.log(greeting);