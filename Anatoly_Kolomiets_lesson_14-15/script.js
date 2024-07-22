const  arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
arr[arr.length] = "Hi";
console.log(arr);
document.getElementById("push").innerHTML = `результат обробки коду: масив[${arr}]`;
document.getElementById("push").style.color = "#133337";


const arrPop = [1, 2, 3, 4, 5, 6];
console.log(arrPop);
let pop = arrPop[arrPop.length-1];
arrPop.length = arrPop.length - 1;
console.log(pop);
console.log(arrPop);
document.getElementById("pop").innerHTML = `результат обробки коду: масив[${arrPop}]`;
document.getElementById("pop").style.color = "#133337";

const arrMap = [1, 2, 3, 4, 5, 6];
let arrMap1 = [];
for (let i = 0; i < arrMap.length; i++) {
    const element = arrMap[i] * 5;
    arrMap1[i] = element;
}
console.log(arrMap);
console.log(arrMap1);
document.getElementById("map").innerHTML = `результат обробки коду: масив[${arrMap1}]`;
document.getElementById("map").style.color = "#133337";



const arrFilter = [1, 2, 3, 4, 5, 6];
let arrFilter1 = [];
for (let i = 0; i < arrFilter.length; i++) {
    if (arrFilter[i] % 2 == 0) {
        arrFilter1[i] = arrFilter[i];
    } 

   
}
console.log(arrFilter1);
console.log(arrFilter);
document.getElementById("filter").innerHTML = `результат обробки коду: масив[${arrFilter1}] не все зміг зрозуміти і зробити`;
document.getElementById("filter").style.color = "#133337";


const arrReduce = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < arrReduce.length; i++) {
    sum = arrReduce[i] + sum ;
    
}
console.log(arrReduce);
console.log(sum);
document.getElementById("reduce").innerHTML = `результат обробки коду:   ${sum}`;
document.getElementById("reduce").style.color = "#133337";