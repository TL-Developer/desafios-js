//VERSAO 1
[111, 222, 333, 444, 555, 666].reduce((acumulado, atual, indice) => {
    if (indice % 2 === 0) {
        return acumulado.concat([{
            telefones: [{ numero: atual }]
        }])
    }

    acumulado.slice(-1)[0].telefones.push({ numero: atual });
    return acumulado;
}, [])

//VERSAO 2
[111, 222, 333, 444, 555, 666, 777].map(item => ({ numero: item })).reduce((acumulado, atual, indice, array) => {
    return indice % 2 === 0 ?
        acumulado.concat([{
            telefones: [
                atual,
                array[indice + 1] || null
            ]
        }]) :
        acumulado;
}, [])


//VERSAO 3
[111, 222, 333, 444, 555, 666, 777].map(item => ({ numero: item })).reduce((acumulado, atual, indice, array) => {
    return indice % 2 === 0 ?
        acumulado.concat([{
            telefones: [
                atual,
                array[indice + 1] || null
            ]
        }]) :
        acumulado;
}, [])