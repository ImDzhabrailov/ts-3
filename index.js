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
// console.log("Дни недели:");
// for (const day in DaysOfWeek) {
//     if (isNaN(Number(day))) {
//         console.log(DaysOfWeek[day as keyof typeof DaysOfWeek]);
//     }
// }
        // 1. Работа с enum DaysOfWeek
        // Проблемный момент 1: Использование цикла for...in вместе с проверкой if (isNaN(Number(day))).
        // Почему это не лучшая практика:
        // Цикл for...in проходит по всем ключам объекта, и в случае числовых enum’ов он может возвращать и числовые
        // обратные сопоставления (reverse mapping). Для строковых enum’ов таких обратных сопоставлений нет,
        // поэтому проверка isNaN(Number(day)) всегда возвращает true – она здесь не нужна.
        // можно сделать так
    for (const day of Object.values(DaysOfWeek)) {
        console.log(day);
    }
//2
// // enum Months {
// //     JANUARY = "Январь",
// //     FEBRUARY = "Февраль",
// //     MARCH = "Март",
// //     APRIL = "Апрель",
// //     MAY = "Май",
// //     JUNE = "Июнь",
// //     JULY = "Июль",
// //     AUGUST = "Август",
// //     SEPTEMBER = "Сентябрь",
// //     OCTOBER = "Октябрь",
// //     NOVEMBER = "Ноябрь",
// //     DECEMBER = "Декабрь"
// // }
// // function getMonthName(monthNumber: number): void {
// //     if (monthNumber >= 1 && monthNumber <= 12) {
// //         const month = Months[Object.keys(Months)[monthNumber - 1] as keyof typeof Months];
// //         console.log(month);
// //     } else {
// //         console.log("Неверный номер месяца.");
// //     }
// // }
// // getMonthName(5);
// // // Проблемный момент 2: Получение названия месяца через Object.keys(Months)[monthNumber - 1].
// // // Почему это может быть ошибкой:
// // // Здесь мы полагаемся на порядок ключей, возвращаемых Object.keys.
// // // Хотя в большинстве современных движков JavaScript порядок ключей в 
// // // объектах соответствует порядку их определения, это не гарантируется стандартом
// // // для обычных (не числовых) ключей. Если в будущем порядок ключей изменится или enum будет
// // // дополнен/изменён, логика может нарушиться.
// // // Если требуется сопоставлять номер месяца с его названием, лучше завести массив с названиями месяцев:
// const monthNames = [
//     Months.JANUARY, Months.FEBRUARY, Months.MARCH, Months.APRIL,
//     Months.MAY, Months.JUNE, Months.JULY, Months.AUGUST,
//     Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER
// ];
// function getMonthName(monthNumber: number): void {
//     if (monthNumber >= 1 && monthNumber <= 12) {
//         console.log(monthNames[monthNumber - 1]);
//     } else {
//         console.log("Неверный номер месяца.");
//     }
// }
//3
// enum Colors {
//     RED = "Красный",
//     BLUE = "Синий",
//     GREEN = "Зеленый",
//     YELLOW = "Желтый"
// }
// function chooseColor(color: string): void {
//     const selectedColor = Colors[color.toUpperCase() as keyof typeof Colors];
//     if (selectedColor) {
//         console.log(`Выбран ${selectedColor} цвет`);
//     } else {
//         console.log("Неизвестный цвет!");
//     }
// }
// chooseColor("red");
// // Проблемный момент 3: Неправильное оформление строки с интерполяцией в console.log.
// // Почему это ошибка:
// // Для шаблонных строк в JavaScript/TypeScript необходимо использовать обратные кавычки (`).
// // Запись console.log(Выбран ${selectedColor} цвет); является синтаксически неверной – интерполяция
// // не распознается, и будет ошибка компиляции.
// // Оформить строку правильно:
// // console.log(`Выбран ${selectedColor} цвет`);
//4
// enum Planets {
//     MERCURY = 1,
//     VENUS,
//     EARTH,
//     MARS,
//     JUPITER,
//     SATURN,
//     URANUS,
//     NEPTUNE
// }
// function getPlanetOrder(planetName: string): number | string {
//     const planet = Planets[planetName.toUpperCase() as keyof typeof Planets];
//     return planet !== undefined ? planet : "Неизвестная планета.";
// }
// console.log(getPlanetOrder("Earth"));
// // Проблемный момент 4: Использование проверки if (planet) для числового значения.
// // Почему это может привести к ошибке:
// // При использовании числовых enum’ов возможно, что валидное значение может равняться 0.
// // В этом случае проверка if (planet) даст ложное срабатывание, так как 0 интерпретируется как falsy.
// // Почему в данном случае всё работает:
// // В представленном enum планет номера начинаются с 1 (MERCURY = 1), поэтому ситуация с 0 не возникает.
// // Для более надёжной проверки следует использовать сравнение с undefined.
//5
// // enum Fruits {
// //     APPLE = "Яблоко",
// //     PEAR = "Груша",
// //     ORANGE = "Апельсин"
// // }
// // function checkFruit(fruit: string): void {
// //     const selectedFruit = Fruits[fruit.toUpperCase() as keyof typeof Fruits];
// //     if (selectedFruit) {
// //         console.log("Этот фрукт вкусный!");
// //     } else {
// //         console.log("Неизвестный фрукт!");
// //     }
// // }
// // checkFruit("apple");
// // checkFruit("banana");
// // // Замечания по логике кода:
// // // Подход аналогичен предыдущим функциям – строка приводится к верхнему регистру и используется как ключ enum.
// // // Код корректно обрабатывает как известный фрукт ("apple", который преобразуется в ключ "APPLE"),
// // // так и неизвестный ("banana").
// // // Комментарий:
// // // Хотя ошибок здесь нет, можно отметить, что подобный подход требует от входных данных соответствия
// // // названиям ключей enum.
// // // Если ожидается ввод на другом языке или с другой структурой, может потребоваться более гибкая обработка.
// var Fruits;
// (function (Fruits) {
//     Fruits["apple"] = "\u042F\u0431\u043B\u043E\u043A\u043E";
//     Fruits["pear"] = "\u0413\u0440\u0443\u0448\u0430";
//     Fruits["orange"] = "\u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D";
// })(Fruits || (Fruits = {}));
// function checkFruit(fruit) {
//     var selectedFruit = Fruits[fruit.toUpperCase()];
//     if (selectedFruit) {
//         console.log("Этот фрукт вкусный!");
//     }
//     else {
//         console.log("Неизвестный фрукт!");
//     }
// }
// checkFruit("apple");
// checkFruit("banana");
