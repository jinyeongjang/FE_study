'use strict';
let num = 5;
// num = 'five';
let a = null;
// console.log(a.name);
let obj = {
    width: 320,
    height: 640,
};
let area = obj.width * obj.height;
function add(a, b) {
    return a + b;
}
// add(1);
function getName() {
    return '';
}
const myName = getName();
function getDouble(value) {
    if (value < 10) {
        return value * 2;
    } else {
        return 0;
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
    }
}
if ('0' === 0) {
    // true
}
let fruits = ['apple', 'banana', 'orange'];
// fruits.push(5);
const arr = [1, 2, 3];
const [x, y, z, p] = arr; // p: undefined
