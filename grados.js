//Definir las variables

let gradCelcius = 0;
let gradFarh = 0;

//Ingresar la catidad de grados a convertir

gradCelcius = prompt("ingresa la cantidad de grados celcius a convertir");

//condicional

if(gradCelcius > 0) {
    
    gradFahr = ( 9 * parseInt(gradCelcius)) / 5 + 32;
    console.log(gradCelcius, "°C a grados Fahrenheit es: ");
    console.log(gradFahr, "grados Fahrenheit");
} else {
    alert(" Ingresa un número válido");

}
