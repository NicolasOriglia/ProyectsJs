let presupuestoVac = document.getElementById('form');

presupuestoVac.addEventListener('submit', calcularExpens);

function getValues(){
    let destino = document.getElementById('destino').value;
    let presupuesto = document.getElementById('presupuesto').value;
    let alojamiento = document.getElementById('alojamiento').value;
    let transporte = document.getElementById('transporte').value;
    let comida = document.getElementById('comida').value;

    return {destino, presupuesto, alojamiento, transporte, comida};
};

function calcularExpens(e){
    e.preventDefault();

    const {destino, presupuesto, alojamiento, transporte, comida} = getValues();

    let gastos = parseFloat(transporte) + parseFloat(alojamiento) + parseFloat(comida);
    let resultado = (parseFloat(presupuesto) - gastos).toFixed(2);


    mostrarResultado(destino, presupuesto, resultado);

};

function mostrarResultado (destino, presupuesto, resultado){
    let result =  document.getElementById('result');
    result.innerHTML = '';
    let newDiv = document.createElement('div');

    newDiv.innerHTML = 
    `<div class="container-data row">
        <div class="col s4">
            <h4> Destino : ${destino}</h4>
        </div>
        <div class="col s4">
            <h4>Presupuesto : $ ${presupuesto}</h4>
        </div>
        <div class="col s4">
            <h4>Gastos Totales : $ ${resultado}</h4>
        </div>
    </div>`;

    result.appendChild(newDiv);
    resetearCont()
}

const resetearCont = () => presupuestoVac.reset();
