function removeUnrelated(object, key){
    let arrKeys = key.split(',');
  arrKeys.forEach((value) => {
    delete object[value.trim()]}
    );
  return object;
}

console.log(removeUnrelated({ name
    : 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'name'))