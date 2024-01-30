let mostrarcarro = JSON.parse(localStorage.getItem("carro")) || [];
let precioTotal = 0;
console.log(mostrarcarro);
const main = document.getElementById("cuerpo");
mostrarcarro.forEach(item => {
    let div = document.createElement("div");
    div.className = "etiqueta";
    div.innerHTML = `
        <br><br>
        <img src="../assets/img/imagen${item.id}.png" >
        <h2 class="nombre-et">${item.nombre}</h2>
        <br>
        <h3 class ="precio-et">$${item.precio}</h3>
        <br><br>
    `;
    main.append(div);
    let borrarProduct = document.createElement("button");
    borrarProduct.innerText = "borrar";
    borrarProduct.className = "botones";
    div.append(borrarProduct);
    borrarProduct.addEventListener("click", () => {
        let idDelProducto = item.id;
        let productoAEliminar = mostrarcarro.find(item => item.id === idDelProducto);
        if (!productoAEliminar) {
            alert("El producto que intentas eliminar no existe.");
            return;
        }
        mostrarcarro.parentNode.removeChild(productoAEliminar);
        precioTotal = precioTotal - productoAEliminar.precio;
        footer.innerHTML = `
            <br><br>
            <h2>Precio Total: $${precioTotal}</h2>
        `;
    });
});
mostrarcarro.forEach(item => {
    precioTotal = precioTotal + item.precio;
});
let footer = document.createElement("footer");
footer.className = "total_";
footer.innerHTML = `
    <br><br>
    <h2>Precio Total: $${precioTotal}</h2>
`;
main.append(footer);
let borrar = document.createElement("button");
borrar.innerText = "Vaciar Carrito";
borrar.className = "botones";
footer.append(borrar);
borrar.addEventListener("click", () => {
    Swal.fire({
        title: "¿Está seguro de vaciar el carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("carro");
            Swal.fire({
                title: "¡Eliminado!",
                text: "Su archivo ha sido eliminado.",
                icon: "success"
            });
            location.reload();
        }
    });
});

