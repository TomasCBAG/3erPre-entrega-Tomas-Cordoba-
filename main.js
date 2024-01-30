
const productos = [
    {id: 1 , nombre:"REMERA RVCA STATIC OVER" , precio: 2400 },
    {id: 2 , nombre:"REMERA ELEMENT KEEP " , precio: 2280 },
    {id: 3 , nombre:"REMERA ALTHON GROWING" , precio: 1499 },
    {id: 4 , nombre:"REMERA THRASHER FLAMA" , precio: 2160 },
    {id: 5 , nombre:"REMERA ZIMITH SUPERIOR" , precio: 1350 },
    {id: 6 , nombre:"REMERA CAPTAIN FIN PIER" , precio: 1710 },
    {id: 7 , nombre:"REMERA ZIMITH TOKIOTA" , precio: 1440 },
    {id: 8 , nombre:"REMERA FAMILY MACHI" , precio: 2160 },  
];
const imagenes = ["./assets/img/imagen1.png", 
"./assets/img/imagen2.png",
 "./assets/img/imagen3.png",
  "./assets/img/imagen4.png",
   "./assets/img/imagen5.png",
    "./assets/img/imagen6.png"];

const main = document.getElementById("cuerpo");
let carrito = []


productos.forEach(item =>{
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
