import a from "./array-teste.js"

let flatArray = (ar) => {
    var arrayFinal = [];
    (function flat(arr) {
        arr.map(o => {
            var obj = {};
            Object.keys(o).forEach(x => {
                (o[x].constructor == Array) ?
                flat(o[x]):
                    obj[x] = o[x];
            })
            console.log(JSON.stringify(obj))
            arrayFinal.push(obj);
        })
    })(ar)
    return arrayFinal;
}

flatArray(a);