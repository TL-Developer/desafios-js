import a as arrayMaruta from "./array-teste.js";

var arrayUnicoObjeto = []
var convertUniqueArray = function(arr) {
    arr.forEach((obj) => {
        Object.keys(obj).reduce((newObj, current, indice, objAtualArray) => {
            if (Array.isArray(obj[current])) {
                convertUniqueArray(obj[current]);
            } else {
                if (!indice % 2 == 0) {
                    newObj[objAtualArray.slice(0, indice)] = obj[objAtualArray.slice(0, indice)];
                    newObj[current] = obj[current];
                    arrayUnicoObjeto.push(newObj);
                } else {
                    return newObj;
                }
            }
        }, {});
    })
};
convertUniqueArray(arrayMaruta);