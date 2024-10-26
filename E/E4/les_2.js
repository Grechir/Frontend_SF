let str = 'prop2'
const obj = {
    'prop1': 'value1',
    'prop2': 'value2',
    'prop3': 'value3',
    'prop4': 'value4',
}

function obj_prop_check (str, obj) {
    for (let key in obj) {
        if (key === str) {
            return true
        }
    }
    return false
}

console.log(obj_prop_check(str, obj))