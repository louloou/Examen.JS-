let nombre = prompt("Ingresa tu nombre")
function saludoBienvenida(nombre) {
    if ((nombre == "Nahuel") || (nombre == "Santino")) {
        alert("No sos bienvenido, " + nombre)
        return nombre
    } else {
        alert("Bienvenido, " + nombre)
        return nombre
    }
}
saludoBienvenida(nombre)

let edad = prompt("Ingresa tu edad")
function esMayor(edad) {
    if (edad >= 18) {
        alert("Sos mayor de edad")
    } else {
        alert("No sos mayor de edad")
    }
}
esMayor(edad)

let edadCat = prompt("Ingresa tu edad")
function categoriaEdad(edadCat) {
    if (edadCat <= 11) {
        alert("Sos un niño")
    } else if (edadCat <= 18) {
        alert("Sos un adolescente")
    } else if (edad <= 26) {
        alert("Sos un adulto joven")
    } else if (edadCat <= 59) {
        alert("Sos un adulto")
    } else if (edadCat <= 120) {
        alert("Sos un anciano")
    }
}
categoriaEdad(edadCat)

let diaDeSemana = prompt("Ingresa un dia de la semana")
function laborableFinde(diaDeSemana) {
    if (diaDeSemana == "Lunes") {
        alert("Es un dia laborable")
    } else if (diaDeSemana == "Martes") {
        alert("Es un dia laborable")
    } else if (diaDeSemana == "Miercoles") {
        alert("Es un dia laborable")
    } else if (diaDeSemana == "Jueves") {
        alert("Es un dia laborable")
    } else if (diaDeSemana == "Viernes") {
        alert("Es un dia laborable")
    } else if (diaDeSemana == "Sábado") {
        alert("No es un dia laborable")
    } else if (diaDeSemana == "Domingo") {
        alert("Es fin de semana")
    }
}
laborableFinde(diaDeSemana)

let contraseña = prompt("Ingrese la contraseña")
function contraseñaCorrecta(contraseña) {
    if (contraseña == "secreto") {
        alert("Acceso consedido")
    } else if (contraseña != "secreto")
        alert("Acceso denegado")
}
contraseñaCorrecta(contraseña)

// 6 y 7

let edad = prompt("Ingrese su edad")
let precio = promt("Ingrese el precio del producto para ver su descuento")
function descuento(edad, precio)
    if (edad >= 65)

let nota = prompt("Ingrese la calificación numérica (0-100)")
function calificaciónNumerica(nota) {
    if (nota <= 60) {
        alert("Tenes un EP")
    } else if (nota <= 80) {
        alert("Tenes un S")
    } else if (nota <= 100) {
        alert("Tenes un MS")
    }
}
calificaciónNumerica(nota)

let numero = prompt("Ingrese un número del 1 al 7 para obtener el día de la semana")
function diaNumero(numero) {
    if (numero == 1) {
        alert("1 es Lunes")
    } else if (numero == 2) {
        alert("2 es Martes")
    } else if (numero == 3) {
        alert("3 es Miercoles")
    } else if (numero == 4) {
        alert("4 es Jueves")
    } else if (numero == 5) {
        alert("5 es Viernes")
    } else if (numero == 6) {
        alert("6 es Sábado")
    } else if (numero == "Domingo") {
        alert("7 es Domingo")
    }
}
diaNumero(numero)

//10

let cadenaUno = prompt("Ingrese una palabra")
let cadenaDos = prompt("Ingrese nuevamente una palabra")
function cadenas(cadenaUno, cadenaDos) {
    if (cadenaUno == cadenaDos) {
        alert("Es la misma palabra")
    } else if (cadenaUno != cadenaDos)
        alert(cadenaUno + " no es igual que " + cadenaDos)
}
cadenas(cadenaUno, cadenaDos)

let edadUsuario = prompt("Ingrese su año de nacimiento")
function calcularEdad(edadUsuario) {
    let resultado = (2023 - edadUsuario)
    alert("Su edad es " + resultado)
    return resultado
}
calcularEdad(edadUsuario)