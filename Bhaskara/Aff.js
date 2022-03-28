function calcDelta(a, b, c){
    return b*b - 4*a*c
}
function calcularx1(delta, a, b){
    return (-b + Math.sqrt(delta)) / (2*a)
}
function calcularx2(delta, a, b){
    return (-b - Math.sqrt(delta)) / (2*a)
}
function bhaskara(a, b, c){
    const valorDelta = calcDelta(a, b, c)
    let x1 = "Inexistente", x2 = "Inexistente"
    if (valorDelta === 0) {
        x1 = calcularx1(valorDelta, a, b)
        x2 = "Inexistente"
    }


    else if (valorDelta > 0) {
    x1 = calcularx1(valorDelta, a, b)
    x2 = calcularx2(valorDelta, a, b)
}
    return {x1: x1, x2: x2}
}