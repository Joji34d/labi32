// Создаем строковые переменные
const s1 = "ВАША ФАМИЛИЯ";
const s2 = "АДРЕС";

// Определяем длину строки s2
const s2Length = s2.length;

// Выполняем сцепление строк s1 и s2
const concatenation = s1 + " " + s2;

// Преобразуем строку s2 в нижний регистр
const s2Lowercase = s2.toLowerCase();

// Отображаем результаты в HTML-документе
document.getElementById('s1').textContent = `Строка S1: ${s1}`;
document.getElementById('s2').textContent = `Строка S2: ${s2}`;
document.getElementById('s2Length').textContent = `Длина строки S2: ${s2Length}`;
document.getElementById('concatenation').textContent = `Сцепление строк S1 и S2: ${concatenation}`;
document.getElementById('s2Lowercase').textContent = `Строка S2 в нижнем регистре: ${s2Lowercase}`;
