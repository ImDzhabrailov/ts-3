//1
enum DaysOfWeek {
    MONDAY = "Понедельник",
    TUESDAY = "Вторник",
    WEDNESDAY = "Среда",
    THURSDAY = "Четверг",
    FRIDAY = "Пятница",
    SATURDAY = "Суббота",
    SUNDAY = "Воскресенье"
}
console.log("Дни недели:");
for (const day in DaysOfWeek) {
    if (isNaN(Number(day))) {
        console.log(DaysOfWeek[day as keyof typeof DaysOfWeek]);
    }
}

//2
enum Months {
    JANUARY = "Январь",
    FEBRUARY = "Февраль",
    MARCH = "Март",
    APRIL = "Апрель",
    MAY = "Май",
    JUNE = "Июнь",
    JULY = "Июль",
    AUGUST = "Август",
    SEPTEMBER = "Сентябрь",
    OCTOBER = "Октябрь",
    NOVEMBER = "Ноябрь",
    DECEMBER = "Декабрь"
}
function getMonthName(monthNumber: number): void {
    if (monthNumber >= 1 && monthNumber <= 12) {
        const month = Months[Object.keys(Months)[monthNumber - 1] as keyof typeof Months];
        console.log(month);
    } else {
        console.log("Неверный номер месяца.");
    }
}
getMonthName(5);

//3
enum Colors {
    RED = "Красный",
    BLUE = "Синий",
    GREEN = "Зеленый",
    YELLOW = "Желтый"
}
function chooseColor(color: string): void {
    const selectedColor = Colors[color.toUpperCase() as keyof typeof Colors];
    if (selectedColor) {
        console.log(Выбран ${selectedColor} цвет);
    } else {
        console.log("Неизвестный цвет!");
    }
}
chooseColor("red");

//4
enum Planets {
    MERCURY = 1,
    VENUS,
    EARTH,
    MARS,
    JUPITER,
    SATURN,
    URANUS,
    NEPTUNE
}
function getPlanetOrder(planetName: string): number | string {
    const planet = Planets[planetName.toUpperCase() as keyof typeof Planets];
    return planet ? planet : "Неизвестная планета.";
}
console.log(getPlanetOrder("Earth"));

//5
enum Fruits {
    APPLE = "Яблоко",
    PEAR = "Груша",
    ORANGE = "Апельсин"
}
function checkFruit(fruit: string): void {
    const selectedFruit = Fruits[fruit.toUpperCase() as keyof typeof Fruits];
    if (selectedFruit) {
        console.log("Этот фрукт вкусный!");
    } else {
        console.log("Неизвестный фрукт!");
    }
}
checkFruit("apple");
checkFruit("banana");