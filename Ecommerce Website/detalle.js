import { baseDeDatos } from './baseDatos.js';

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'));
const producto = baseDeDatos.find((p) => p.id === id);

if (producto) {
  const detalleContent = document.querySelector('.detalles');
  const productoHTML = `
  <div class="detalle-grid">     
        <img src="${producto.imagen}" alt="${producto.nombre}">
        
        <div class="detalle-content">
        <h3>${producto.nombre}</h3>
        <p class="price">$${producto.precio.toFixed(2)}</p>
        
        <p class="description"><b>Descripción: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi iste itaque perferendis 
        est sapiente nihil numquam explicabo reiciendis magnam quod eligendi eius adipisci quaerat ea, 
        molestiae, praesentium saepe ad.</p>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi iste itaque perferendis 
        est sapiente nihil numquam explicabo reiciendis magnam quod eligendi eius adipisci quaerat ea, 
        molestiae, praesentium saepe ad.</p>
            <div class="bottom">
            <a class="btn back" href="index.html">Volver</a>
            </div>
        </div>
    </div>
  `;
  detalleContent.innerHTML = productoHTML;
}