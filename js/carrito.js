let mostrarcarro = JSON.parse (localStorage.getItem("carro"))
console.log(mostrarcarro);
const main = document.getElementById("cuerpo");
mostrarcarro.forEach(item => {
    let div = document.createElement("div");
    div.className = "etiqueta";
    div.innerHTML =`
    <br><br>
    <img src="../assets/img/imagen${item.id}.png" >
    <h2 class="nombre-et">${item.nombre}</h2>
    <br>
    <h3 class ="precio-et">$${item.precio}</h3>
    <br><br>
    ` ;
    main.append(div);
    
});