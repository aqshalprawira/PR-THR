function addMoreData(object, key, value) {
  return Object.assign({}, object, { [key]: value });
  // your code here
}

console.log(addMoreData({ name: 'Edo', age: 20 }, 'hobbies', ['coding', 'reading']))
