import { baseDeDatos } from './baseDatos.js';
const contenedorItems = document.querySelector('.productos__center');
const cartCenter = document.querySelector('.carrito__center');
const cartIcon = document.querySelector('.cart-ico');
const closeIcon = document.querySelector('.close__carrito');
let cart = document.querySelector('.carrito');
let cartOverlay = document.querySelector('.carrito__overlay');
const inputBuscar = document.querySelector('#buscar');
const selectCategoria = document.querySelector('#category');


var carrito = [];


function showProducts(){
    baseDeDatos.forEach(producto => {
        const productoHTML = `
        <div class="producto" id="${producto.id}">
            <div class="img__container">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>

            <div class="producto__footer">
                <h1> ${producto.nombre} </h1>
                <div class="price">$${producto.precio.toFixed(2)}</div>
            </div>

            <div class="bottom">
            <div class="btn__group">
                <a href="#" class="btn addCart" data-id="${producto.id}">Añadir al carrito</a>
                <a href="detalle-producto.html" class="btn view" data-producto-id="${producto.id}">Ver</a>
            </div>
            </div>
            
        </div>`
        contenedorItems.innerHTML += productoHTML;
    });
}
showProducts();


const openCart = () =>{
    cart.classList.add('show');
    cartOverlay.classList.add('show');
};

const closeCart = () =>{
    cart.classList.remove('show');
    cartOverlay.classList.remove('show');
};

cartIcon.addEventListener('click', openCart);
closeIcon.addEventListener('click', closeCart);



function mostrarCarrito() {

    cartCenter.innerHTML = ``;
  
    carrito.forEach(producto => {
      const productoHTML = `
            <div class="carrito__item">
            <img src="${producto.imagen}" alt="${producto.name}">
            <div>
                <h3> ${producto.nombre} </h3>
                <p class="price"> $${producto.precio.toFixed(2)} </p>
            </div>
            <div class="size-cantidad">
                <label for="size"> Talla n°: </label>
                <select name="size" id="">
                    <option value="40">42</option>
                    <option value="40">41</option>
                    <option value="40">40</option>
                    <option value="40">39</option>
                    <option value="40">38</option>
                </select>
                <label for="cantidad"> Cantidad : </label>
                <div class="cantidad" id="">
                    ${producto.cantidad}
                </div>
                <div>
                    <span class="remove__item" data-id="${producto.id}"><i class="bx bx-trash"></i></span>
                </div>
                <span class="divider"></span>
            </div>
        </div>   
      `;
      console.log(producto.precio)
      cartCenter.innerHTML += productoHTML;
    });
    
    const botonesEliminar = document.querySelectorAll('.remove__item');
    botonesEliminar.forEach(boton => boton.addEventListener('click', () => {
        const id = boton.dataset.id;
        const index = carrito.findIndex(producto => producto.id === parseInt(id));
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
          } else {
            carrito.splice(index, 1);
        }
        mostrarCarrito();
    }));

    const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const itemsTotal = document.querySelector('.items__total');
    itemsTotal.textContent = totalProductos.toString();

    const totalAPagar = document.querySelector('#total-a-pagar');
    totalAPagar.textContent = calcularTotal().toString();
}

const addToCart = (ev) => {
    ev.preventDefault();

    const id = ev.target.getAttribute('data-id');
    const producto = baseDeDatos.find((producto)=> producto.id === parseInt(id));
  
    const indexProductoEnCarrito = carrito.findIndex((p) => p.id === producto.id);
  
    if (indexProductoEnCarrito !== -1) {
      carrito[indexProductoEnCarrito].cantidad += 1;
    } else {
      carrito.push({...producto, cantidad: 1});
    }
  
    openCart();
    mostrarCarrito();
    console.log(carrito);
};

function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
      total += parseFloat((producto.cantidad * producto.precio).toFixed(2));
    });
    return total.toFixed(2);
};

const AddCartBtnEvents = () =>{
    const botonesAddToCart = document.querySelectorAll('.addCart');
    botonesAddToCart.forEach((boton) => {
    boton.addEventListener("click", addToCart);
    });
}
AddCartBtnEvents(); 

const ViewDetailsBtnEvents = () =>{
    const botonesView = document.querySelectorAll('.view');
    botonesView.forEach((boton) => {
    boton.addEventListener('click', (event) => {
        event.preventDefault();
        const id = boton.getAttribute('data-producto-id');
        const url = `detalle-producto.html?id=${id}`;
        window.location.href = url;
        });
    });
}
ViewDetailsBtnEvents();

inputBuscar.addEventListener('keyup', () => {
    const busqueda = inputBuscar.value.trim().toLowerCase();
    contenedorItems.innerHTML = "";
  
    baseDeDatos.forEach((producto) => {
     
        if (producto.nombre.toLowerCase().includes(busqueda)) {
            const productoHTML = `
                <div class="producto" id="${producto.id}">
                <div class="img__container">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
        
                <div class="producto__footer">
                    <h1> ${producto.nombre} </h1>
                    <div class="price">$${producto.precio.toFixed(2)}</div>
                </div>
        
                <div class="bottom">
                    <div class="btn__group">
                    <a href="#" class="btn addCart" data-id="${producto.id}">Añadir al carrito</a>
                    <a href="detalle-producto.html" class="btn view" data-producto-id="${producto.id}">Ver</a>
                    </div>
                </div>
                </div>
            `;   
            contenedorItems.innerHTML +=  productoHTML;
        }
        AddCartBtnEvents(); 
        ViewDetailsBtnEvents();
        
    }); 
});

selectCategoria.addEventListener('change', () => {
    const categoria = selectCategoria.value;
    contenedorItems.innerHTML = "";
  
    baseDeDatos.forEach((producto) => {
     
        if (producto.categoria === categoria) {
            const productoHTML = `
                <div class="producto" id="${producto.id}">
                <div class="img__container">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
        
                <div class="producto__footer">
                    <h1> ${producto.nombre} </h1>
                    <div class="price">$${producto.precio.toFixed(2)}</div>
                </div>
        
                <div class="bottom">
                    <div class="btn__group">
                    <a href="#" class="btn addCart" data-id="${producto.id}">Añadir al carrito</a>
                    <a href="detalle-producto.html" class="btn view" data-producto-id="${producto.id}">Ver</a>
                    </div>
                </div>
                </div>
            `;   
            contenedorItems.innerHTML +=  productoHTML;
        }
        AddCartBtnEvents(); 
        ViewDetailsBtnEvents();
    }); 
});



