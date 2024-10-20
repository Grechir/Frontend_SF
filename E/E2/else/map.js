let map = new Map();

map.set('1', 'Петя');
map.set(2, 'Сергей');
map.set(true, "boolean");

// console.log(map.get(2));                      метод get
// console.log(map.keys(), map.values());        методы keys, values

console.log('len of the map is: ', map.size);

for (let key of map.keys()) {  // цикл for of
    console.log(typeof(key), ' - ', key);
}

