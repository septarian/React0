
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

const pares = [       //Array de Arrays
    [1, { id: 1, name: 'Jotaro' }],
    [2, { id: 2, name: 'Joseph' }],
    [3, { id: 3, name: 'Johnny' }]
];

function toPairs(arr) {
  let par = [];

  for (i in arr) {
    par[i] = [arr[i].id, arr[i]]

  }
  return par
}

let resultado = toPairs(array);
console.log(resultado);