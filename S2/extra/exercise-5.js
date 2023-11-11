function rollDice(numberSide) {
    // Aseguramos que el número de caras sea un entero positivo
    numberSide = Math.floor(Math.abs(numberSide));

    // Simulamos la tirada de dado
    let result = Math.floor(Math.random() * numberSide) + 1;

    // Devolvemos el resultado
    return result;
}

// Ejemplo de uso con un dado de 6 caras
let resultThrow = rollDice(6);
console.log("Resultado de la tirada: " + resultThrow);