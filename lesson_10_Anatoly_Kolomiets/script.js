
// Створення масиву householdItems
const householdItems = [];

// Створення об'єктів для домашнього господарства
let item1 = {
    name: "пральна машина",
    category: "побутова техніка",
    price: 5000,
    inUse: true
};

let item2 = {
    name: "мікрохвильова піч",
    category: "побутова техніка",
    price: 2000,
    inUse: false
};

let item3 = {
    name: "електрочайник",
    category: "побутова техніка",
    price: 500,
    inUse: true
};

let item4 = {
    name: "пилосос",
    category: "побутова техніка",
    price: 3000,
    inUse: true
};

let item5 = {
    name: "телевізор",
    category: "побутова техніка",
    price: 10000,
    inUse: false
};

// Додавання об'єктів до масиву
householdItems.push(item1, item2, item3, item4, item5);

// Виведення інформації

console.log("Інформація про всі предмети в масиві:");
console.log(householdItems);




console.log("Предмети, які використовуються в даний момент:");
for (let item of householdItems) {
    if (item.inUse) {
        console.log(item.name);
    }
}
document.getElementById("arr").innerHTML = 'Не виходить вивести на монітор, не хватає знань';
document.getElementById("arr").style.color = "#45818e";
document.getElementById("arr").style.fontSize = "50px";
console.log(householdItems[0]);