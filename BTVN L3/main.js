//bai1
const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];

const newArr = arr1.filter(item => arr2.includes(item));

console.log(newArr);

//bai2
const arr = [1, 54, 6, 7];

const newArr1 = arr.map(item => item + 5);

console.log(newArr1);

//bai3
function removeElements(m, n) {
    const valuesToRemove = [1, 8, 10, 96, 7];
  
    const filteredM = m.filter(item => !valuesToRemove.includes(item));
    const filteredN = n.filter(item => !valuesToRemove.includes(item));
  
    return [filteredM, filteredN];
  }
  
  const m = [1, 2, 4, 5, 6, 7];
  const n = [3, 5, 675, 8, 96];
  
  const result = removeElements(m, n);
  console.log(result);
  
  //bai4
  const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
  ];
  
  const playersModified = players.reduce((obj, player) => {
    obj[player.id] = player;
    return obj;
  }, {});
  
  console.log(playersModified);
  