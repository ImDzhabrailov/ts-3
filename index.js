//1
function sayHello(name) {
    return "\u0414\u0435 \u0434\u0438\u043A \u0445\u0438\u0439\u043B, ".concat(name, "!");
}
console.log(sayHello("Ваша"));
//2
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// console.log(addNumbers(6, 4));
//3
// function getFullName(person) {
//     return "".concat(person.firstName, " ").concat(person.lastName);
// }
// var person = {
//     firstName: "Ваша",
//     lastName: "Чапаев",
//     age: 130,
// };
// console.log(getFullName(person));
//4
// function getDistance(point1, point2) {
//     var dx = point2.x - point1.x;
//     var dy = point2.y - point1.y;
//     return Math.sqrt(dx * dx + dy * dy);
// }
// var pointA = { x: 1, y: 2 };
// var pointB = { x: 5, y: 10 };
// console.log(getDistance(pointA, pointB));
// //5
// function filterByType(arr, type) {
//     return arr.filter(function (item) { return typeof item === type; });
// }
// var mixedArray = [1, "good by", true, 130, "world", false, { key: "value" }];
// var filteredNumbers = filterByType(mixedArray, "number");
// console.log(filteredNumbers);
// var filteredStrings = filterByType(mixedArray, "string");
// console.log(filteredStrings);
// var filteredBooleans = filterByType(mixedArray, "boolean");
// console.log(filteredBooleans);
