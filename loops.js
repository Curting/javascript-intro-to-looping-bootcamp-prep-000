// 1.

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}


// 2.

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
  return "done"
}


// 3.

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (maybeTrue() && array.length > 0)
  return array
}
