function filterByType(arr: unknown[], type: string): unknown[] {
    return arr.filter((item) => typeof item === type);
}

const mixedArray = [1, "good by", true, 130, "world", false, { key: "value" }];

const filteredNumbers = filterByType(mixedArray, "number");
console.log(filteredNumbers);

const filteredStrings = filterByType(mixedArray, "string");
console.log(filteredStrings);

const filteredBooleans = filterByType(mixedArray, "boolean");
console.log(filteredBooleans);