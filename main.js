
const imagenes = ["./assets/img/imagen1.png", 
"./assets/img/imagen2.png",
"./assets/img/imagen3.png",
"./assets/img/imagen4.png",
"./assets/img/imagen5.png",
"./assets/img/imagen6.png"];

const main = document.getElementById("cuerpo");
let carrito = []

fetch("./base.json")
    .then((response) => response.json())
    .then((data) =>{
     data.forEach(item =>{
         let div = document.createElement("div");
         div.className = "etiqueta";
         div.innerHTML =`
         <br><br>
         <img src="./assets/img/imagen${item.id}.png" >
         <h2 class="nombre-et">${item.nombre}</h2>
         <br>
         <h3 class ="precio-et">$${item.precio}</h3>
         <br><br>
         ` ;
         main.append(div);
     
         let agregar = document.createElement("button");
         agregar.innerText= "Agregar al carrito";
         agregar.className = "botones"
         div.append(agregar);
         agregar.addEventListener("click", () =>{
             carrito.push({
                 id: item.id,
                 nombre:item.nombre,
                 precio: item.precio,
             });
             let carritoStor = JSON.stringify(carrito);
             localStorage.setItem("carro", carritoStor);
             
             Swal.fire({
                 title: "Agregaste un producto!",
                 icon: "success"
             });
             
         });
         
         
         carrito = JSON.parse (localStorage.getItem("carro")) || [];
     })
        })

