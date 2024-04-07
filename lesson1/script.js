// Линейные алгоритмы

// В переменных a и b хранятся числа. Написать программу, которая выводит в консоль произведение и сумму этих чисел.
function sumAndMult(a, b) {
  return { sum: a + b, mul: a * b };
}

// В двух переменных хранятся строки символов. Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.
function lengthOfStrings(...strings) {
  return strings.reduce((a, c) => a + c.length, 0);
}
// Написать программу, которая запрашивает у пользователя ввод трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа.

function sumChars(inputNumber) {
  return String(inputNumber)
    .split()
    .reduce((a, c) => a + +c, 0);
}

// Условия
// В переменных a и b хранятся числа. Вывести в консоль наибольшее из них.
function maxAB(a, b) {
  return a > b ? a : b;
}
// Запросить у пользователя ввод числа от 1 до 12. Вывести в консоль название месяца, соответствующее этому числу (1 — январь, 2 — февраль и т.д.).
function getMonthString(monthNumber) {
  const monthStringList = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];
  return monthStringList[monthNumber - 1] ?? "неизвестно";
}
// В переменных circle и square хранятся площади круга и квадрата соответственно. Написать программу, которая определяет, поместится ли круг в квадрат.

function isFit(circleArea, squareArea) {
  let diameter = 2 * Math.sqrt(circleArea / Math.PI);
  let side = Math.sqrt(squareArea);
  return diameter <= side;
}

console.log("Произведение a b: " + sumAndMult(3, 60).mul);
console.log("Сумма a b: " + sumAndMult(3, 60).sum);
console.log(lengthOfStrings("www", "2"));
console.log(sumChars(123));

console.log(maxAB(1, 5));
console.log(maxAB(12, 5));
console.log(maxAB(5, 5));

let getMonthNumber = prompt();
alert(getMonthString(getMonthNumber));

console.log(isFit(10, 20));
