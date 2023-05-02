function removeLeftRight(arr, left, right) {
  let result = []
  if(left == 'left'){
    arr.shift()
  }else if(left == 'right'){
    arr.pop()
  }

  return arr
}

console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], 'right'))
