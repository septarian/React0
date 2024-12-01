const pares = [       //Array de Arrays
    [1, { name: 'Jotaro' }],
    [2, { name: 'Joseph' }],
    [3, { name: 'Johnny' }]
];

const array = [{
    id: 1,
    name: 'Jotaro'
  }, {
    id: 2,
    name: 'Joseph'
  }, {
    id: 3,
    name: 'johnny'
  }];
  
  function toCollection(par) {
    let arr = []
    
    for(let idx in par) {
        arr[idx] = par[idx][1]
        arr[idx].id = par[idx][0]
    }
    return arr
  }
  
  let resultado = toCollection(pares);
  console.log(resultado);
  console.log(array);

