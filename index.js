//1
// var DaysOfWeek;
// (function (DaysOfWeek) {
//     DaysOfWeek["MONDAY"] = "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A";
//     DaysOfWeek["TUESDAY"] = "\u0412\u0442\u043E\u0440\u043D\u0438\u043A";
//     DaysOfWeek["WEDNESDAY"] = "\u0421\u0440\u0435\u0434\u0430";
//     DaysOfWeek["THURSDAY"] = "\u0427\u0435\u0442\u0432\u0435\u0440\u0433";
//     DaysOfWeek["FRIDAY"] = "\u041F\u044F\u0442\u043D\u0438\u0446\u0430";
//     DaysOfWeek["SATURDAY"] = "\u0421\u0443\u0431\u0431\u043E\u0442\u0430";
//     DaysOfWeek["SUNDAY"] = "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435";
// })(DaysOfWeek || (DaysOfWeek = {}));
// console.log("Дни недели:");
// for (var day in DaysOfWeek) {
//     if (isNaN(Number(day))) {
//         console.log(DaysOfWeek[day]);
//     }
// }
//2
// var Months;
// (function (Months) {
//     Months["JANUARY"] = "\u042F\u043D\u0432\u0430\u0440\u044C";
//     Months["FEBRUARY"] = "\u0424\u0435\u0432\u0440\u0430\u043B\u044C";
//     Months["MARCH"] = "\u041C\u0430\u0440\u0442";
//     Months["APRIL"] = "\u0410\u043F\u0440\u0435\u043B\u044C";
//     Months["MAY"] = "\u041C\u0430\u0439";
//     Months["JUNE"] = "\u0418\u044E\u043D\u044C";
//     Months["JULY"] = "\u0418\u044E\u043B\u044C";
//     Months["AUGUST"] = "\u0410\u0432\u0433\u0443\u0441\u0442";
//     Months["SEPTEMBER"] = "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C";
//     Months["OCTOBER"] = "\u041E\u043A\u0442\u044F\u0431\u0440\u044C";
//     Months["NOVEMBER"] = "\u041D\u043E\u044F\u0431\u0440\u044C";
//     Months["DECEMBER"] = "\u0414\u0435\u043A\u0430\u0431\u0440\u044C";
// })(Months || (Months = {}));
// function getMonthName(monthNumber) {
//     if (monthNumber >= 1 && monthNumber <= 12) {
//         var month = Months[Object.keys(Months)[monthNumber - 1]];
//         console.log(month);
//     }
//     else {
//         console.log("Неверный номер месяца.");
//     }
// }
// getMonthName(5);
//3
var Colors;
(function (Colors) {
    Colors["RED"] = "\u041A\u0440\u0430\u0441\u043D\u044B\u0439";
    Colors["BLUE"] = "\u0421\u0438\u043D\u0438\u0439";
    Colors["GREEN"] = "\u0417\u0435\u043B\u0435\u043D\u044B\u0439";
    Colors["YELLOW"] = "\u0416\u0435\u043B\u0442\u044B\u0439";
})(Colors || (Colors = {}));
function chooseColor(color) {
    var selectedColor = Colors[color.toUpperCase()];
    if (selectedColor) {
        (Выбран, $, { selectedColor: selectedColor }, цвет);
    }
    else {
        console.log("Неизвестный цвет!");
    }
}
chooseColor("red");
// //4
// var Planets;
// (function (Planets) {
//     Planets[Planets["MERCURY"] = 1] = "MERCURY";
//     Planets[Planets["VENUS"] = 2] = "VENUS";
//     Planets[Planets["EARTH"] = 3] = "EARTH";
//     Planets[Planets["MARS"] = 4] = "MARS";
//     Planets[Planets["JUPITER"] = 5] = "JUPITER";
//     Planets[Planets["SATURN"] = 6] = "SATURN";
//     Planets[Planets["URANUS"] = 7] = "URANUS";
//     Planets[Planets["NEPTUNE"] = 8] = "NEPTUNE";
// })(Planets || (Planets = {}));
// function getPlanetOrder(planetName) {
//     var planet = Planets[planetName.toUpperCase()];
//     return planet ? planet : "Неизвестная планета.";
// }
// console.log(getPlanetOrder("Earth"));
// //5
// var Fruits;
// (function (Fruits) {
//     Fruits["APPLE"] = "\u042F\u0431\u043B\u043E\u043A\u043E";
//     Fruits["PEAR"] = "\u0413\u0440\u0443\u0448\u0430";
//     Fruits["ORANGE"] = "\u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D";
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