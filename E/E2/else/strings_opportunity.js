let firstName= 'Ivan';
let lastName = 'Ivanov';
function getFullName(strings, firstNameExp, lastNameExp) {
    let str0 = strings[0];// "My  first name is "
    let str1 = strings[1]; // " and the last "
    return `${str0}${firstNameExp}${str1}${lastNameExp}`;
}
let result= getFullName`My first name is ${ firstName} and the last ${ lastName }`;
console.log(result);

