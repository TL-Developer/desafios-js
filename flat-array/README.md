# Maruta Challange

This challange was sent by Maruta. It consists of a given array of nested object which should be flatted into only one array of those objects.

For example, the array bellow: 

```
const a = [{
        id: '1',
        nome: 'teste1',
        itens: [{
                id: '11',
                nome: 'teste11',
                itens: [{
                    id: '111',
                    nome: 'teste111'
                }]
            },
            {
                id: '1111',
                nome: 'teste1111',
                itens: [{
                    id: '11111',
                    nome: 'teste11111'
                }]
            }
        ]
    },
    {
        id: '2',
        nome: 'teste2',
        itens: [{
            id: '22',
            nome: 'teste22',
            itens: [{
                id: '222',
                nome: 'teste222'
            }]
        }]
    },
    {
        id: '3',
        nome: 'teste3',
        itens: [{
                id: '33',
                nome: 'teste33'
            },
            {
                id: '333',
                nome: 'teste333'
            }
        ]
    }
]
```
should result like this: 

```
[
    { 
        id: '1',
        nome: 'teste1'
    },
    { 
        id: '11',
        nome: 'teste11'
    }
    { 
        id: '111',
        nome: 'teste111'
    }, ...
]
```
