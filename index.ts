//1
function sayHello(name: string): string {
    return `Де дик хийл, ${name}!`;
}
console.log (sayHello("Ваша"));

//2
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
console.log (addNumbers(6, 4));

//3
type Person = {
    firstName: string;
    lastName: string;
    age: number;
};
function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}
const person: Person = {
    firstName: "Ваша",
    lastName: "Чапаев",
    age: 130,
};
console.log(getFullName(person));

//4
type Point = {
    x: number;
    y: number;
};
function getDistance(point1: Point, point2: Point): number {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
const pointA: Point = { x: 1, y: 2 };
const pointB: Point = { x: 5, y: 10 };
console.log(getDistance(pointA, pointB));

//5
function filterByType<T>(arr: T[], type: string): T[] {
    return arr.filter((item) => typeof item === type);
}

const mixedArray = [1, "good by", true, 130, "world", false, { key: "value" }];

const filteredNumbers = filterByType(mixedArray, "number");
console.log(filteredNumbers);

const filteredStrings = filterByType(mixedArray, "string");
console.log(filteredStrings);

const filteredBooleans = filterByType(mixedArray, "boolean");
console.log(filteredBooleans);