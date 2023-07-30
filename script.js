alert("Саня, ты круче всех !!! и сможешь все!!!");

// Задание 1

console.log("Задание 1");

let a = 10;
alert(a);

a = 20;
alert(a);

// Задание 2

console.log("Задание 2");

let firstIphone = 2007;
alert(`Задание 2: Год выпуска первого iPhone - ${firstIphone} год`);

// Задание 3

console.log("Задание 3");

let creatorJS = "Brendan Eich";
alert(`Задание 3: Имя создателя языка JavaScript - ${creatorJS}`);

// Задание 4
console.log("Задание 4");

let b = 10;
let c = 2;

alert(
  `Задание 4: сумма = ${b + c}, разность = ${b - c}, произведение = ${
    b * c
  }, частное = ${b / c}`
);

// Задание 5
console.log("Задание 5");

let result = 2 ** 5;

alert(`Задание 5: ${result}`);

// Задание 6
console.log("Задание 6");

let d = 9;
let e = 2;

alert(`Задание 6: ${d % e}`);

// Задание 7
console.log("Задание 7");

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;

alert(`Задание 7: ${num}`);

// Задание 8
console.log("Задание 8");

let age = Number(prompt("Сколько вам лет?", 18));

alert(`Задание 8: ${age}`);

// Задание 9
console.log("Задание 9");

const user = {
  name: "ALex",
  age: 18,
  isAdmin: true,
};

user["city of residence"] = true;
user.age = 32;
delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?", "name");

alert(`Задание 9: ${user[info]}`);

// Задание 10
console.log("Задание 10");

let askName = prompt("Как к вам можно обращаться?");

alert(`Задание 10: Привет, ${askName}!`);
