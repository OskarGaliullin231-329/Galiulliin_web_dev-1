let dictOfDicts = {}

for (let i = 0; i < 10; i++) {
    let dict = {};
    for (let j = 0; j < 10; j++) {
        dict[String(j)] = j;
    }
    dictOfDicts[String(i)] = dict;
}

console.log(dictOfDicts);
