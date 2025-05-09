const calculadora = (num1, num2) => {
    const resultado = num1 + num2;
    console.log("Resultado: " + resultado);
    console.log("Operação realizada: Soma");
}


const calc = (a, b, operacao) => {
    return operacao === "+" ? a + b :
              operacao === "-" ? a - b :
              operacao === "*" ? a * b :
              operacao === "/" ? a / b :
              "Operação inválida";  
}

const calc2 = (a, b, operacao) => {
    switch (operacao) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Operação inválida";
    }
}

const calc3 = (a, b, operacao) => {
    if (b === 0 && operacao === "/") {
        return "Divisão por zero não é permitida";
    }
    else {
        switch (operacao) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Operação inválida";
        }
    }
}