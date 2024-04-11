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



// Создайте объект user, содержащий поле name со значением ‘John’.
const user = {
  name: 'Jhon'
}

// Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user.
let ageInput = prompt();
user.age = ageInput;
// debugger
// Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением ‘admin’.
const admin = JSON.parse(JSON.stringify(user));

// Записать все значения полей объекта admin в отдельные переменные. Имена переменных должны совпадать с названиями полей
let name = admin.name;
let age = admin.age;
console.log(admin);

// Массивы
// Создайте массив целых чисел из 10 элементов.
const sampleArray = [4,55,7,88,98,3,-11,578, -99, 4];

// Выведите в консоль сумму всех элементов массива.
const sumElements = sampleArray.reduce((a,c)=>a+c,0);
console.log(sumElements)
// Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом. 
const doubleElements = sampleArray.map(e=>2 * e)
console.log('Удвоенный',doubleElements);

// (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив).

// Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.

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
