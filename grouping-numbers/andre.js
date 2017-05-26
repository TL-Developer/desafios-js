//JESUS SLICE ARRAY
[0, 1, 2, 3, 4, 5].map((i) => {
    return { 'numero': i }
}).reduce((j, e, s, us) => {
    return (s % 2 == 0) ? j.concat({ 'telefones': us.slice(s, s + 2) }) : j
}, [])