document.addEventListener('DOMContentLoaded', () => {
    /*esto espera a que todo el contenido html esté completamente cargado antes de ejecutar cualquier código 
    javascript esto garantiza que los elementos del formulario estén disponibles para ser manipulados */

    const formulario = document.getElementById('registro');
    /*aquí se guarda en la constante formulario el elemento html cuyo id es registro*/

    formulario.addEventListener('submit', function(evento) {
        /* esto reconoce cuando el formulario es enviado y ejecuta una funcion*/
        evento.preventDefault();
        /*esto no se que hace pero segun ayuda por internet es necesario :P */

        /*aqui agarro las variables y las convierto en numero, pero no es necesario en mi caso ya que las entradas las puse
        directamente como number, en caso de que estas fuesen type text transforma a numero*/
        const peso = parseFloat(document.getElementById('peso').value);
        const estatura = parseFloat(document.getElementById('Estatura').value);
        
        /* la seccion o if de aqui abajo cumplen la funcion de verificar que los campos contengan un valor mayor a 0, esto no aplica para el campo de
        nombre asi que este puede funcionar tranquilamente sin tener que ingresar un nombre ni nada */
        if (isNaN(peso) || isNaN(estatura) || estatura <= 0) {
            alert('Por favor ingresa peso y estatura válidos.');
            return;
        }

        /*la operacion que se realiza para calcualr el imc*/
        const imc = peso / (estatura * estatura);
        /*lo que esto hace es buscar el id resultadoim para imprimir y con el text.content de abajo puedo editar que quiero que se imprima en 
        la const resultado, cha cha chau*/
        const resultado = document.getElementById('resultadoim');
        /* aqui abajo muestro el resultado de la operacion o imc, le podria agregar el .toFixed(2) para manejar la cantidad de decimales que
        quiero mostrar pero no quiero, se ve mas limpio sin decimales, ademas los valores que establecen sobrepeso y asi son enteros asi que
        no hace falta*/
        resultado.textContent = `Tu IMC es: ${imc.toFixed(0)}`;

        /* aquí cambiamos la imagen según el IMC calculado */
        const imagen = document.getElementById('imagen');

        /* Condición para IMC bajo peso */
        if (imc < 18.5) {
            resultado.textContent += ' - Estás en bajo peso.';
            imagen.src = 'https://tse1.mm.bing.net/th/id/OIP.ZepcrCbZqcuSF3Ddu58iRAAAAA?rs=1&pid=ImgDetMain'; // URL de imagen relacionado con bajo peso
        } 
        /* Condición para IMC peso saludable */
        else if (imc >= 18.5 && imc < 24.9) {
            resultado.textContent += ' - Estás en un peso saludable.';
            imagen.src = 'https://th.bing.com/th/id/R.567ca3140581bcf7ca7adb6ae3de7e8c?rik=PWnhXfmtTpdVww&pid=ImgRaw&r=0'; // URL de imagen relacionado con peso saludable
        } 
        /* Condición para IMC sobrepeso */
        else if (imc >= 25 && imc < 29.9) {
            resultado.textContent += ' - Estás en sobrepeso.';
            imagen.src = 'https://tse1.explicit.bing.net/th/id/OIP.MFU-8sdt9CZGUGPqAJhYrwHaE7?rs=1&pid=ImgDetMain'; // URL de imagen relacionado con sobrepeso
        } 
        /* Condición para IMC obesidad */
        else {
            resultado.textContent += ' - Estás en obesidad.';
            imagen.src = 'https://revistamedica.com/wp-content/uploads/2021/11/3-obesidad-sobrepeso.jpg'; // URL de imagen relacionado con obesidad
        }
    });
});
