function getNumber1() {
    return parseFloat(document.getElementById('num1').value);
}

function getNumber2() {
    return parseFloat(document.getElementById('num2').value);
}

function setResult(result) {
    document.getElementById('result').innerText = result;
}

function add() {
    const result = getNumber1() + getNumber2();
    setResult(result);
}

function subtract() {
    const result = getNumber1() - getNumber2();
    setResult(result);
}

function multiply() {
    const result = getNumber1() * getNumber2();
    setResult(result);
}

function divide() {
    const num2 = getNumber2();
    if (num2 !== 0) {
        const result = getNumber1() / num2;
        setResult(result);
    } else {
        setResult("Não é possível dividir por zero");
    }
}
