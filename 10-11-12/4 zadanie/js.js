class Calculator {
    constructor(x) {
        this._x = x;
    }

    // Геттер для получения значения
    get result() {
        return this.calculate();
    }

    // Функция для вычисления значения по формуле
    calculate() {
        const x = this._x;
        const numerator = x - 2;
        const denominator = x ** 2 - 2 * x + 3;
        
        if (denominator === 0) {
            throw new Error("Деление на ноль невозможно");
        }

        return numerator / denominator;
    }
}

function performCalculation() {
    const inputX = document.getElementById('inputX').value;
    const x = parseFloat(inputX);

    if (isNaN(x)) {
        alert("Введите корректное числовое значение для x");
        return;
    }

    try {
        const calculator = new Calculator(x);
        const result = calculator.result;
        document.getElementById('result').textContent = `Результат: ${result}`;
    } catch (error) {
        alert(error.message);
    }
}
