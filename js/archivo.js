let Dicpadre={
};
//funcioncita

function mostrarMenu() {
    let opcion = prompt(
      "¿Qué información quieres ver?\n" +
      "1. Total de hombres con IMC >= 30\n" +
      "2. Total de mujeres con IMC >= 30\n" +
      "3. Promedio de edad\n" +
      "4. Total de hombres registrados\n" +
      "5. Total de mujeres registradas\n" +
      "6. Total de personas registradas\n" +
      "7. IMC más bajo registrado\n" +
      "8. Número de menores de edad registrados\n" +
      "9. Diccionario de personas registradas\n" +
      "0. Salir"
    );
}
//30 o mas sobrepeso
//el ejecutable
let totaldehombresimc=0;
let totaldehembrasimc=0;
let sumadetodaslasedades=0;
let promedioedad=0;
let Manes=0;
let Hembras=0;
let totalseresvivosdedospiernas=0;
let MASBAJOIMC = 1000000;
let MenoresRegistrados=0;
let imc;
let fin = "si";
do {
let identificador= prompt("Ingrese su cedula o numero de identificacion");
let nombres= prompt("ingrese su nombre");
let age=parseFloat(prompt("digite su edad"));
let gener=prompt("M para masculino o F para femenino").toUpperCase();
let altur=parseFloat(prompt("digite su altura en metros poniendo el respectivo punto; ejemplo: 1.73"));
let keigth=parseFloat(prompt("digite su peso en kilos"));
imc=keigth/(altur*altur);

Dicpadre[identificador] = {
    nombre: nombres,
    edad: age,
    genero: gener,
    IMC: imc
}
if (gener==="M" && imc>=30){
    totaldehombresimc=totaldehombresimc+1;
};
if (gener==="F" && imc>=30){
    totaldehembrasimc=totaldehembrasimc+1;
};
//Ojito
if (gener==="M"){
    Manes=Manes+1;
} else{
    Hembras=Hembras+1;
};
totalseresvivosdedospiernas=Manes+Hembras;
//Esta parte debe ir arriba
sumadetodaslasedades=sumadetodaslasedades+age;
//ojito
if (age<18){
    MenoresRegistrados= MenoresRegistrados+1;
};
if (imc<MASBAJOIMC) {
    MASBAJOIMC=imc;
};
promedioedad=sumadetodaslasedades/totalseresvivosdedospiernas;
do {
    mostrarMenu();
    opcion = prompt("Selecciona una opción:");

    switch (opcion) {
        case "1":
            console.log("Total de hombres con IMC mayor o igual a 30:", totaldehombresimc);
            alert(" Total de hombres con IMC mayor o igual a 30: " + totaldehombresimc);
            break;
        case "2":
            console.log("Total de mujeres con IMC mayor o igual a 30:", totaldehembrasimc);
            alert(" Total de mujeres con IMC mayor o igual a 30: " + totaldehembrasimc);
            break;
        case "3":
            console.log("Promedio de edad de los registrados:", promedioedad);
            alert(" Promedio de edad de los registrados: " + promedioedad);
            break;
        case "4":
            console.log("Número total de hombres registrados:", Manes);
            alert(" Número total de hombres registrados: " + Manes);
            break;
        case "5":
            console.log("Número total de mujeres registradas:", Hembras);
            alert(" Número total de mujeres registradas: " + Hembras);
            break;
        case "6":
            console.log("Total de personas registradas (seres vivos de dos piernas):", totalseresvivosdedospiernas);
            alert(" Total de personas registradas (seres vivos de dos piernas): " + totalseresvivosdedospiernas);
            break;
        case "7":
            console.log("IMC más bajo registrado:", MASBAJOIMC);
            alert(" IMC más bajo registrado: " + MASBAJOIMC);
            break;
        case "8":
            console.log("Número de menores de edad registrados:", MenoresRegistrados);
            alert(" Número de menores de edad registrados: " + MenoresRegistrados);
            break;
        case "9":
            console.log("Diccionario de personas registradas:", Dicpadre);
            alert(" Diccionario de personas registradas:\n" + JSON.stringify(Dicpadre, null, 2));
            break;
        case "0":
            alert(" Saliendo del menú. ¡Hasta pronto!");
            break;
        default:
            alert(" Opción no válida. Intenta de nuevo.");
    }

} while (opcion !== "0");

    
fin= prompt("desea agregar a alguien mas? /si /no").toLowerCase();
} while (fin==="si");


