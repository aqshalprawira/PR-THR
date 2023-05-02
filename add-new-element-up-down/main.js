function addNewElementUpDown(array, element, position) {
  if (position === 'up') {
    
    return [element, ...array];
  } else if (position === 'down') {
    
    return [...array, element];
  }
  //your code here!
}

console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, 'down'))
