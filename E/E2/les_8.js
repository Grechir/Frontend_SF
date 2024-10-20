let dict = new Map()

dict.set('key1', 'prop1')
dict.set('key2', 2)
dict.set('key3', true)
dict.set(false, 'prop4')
dict.set(5, 'prop5')

for (let key of dict.keys()) {
    let value = dict.get(key);
    console.log(`Ключ - ${key}, Значение - ${value}`);
}

