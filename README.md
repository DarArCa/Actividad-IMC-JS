<!-- En tu HTML -->
<p id="infoUsuario">Cargando usuario...</p>

verificar datos

// En tu JS
function cargarPrimerUsuario() {
  fetch("http://localhost:3000/usuarios")
    .then(res => {
      if (!res.ok) throw new Error("Error al cargar usuarios");
      return res.json();
    })
    .then(usuarios => {
      if (usuarios.length === 0) {
        document.getElementById("infoUsuario").textContent = "No hay usuarios registrados.";
      } else {
        const primerUsuario = usuarios[0];
        document.getElementById("infoUsuario").textContent =
          `Usuario: ${primerUsuario.user} - Email: ${primerUsuario.email}`;
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("infoUsuario").textContent = "Error al cargar datos.";
    });
}

// Llama esta función cuando quieras cargar los datos, por ejemplo al cargar la página:
window.onload = cargarPrimerUsuario;







//////////////////////////////////////




function cargarUsuariosEnTarjetas() {
  fetch("http://localhost:3000/usuarios")
    .then(res => {
      if (!res.ok) throw new Error("Error al cargar usuarios");
      return res.json();
    })
    .then(usuarios => {
      const contenedor = document.getElementById("contenedorTarjetas");
      contenedor.innerHTML = ""; // Limpia antes de mostrar

      usuarios.forEach(usuario => {
        // Crear una tarjeta con los datos del usuario
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";  // Para que puedas darle estilos

        tarjeta.innerHTML = `
          <h3>${usuario.user}</h3>
          <p>Email: ${usuario.email}</p>
          <p>Password: ${usuario.password}</p>
        `;

        contenedor.appendChild(tarjeta);
      });

      if (usuarios.length === 0) {
        contenedor.innerHTML = "<p>No hay usuarios para mostrar.</p>";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("contenedorTarjetas").textContent = "Error al cargar datos.";
    });
}

// Ejecutar cuando quieras cargar las tarjetas, por ejemplo:
window.onload = cargarUsuariosEnTarjetas;



//////////////////////////////////////////////////////////////////////////////

actualizar informcion y crear del json

document.getElementById("SEND").addEventListener("click", registrarUsuario);

function registrarUsuario() {
  const user = document.getElementById("user").value.trim();
  const email = document.getElementById("mail").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!user || !email || !password) {
    alert("Por favor completa todos los campos.");
    return;
  }

  crearUsuario(user, email, password);
}

function crearUsuario(user, email, password) {
  fetch("http://localhost:3000/usuarios", {   // <-- URL relativa aquí
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user, email, password })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    console.log("✅ Usuario creado:", data);
    alert("Usuario creado correctamente.");
    // Limpiar inputs si quieres
    document.getElementById("user").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("password").value = "";
  })
  .catch(error => {
    console.error("❌ Error al crear usuario:", error);
    alert("Hubo un error al crear el usuario.");
  });
}
////////////////////////////////////////////

modales

const abrir = document.getElementById("111")//este abre el modal de iniciar sesion
const modalin =document.getElementById("IN")//esto lo que permite es buscar el id con esto y mostrar el modal
const closed = document.getElementById("cerrar")//esta es el id para cerrar el modal
const abrir2 = document.getElementById("222")//y este el de registrarse
const modalreg = document.getElementById("REG")//este va a llamar el id para el modal de registro
const cerrar = document.getElementById("close")//para cerrar el segundo modal

abrir.addEventListener("click",()=>{
    modalin.style.display= "block";  //lo que permite que al darle click al boton muestre el modal 
});
closed.addEventListener("click", ()=>{
    modalin.style.display= "none"; //y con esto lo cerramos oka oka?
});
abrir2.addEventListener("click", ()=>{
    modalreg.style.display= "block";
});
cerrar.addEventListener("click",()=>{
    modalreg.style.display= "none";
});




//////////////////////////////////
funciones
2. Cómo declarar una función
js
Copiar
Editar
function saludar() {
  console.log("¡Hola!");
}
function es la palabra clave.

saludar es el nombre de la función.

() puede contener parámetros (datos que le pasamos).

{} contiene el código que se ejecuta.

3. Llamar (usar) una función
js
Copiar
Editar
saludar(); // Ejecuta el código dentro de la función y muestra "¡Hola!"
4. Función con parámetros
Los parámetros permiten pasar datos a la función.

js
Copiar
Editar
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

saludar("Ana"); // Muestra: ¡Hola, Ana!
saludar("Luis"); // Muestra: ¡Hola, Luis!
5. Función con retorno (return)
Una función puede devolver un valor con return.

js
Copiar
Editar
function sumar(a, b) {
  return a + b;
}

const resultado = sumar(3, 4); // resultado = 7
console.log(resultado);
6. Función anónima y función flecha
Puedes crear funciones sin nombre o funciones flecha (más cortas):

Función anónima asignada a variable:

js
Copiar
Editar
const multiplicar = function(x, y) {
  return x * y;
};
console.log(multiplicar(2, 3)); // 6
Función flecha (más moderna):

js
Copiar
Editar
const dividir = (x, y) => x / y;
console.log(dividir(10, 2)); // 5
7. Funciones con valores por defecto
Puedes dar un valor por defecto a parámetros:

js
Copiar
Editar
function saludar(nombre = "amigo") {
  console.log("¡Hola, " + nombre + "!");
}

saludar();        // ¡Hola, amigo!
saludar("Laura"); // ¡Hola, Laura!


///
fetch("http://localhost:3000/usuarios/2", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nombre: "Ana María"
  })
})
.then(res => res.json())
.then(data => console.log("Nombre actualizado:", data))
.catch(error => console.error("Error al actualizar nombre:", error));




{
  "usuarios": [
    { "id": 1, "nombre": "Juan", "email": "juan@mail.com" },
    { "id": 2, "nombre": "", "email": "ana@mail.com" }
  ]
}

















