function filterByType(arr, type) {
    return arr.filter(function (item) { return typeof item === type; });
}
var mixedArray = [1, "good by", true, 130, "world", false, { key: "value" }];
var filteredNumbers = filterByType(mixedArray, "number");
console.log(filteredNumbers);
var filteredStrings = filterByType(mixedArray, "string");
console.log(filteredStrings);
var filteredBooleans = filterByType(mixedArray, "boolean");
console.log(filteredBooleans);
