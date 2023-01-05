const arr = [];
for (let i = 0; i < 10; i++) {
  let randNum = Math.floor(Math.random() * 10 + i);
  // console.log(randNum);
  arr.push(randNum);
}

const showMessage = (numArr) => {
  let HELLO_MESSAGE = "Hello ";
  for (const num of numArr) {
    console.log(`${HELLO_MESSAGE} ${num}`);
  }
}

showMessage(arr)
let [startValue] = arr
sumArr(startValue, ...arr)

function sumArr(startValue, ...args) {
  let sum = args.reduce((acc, v) => {return acc+v}, 0)
  console.log(`Sum is ${sum}`);
}

// console.log(HELLO_MESSAGE); // gives error cannot find variable outside scope


