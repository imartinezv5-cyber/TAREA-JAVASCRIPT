//Integrantes:
//Isaac Martinez Vivanco.
//Elvis Diaz Ramirez.
//Victor Choez Arteaga.



//EJERCICIO 1
// Función principal: determina si un número es positivo o negativo
function positivoNegativo(numero) {
    if (numero >= 0) {
        return "El número " + numero + " es positivo";
    } else {
        return "El número " + numero + " es negativo";
    }   
}

console.log(positivoNegativo(2));
console.log(positivoNegativo(-3));


// Versión con ciclo y prompt
function seriePositivoNegativo(n) {
    let num = 0;
    for (let i = 1; i <= n; i++) {
        num = parseInt(prompt("Ingrese un número: "));
        console.log(positivoNegativo(num));
    }
}

//seriePositivoNegativo(3); La cantidad de valores que podremos ingresar


// Versión con arreglo 
function seriePositivoNegativoArreglo() {
    let numeros = [2, -5, 8, -1, 0, 8, 4, -3, -7, 6];
    for (let i = 0; i < numeros.length; i++) {
        console.log(positivoNegativo(numeros[i]));
    }
}

seriePositivoNegativoArreglo();

//EJERCICIO 2
// Función principal: calcula el costo de los lápices
function costoLapices(cantidad) {
    let precio;
    if (cantidad >= 1000) {
        precio = 0.85;
    } else {
        precio = 0.90;
    }
    let total = cantidad * precio;
    return "Total a pagar: $" + total.toFixed(2);
}

console.log(costoLapices(1200)); // Total a pagar: $1020.00
console.log(costoLapices(500));  // Total a pagar: $450.00


// Versión con ciclo y prompt
function serieCostoLapices(n) {
    let cantidad = 0;
    for (let i = 1; i <= n; i++) {
        cantidad = parseInt(prompt("Ingrese la cantidad de lápices: "));
        console.log(costoLapices(cantidad));
    }
}

// serieCostoLapices(3);


// Versión con arreglo 
function serieCostoLapicesArreglo() {
    let cantidades = [1200, 500, 999, 1500, 1000];
    for (let i = 0; i < cantidades.length; i++) {
        console.log(costoLapices(cantidades[i]));
    }
}

serieCostoLapicesArreglo();

//EJERCICIO 3
// Función principal: calcula el precio final aplicando el descuento
function descuentoTraje(precio) {
    let descuento;
    if (precio > 2500) {
        descuento = 0.15; // 15% si es mayor a 2500
    } else {
        descuento = 0.08; // 8% si es 2500 o menos
    }
    let precioFinal = precio - (precio * descuento);
    return "Precio final: $" + precioFinal.toFixed(2);
}

console.log(descuentoTraje(3000)); // Precio final: $2550.00
console.log(descuentoTraje(2000)); // Precio final: $1840.00


// Versión con ciclo y prompt
function serieDescuentoTraje(n) {
    let precio = 0;
    for (let i = 1; i <= n; i++) {
        precio = parseFloat(prompt("Ingrese el precio del traje: "));
        console.log(descuentoTraje(precio));
    }
}

// serieDescuentoTraje(3);


// Versión con arreglo 
function serieDescuentoTrajeArreglo() {
    let precios = [3000, 2500, 2000, 4000, 1500];
    for (let i = 0; i < precios.length; i++) {
        console.log(descuentoTraje(precios[i]));
    }
}

serieDescuentoTrajeArreglo();

//EJERCICIO 4
// Función principal: calcula el costo total de viaje según tipo de autobús, distancia y cantidad de personas
function costoViaje(tipo, distancia, personas) {
    let tarifa;

    // Determinar tarifa por tipo de autobús
    if (tipo.toUpperCase() === "A") {
        tarifa = 2.0;
    } else if (tipo.toUpperCase() === "B") {
        tarifa = 2.5;
    } else if (tipo.toUpperCase() === "C") {
        tarifa = 3.0;
    } else {
        return "Tipo de autobús no válido.";
    }

    // Si hay menos de 20 personas, cobrar como si fueran 20
    if (personas < 20) {
        personas = 20;
    }

    let total = tarifa * distancia * personas;
    return "Costo total: $" + total.toFixed(2);
}

console.log(costoViaje("A", 100, 15)); // Costo total: $4000.00
console.log(costoViaje("B", 50, 25));  // Costo total: $3125.00
console.log(costoViaje("C", 80, 18));  // Costo total: $4800.00


// Versión con ciclo y prompt
function serieCostoViaje(n) {
    for (let i = 1; i <= n; i++) {
        let tipo = prompt("Ingrese tipo de autobús (A, B o C): ");
        let distancia = parseFloat(prompt("Ingrese la distancia (km): "));
        let personas = parseInt(prompt("Ingrese la cantidad de personas: "));
        console.log(costoViaje(tipo, distancia, personas));
    }
}

// serieCostoViaje(3);


// Versión con arreglo 
function serieCostoViajeArreglo() {
    let viajes = [
        {tipo: "A", distancia: 100, personas: 15},
        {tipo: "B", distancia: 50, personas: 25},
        {tipo: "C", distancia: 80, personas: 18},
        {tipo: "A", distancia: 120, personas: 22}
    ];

    for (let i = 0; i < viajes.length; i++) {
        let v = viajes[i];
        console.log(costoViaje(v.tipo, v.distancia, v.personas));
    }
}

serieCostoViajeArreglo();

//EJERCICIO 4
// Función principal: calcula el costo total y costo por persona según tipo de autobús, distancia y cantidad de personas
function costoViaje(tipo, distancia, personas) {
    let tarifa;

    // Determinar tarifa por tipo de autobús
    if (tipo.toUpperCase() === "A") {
        tarifa = 2.0;
    } else if (tipo.toUpperCase() === "B") {
        tarifa = 2.5;
    } else if (tipo.toUpperCase() === "C") {
        tarifa = 3.0;
    } else {
        return "Tipo de autobús no válido.";
    }

    // Si hay menos de 20 personas, cobrar como si fueran 20
    let personasCobro = personas < 20 ? 20 : personas;

    let total = tarifa * distancia * personasCobro;
    let costoPersona = total / personas; // dividir entre las personas reales
    return "Costo total: $" + total.toFixed(2) + " – Costo por persona: $" + costoPersona.toFixed(2);
}

console.log(costoViaje("A", 100, 15)); // Costo total: $4000.00 – Costo por persona: $266.67
console.log(costoViaje("B", 50, 25));  // Costo total: $3125.00 – Costo por persona: $125.00
console.log(costoViaje("C", 80, 18));  // Costo total: $4800.00 – Costo por persona: $266.67


// Versión con ciclo y prompt
function serieCostoViaje(n) {
    for (let i = 1; i <= n; i++) {
        let tipo = prompt("Ingrese tipo de autobús (A, B o C): ");
        let distancia = parseFloat(prompt("Ingrese la distancia (km): "));
        let personas = parseInt(prompt("Ingrese la cantidad de personas: "));
        console.log(costoViaje(tipo, distancia, personas));
    }
}

// serieCostoViaje(3);


// Versión con arreglo 
function serieCostoViajeArreglo() {
    let viajes = [
        {tipo: "A", distancia: 100, personas: 15},
        {tipo: "B", distancia: 50, personas: 25},
        {tipo: "C", distancia: 80, personas: 18},
        {tipo: "A", distancia: 120, personas: 22}
    ];

    for (let i = 0; i < viajes.length; i++) {
        let v = viajes[i];
        console.log(costoViaje(v.tipo, v.distancia, v.personas));
    }
}

serieCostoViajeArreglo();

//EJERCICIO 5
// Función principal: calcula el costo de una cita según su número
function costoCita(numeroCita) {
    let costo;

    if (numeroCita >= 1 && numeroCita <= 3) {
        costo = 200;
    } else if (numeroCita >= 4 && numeroCita <= 5) {
        costo = 150;
    } else if (numeroCita >= 6 && numeroCita <= 8) {
        costo = 100;
    } else if (numeroCita >= 9) {
        costo = 50;
    } else {
        return "Número de cita no válido.";
    }

    return costo;
}

// Versión con ciclo y prompt
function serieCitas(n) {
    let acumulado = 0;
    for (let i = 1; i <= n; i++) {
        let numeroCita = parseInt(prompt("Ingrese número de la cita: "));
        let costo = costoCita(numeroCita);
        if (typeof costo === "number") {
            acumulado += costo;
            console.log("Costo cita " + numeroCita + ": $" + costo + " – Acumulado: $" + acumulado);
        } else {
            console.log(costo); // muestra error si número no válido
        }
    }
}

// serieCitas(5); // ejemplo con 5 citas


// Versión con arreglo 
function serieCitasArreglo() {
    let citas = [1, 3, 5, 7, 10]; // números de cita
    let acumulado = 0;

    for (let i = 0; i < citas.length; i++) {
        let costo = costoCita(citas[i]);
        if (typeof costo === "number") {
            acumulado += costo;
            console.log("Costo cita " + citas[i] + ": $" + costo + " – Acumulado: $" + acumulado);
        } else {
            console.log(costo);
        }
    }
}

serieCitasArreglo();

//EJERCICIO 6
// Función principal: calcula costo de producción y precio de venta según clave y materia prima
function precioVenta(clave, materiaPrima) {
    let manoObra = 0;
    let gastosFabricacion = 0;

    // Determinar porcentajes según clave
    switch (clave) {
        case 1:
            manoObra = 0.80 * materiaPrima;
            gastosFabricacion = 0.35 * materiaPrima;
            break;
        case 2:
            manoObra = 0.75 * materiaPrima;
            gastosFabricacion = 0.30 * materiaPrima;
            break;
        case 3:
            manoObra = 0.75 * materiaPrima;
            gastosFabricacion = 0.35 * materiaPrima;
            break;
        case 4:
            manoObra = 0.80 * materiaPrima;
            gastosFabricacion = 0.40 * materiaPrima;
            break;
        case 5:
            manoObra = 0.85 * materiaPrima;
            gastosFabricacion = 0.40 * materiaPrima;
            break;
        case 6:
            manoObra = 0.90 * materiaPrima;
            gastosFabricacion = 0.45 * materiaPrima;
            break;
        default:
            return "Clave no válida.";
    }

    let costoProduccion = materiaPrima + manoObra + gastosFabricacion;
    let precioVenta = costoProduccion * 1.45; // agregar 45% para precio de venta
    return "Costo producción: $" + costoProduccion.toFixed(2) + " – Precio de venta: $" + precioVenta.toFixed(2);
}

// Ejemplo directo
console.log(precioVenta(3, 1000)); // Costo producción: $2100.00 – Precio de venta: $3045.00


// Versión con ciclo y prompt
function seriePrecioVenta(n) {
    for (let i = 1; i <= n; i++) {
        let clave = parseInt(prompt("Ingrese la clave del producto (1-6): "));
        let materiaPrima = parseFloat(prompt("Ingrese el costo de materia prima: "));
        console.log(precioVenta(clave, materiaPrima));
    }
}

// seriePrecioVenta(3); // ejemplo con 3 productos


// Versión con arreglo 
function seriePrecioVentaArreglo() {
    let productos = [
        {clave: 1, materiaPrima: 1000},
        {clave: 3, materiaPrima: 1000},
        {clave: 5, materiaPrima: 2000}
    ];

    for (let i = 0; i < productos.length; i++) {
        let p = productos[i];
        console.log(precioVenta(p.clave, p.materiaPrima));
    }
}

seriePrecioVentaArreglo();

//EJERCICIO 7
// Función principal: calcula el nuevo límite de crédito según tipo de tarjeta
function aumentoCredito(tipo, creditoActual) {
    let porcentaje;

    if (tipo === 1) {
        porcentaje = 0.25;
    } else if (tipo === 2) {
        porcentaje = 0.35;
    } else if (tipo === 3) {
        porcentaje = 0.40;
    } else {
        porcentaje = 0.50; // para cualquier otro tipo
    }

    let nuevoCredito = creditoActual + (creditoActual * porcentaje);
    return "Nuevo crédito: $" + nuevoCredito.toFixed(2);
}

// Ejemplos directos
console.log(aumentoCredito(2, 1000)); // Nuevo crédito: $1350.00
console.log(aumentoCredito(1, 2000)); // Nuevo crédito: $2500.00
console.log(aumentoCredito(4, 500));  // Nuevo crédito: $750.00


// Versión con ciclo y prompt
function serieAumentoCredito(n) {
    for (let i = 1; i <= n; i++) {
        let tipo = parseInt(prompt("Ingrese tipo de tarjeta (1,2,3 o cualquier otro número): "));
        let credito = parseFloat(prompt("Ingrese crédito actual: "));
        console.log(aumentoCredito(tipo, credito));
    }
}

// serieAumentoCredito(3); // ejemplo con 3 clientes


// Versión con arreglo 
function serieAumentoCreditoArreglo() {
    let clientes = [
        {tipo: 1, credito: 1000},
        {tipo: 2, credito: 1000},
        {tipo: 3, credito: 2000},
        {tipo: 5, credito: 500} // otro tipo
    ];

    for (let i = 0; i < clientes.length; i++) {
        let c = clientes[i];
        console.log(aumentoCredito(c.tipo, c.credito));
    }
}

serieAumentoCreditoArreglo();

//EJERCICIO 8
// Función principal: calcula el costo de envío según peso y zona
function costoEnvio(peso, zona) {
    // Restricción de peso
    if (peso > 5) {
        return "Peso excede el límite permitido (5 kg).";
    }

    let tarifa;

    // Determinar tarifa por zona
    switch (zona.toLowerCase()) {
        case "europa":
            tarifa = 60;
            break;
        case "america":
            tarifa = 50;
            break;
        case "asia":
            tarifa = 70;
            break;
        case "africa":
            tarifa = 80;
            break;
        default:
            return "Zona no válida.";
    }

    let costoTotal = tarifa * peso;
    return "Costo envío: $" + costoTotal.toFixed(2);
}

// Ejemplos directos
console.log(costoEnvio(4, "Europa")); // Costo envío: $240.00
console.log(costoEnvio(3, "America")); // Costo envío: $150.00
console.log(costoEnvio(6, "Asia")); // Peso excede el límite permitido (5 kg)


// Versión con ciclo y prompt
function serieCostoEnvio(n) {
    for (let i = 1; i <= n; i++) {
        let peso = parseFloat(prompt("Ingrese el peso del paquete (kg): "));
        let zona = prompt("Ingrese la zona de destino (Europa, America, Asia, Africa): ");
        console.log(costoEnvio(peso, zona));
    }
}

// serieCostoEnvio(3); // ejemplo con 3 paquetes


// Versión con arreglo 
function serieCostoEnvioArreglo() {
    let paquetes = [
        {peso: 4, zona: "Europa"},
        {peso: 3, zona: "America"},
        {peso: 2.5, zona: "Asia"},
        {peso: 5, zona: "Africa"},
        {peso: 6, zona: "Europa"} // excede límite
    ];

    for (let i = 0; i < paquetes.length; i++) {
        let p = paquetes[i];
        console.log(costoEnvio(p.peso, p.zona));
    }
}

serieCostoEnvioArreglo();

//EJERCICIO 9
// Función principal: clasifica la edad según los rangos dados
function clasificarEdad(edad) {
    if (edad >= 1 && edad <= 3) {
        return "Infante";
    } else if (edad >= 4 && edad <= 13) {
        return "Niño";
    } else if (edad >= 14 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 35) {
        return "Joven";
    } else if (edad >= 36 && edad <= 64) {
        return "Adulto";
    } else if (edad >= 65) {
        return "Adulto mayor";
    } else {
        return "Edad no válida";
    }
}

// Ejemplos directos
console.log(clasificarEdad(2));  // Infante
console.log(clasificarEdad(10)); // Niño
console.log(clasificarEdad(15)); // Adolescente
console.log(clasificarEdad(25)); // Joven
console.log(clasificarEdad(50)); // Adulto
console.log(clasificarEdad(70)); // Adulto mayor


// Versión con ciclo y prompt
function serieClasificacionEdad(n) {
    for (let i = 1; i <= n; i++) {
        let edad = parseInt(prompt("Ingrese la edad: "));
        console.log("Edad " + edad + ": " + clasificarEdad(edad));
    }
}

// serieClasificacionEdad(5); // ejemplo con 5 edades


// Versión con arreglo 
function serieClasificacionEdadArreglo() {
    let edades = [2, 10, 15, 25, 50, 70, -1]; // incluye un caso inválido
    for (let i = 0; i < edades.length; i++) {
        console.log("Edad " + edades[i] + ": " + clasificarEdad(edades[i]));
    }
}

serieClasificacionEdadArreglo();

//EJERCICIO 10
// Función principal: devuelve el día de la semana según el número
function diaSemana(numero) {
    switch (numero) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número no válido"; // si es menor que 1 o mayor que 7
    }
}

// Ejemplos directos
console.log(diaSemana(1)); // Lunes
console.log(diaSemana(3)); // Miércoles
console.log(diaSemana(7)); // Domingo
console.log(diaSemana(9)); // Número no válido


// Versión con ciclo y prompt
function serieDiaSemana(n) {
    for (let i = 1; i <= n; i++) {
        let numero = parseInt(prompt("Ingrese un número del 1 al 7: "));
        console.log("Número " + numero + ": " + diaSemana(numero));
    }
}

// serieDiaSemana(5); // ejemplo con 5 números


// Versión con arreglo 
function serieDiaSemanaArreglo() {
    let numeros = [1, 3, 5, 7, 8]; // incluye un número inválido
    for (let i = 0; i < numeros.length; i++) {
        console.log("Número " + numeros[i] + ": " + diaSemana(numeros[i]));
    }
}

serieDiaSemanaArreglo();

