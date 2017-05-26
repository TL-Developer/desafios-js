[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(novoArrayNumeros, valorAtual, indice) {
    let indiceObjetoTelefones = Math.floor(indice / 2);
    if (indice % 2 === 0)
        novoArrayNumeros[indiceObjetoTelefones] = { telefones: [] };
    novoArrayNumeros[indiceObjetoTelefones].telefones.push({ numero: valorAtual });
    return novoArrayNumeros;
}, []);