//ISAAC MARTINEZ
//CHOEZ VICTOR
//ELVIS DIAZ
function longitud(empleado){
    let nombre = empleado.nombre;
    let lon = 0;
    for(let i=0; i<nombre.length; i++){
        lon++;
    }
    return lon;
}

let empleado = {"nombre":"Ana","edad":25};
let lon = longitud(empleado);
console.log("El nombre", empleado.nombre, "tiene", lon, "caracteres.");
 //EJEMPLO 2
function contadorVocal(producto, vocal){
    let nombre = producto.nombre;
    let cv = 0;
    for(let i = 0; i < nombre.length; i++){
        if(nombre[i] == vocal){
            cv++;
        }
    }
    return cv;
}

let producto = {"nombre": "Carlos", "precio": 100};
let vocal = "o";
let cv = contadorVocal(producto, vocal);
console.log("El número de vocales", vocal, "en", producto.nombre, "es", cv);

//EJEMPLO 3
function reverse(persona){
    let nombre = persona.nombre;
    let invertido = "";
    let lon = nombre.length - 1;

    for(let i = lon; i >= 0; i--){
        invertido = invertido + nombre[i];
    }

    return invertido;
}

let persona = {"nombre": "Veronica", "edad": 30};
let nombreInvertido = reverse(persona);
console.log("Nombre invertido:", nombreInvertido);

//EJEMPLO 4
function longitud(empleado){
    let nombre = empleado.nombre;
    let lon = 0;
    for(let i = 0; i < nombre.length; i++){
        lon++;
    }
    return lon;
}

function compararLongitudes(empleado1, empleado2){
    let lon1 = longitud(empleado1);
    let lon2 = longitud(empleado2);

    if(lon1 > lon2){
        console.log("El empleado con el nombre más largo es", empleado1.nombre, "(", lon1, "letras )");
    } else if(lon2 > lon1){
        console.log("El empleado con el nombre más largo es", empleado2.nombre, "(", lon2, "letras )");
    } else {
        console.log("Ambos empleados tienen nombres con la misma longitud (", lon1, "letras )");
    }
}

let empleado1 = {"nombre": "María", "edad": 28};
let empleado2 = {"nombre": "Juan", "edad": 35};

compararLongitudes(empleado1, empleado2);
//EJEMPLO 5
let empleado5 = {"cargo": "Director General Académico"};

function inicialesCargo5(emp){
    let palabras = emp.cargo.split(" ");
    let ini = "";
    for(let i = 0; i < palabras.length; i++){
        ini = ini + palabras[i][0] + ".";
    }
    return ini;
}

console.log("Iniciales del cargo:", inicialesCargo5(empleado5));

// BLOQUE 2 
// Ejercicio 1

function longitud1(empleado){
    let nombre = empleado.nombre;
    let lon = 0;
    for(let i = 0; i < nombre.length; i++){
        lon++;
    }
    return lon;
}

function longitudArreglo1(empleados1){
    for(let i = 0; i < empleados1.length; i++){
        let emp = empleados1[i];
        let lon = longitud1(emp);
        console.log(emp.nombre, "→", lon, "caracteres");
    }
}

let empleados1 = [
    {"nombre": "Ana", "edad": 22},
    {"nombre": "Santiago", "edad": 30},
    {"nombre": "Rosa", "edad": 27}
];

longitudArreglo1(empleados1);



// BLOQUE 2
// Ejercicio 2

function contadorVocal2(empleado, vocal){
    let nombre = empleado.nombre;
    let cv = 0;
    for(let i = 0; i < nombre.length; i++){
        if(nombre[i] == vocal){
            cv++;
        }
    }
    return cv;
}

function contarVocalesArreglo2(empleados2, vocal){
    for(let i = 0; i < empleados2.length; i++){
        let emp = empleados2[i];
        let cv = contadorVocal2(emp, vocal);
        console.log(emp.nombre, "Se repite", cv, "veces '" + vocal + "'");
    }
}

let empleados2 = [
    {"nombre": "Andrea"},
    {"nombre": "Marcos"},
    {"nombre": "Lucia"}
];

let vocal2 = "a";
contarVocalesArreglo2(empleados2, vocal2);


// BLOQUE 2
// Ejercicio 3

function reverse3(empleado3){
    let nombre = empleado3.nombre;
    let invertido = "";
    let lon = nombre.length - 1;
    for(let i = lon; i >= 0; i--){
        invertido = invertido + nombre[i];
    }
    return invertido;
}

function invertirNombresArreglo3(empleados3){
    for(let i = 0; i < empleados3.length; i++){
        let emp = empleados3[i];
        let inv = reverse3(emp);
        console.log(emp.nombre, "→", inv);
    }
}

let empleados3 = [
    {"nombre": "Luis"},
    {"nombre": "Carmen"},
    {"nombre": "Pedro"}
];

invertirNombresArreglo3(empleados3);

// BLOQUE 2
// Ejercicio 4  

function longitudCiudad4(ciudad){
    let lon = 0;
    for(let i = 0; i < ciudad.length; i++){
        lon++;
    }
    return lon;
}

function ciudadMasLarga4(empleados4){
    let mayorCiudad = "";
    let mayorLongitud = 0;

    for(let i = 0; i < empleados4.length; i++){
        let emp = empleados4[i];
        let ciudad = emp.ciudad;
        let lon = longitudCiudad4(ciudad);

        if(lon > mayorLongitud){
            mayorLongitud = lon;
            mayorCiudad = ciudad;
        }
    }

    console.log("La ciudad con más letras es", "'" + mayorCiudad + "'", "(", mayorLongitud, "letras ).");
}

let empleados4 = [
    {"nombre": "Carlos", "ciudad": "Milagro"},
    {"nombre": "Andrea", "ciudad": "Guayaquil"},
    {"nombre": "José", "ciudad": "Quito"}
];

ciudadMasLarga4(empleados4);

// BLOQUE 2 - Ejercicio 5
// Obtener iniciales de cargos de varios empleados

function iniciales5(empleado5){
    let cargo = empleado5.cargo;
    let palabras = cargo.split(" ");
    let ini = "";

    for(let i = 0; i < palabras.length; i++){
        let palabra = palabras[i];
        let letra = palabra[0];
        ini = ini + letra + ".";
    }

    return ini;
}

function inicialesArreglo5(empleados5){
    for(let i = 0; i < empleados5.length; i++){
        let emp = empleados5[i];
        let ini = iniciales5(emp);
        console.log(emp.cargo, "→", ini);
    }
}

let empleados5 = [
    {"cargo": "Director General Académico"},
    {"cargo": "Jefe de Laboratorio"},
    {"cargo": "Asistente Administrativo"}
];

inicialesArreglo5(empleados5);


//Bloque 3
// Ejercicio 1

function promedioNotasAltas1(empleados6){
    let suma = 0;
    let contador = 0;

    for(let i = 0; i < empleados6.length; i++){
        let emp = empleados6[i];
        if(emp.nota >= 70){
            suma = suma + emp.nota;
            contador++;
        }
    }

    if(contador > 0){
        let promedio = suma / contador;
        console.log("Promedio de notas ≥ 70:", promedio);
    } else {
        console.log("No hay notas ≥ 70");
    }
}

let empleados6 = [
    {"nombre": "Ana", "nota": 65},
    {"nombre": "Luis", "nota": 80},
    {"nombre": "Carla", "nota": 90},
    {"nombre": "José", "nota": 50},
    {"nombre": "Marta", "nota": 75}
];

promedioNotasAltas1(empleados6);

// BLOQUE 3 - Ejercicio 2

function contarEdadesInvalidas2(empleados7){
    let contador = 0;

    for(let i = 0; i < empleados7.length; i++){
        let emp = empleados7[i];
        if(emp.edad <= 0){
            contador++;
        }
    }

    console.log("Cantidad de edades inválidas:", contador);
}

let empleados7 = [
    {"nombre": "Ana", "edad": 22},
    {"nombre": "Luis", "edad": -5},
    {"nombre": "Carla", "edad": 0}
];

contarEdadesInvalidas2(empleados7);


// BLOQUE 3 - Ejercicio 3

function promedioEdad3(empleados8){
    let sumaMayores = 0;
    let contadorMayores = 0;
    let sumaMenores = 0;
    let contadorMenores = 0;

    for(let i = 0; i < empleados8.length; i++){
        let emp = empleados8[i];
        if(emp.edad >= 18){
            sumaMayores = sumaMayores + emp.edad;
            contadorMayores++;
        } else {
            sumaMenores = sumaMenores + emp.edad;
            contadorMenores++;
        }
    }

    if(contadorMayores > 0){
        let promedioMayores = sumaMayores / contadorMayores;
        console.log("Promedio de mayores:", promedioMayores);
    } else {
        console.log("No hay mayores de edad");
    }

    if(contadorMenores > 0){
        let promedioMenores = sumaMenores / contadorMenores;
        console.log("Promedio de menores:", promedioMenores);
    } else {
        console.log("No hay menores de edad");
    }
}

let empleados8 = [
    {"nombre": "Ana", "edad": 17},
    {"nombre": "Luis", "edad": 20},
    {"nombre": "Carla", "edad": 35},
    {"nombre": "José", "edad": 15},
    {"nombre": "Marta", "edad": 18}
];

promedioEdad3(empleados8);

// BLOQUE 3 - Ejercicio 4

function tablaSalario4(empleado9){
    let salario = empleado9.salario;
    let tabla = "";

    for(let i = 1; i <= 10; i++){
        let resultado = salario * i;
        if(i < 10){
            tabla = tabla + resultado + ", ";
        } else {
            tabla = tabla + resultado;
        }
    }

    console.log("Tabla del salario (" + salario + "):");
    console.log(tabla);
}

let empleado9 = {"nombre": "Luis", "salario": 300};
tablaSalario4(empleado9);


// BLOQUE 3 - Ejercicio 5

function promedioSalarios5(empleados10){
    let sumaPares = 0;
    let contadorPares = 0;
    let sumaImpares = 0;
    let contadorImpares = 0;

    for(let i = 0; i < empleados10.length; i++){
        let emp = empleados10[i];
        if(emp.salario % 2 == 0){           // salario par
            sumaPares = sumaPares + emp.salario;
            contadorPares++;
        } else {                            // salario impar
            sumaImpares = sumaImpares + emp.salario;
            contadorImpares++;
        }
    }

    if(contadorPares > 0){
        let promedioPares = sumaPares / contadorPares;
        console.log("Promedio de salarios pares:", promedioPares);
    } else {
        console.log("No hay salarios pares");
    }

    if(contadorImpares > 0){
        let promedioImpares = sumaImpares / contadorImpares;
        console.log("Promedio de salarios impares:", promedioImpares);
    } else {
        console.log("No hay salarios impares");
    }
}

let empleados10 = [
    {"nombre": "Ana", "salario": 450},
    {"nombre": "Luis", "salario": 500},
    {"nombre": "Carla", "salario": 625},
    {"nombre": "José", "salario": 800},
    {"nombre": "Marta", "salario": 705}
];

promedioSalarios5(empleados10);
