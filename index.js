// LEVEL 0

var numberA = 10
let numberB = 099
const numberC = 0.02

console.log(numberA);
console.log(numberB);
console.log(numberC);

// LEVEL 1

console.log(1+2);
console.log(10-2);
console.log(2*2);
console.log(6/3);
console.log(15%2);

// LEVEL 2

console.log("whats"+"up");
console.log(true-false);
console.log(222*287498274893);
console.log(1000000000/5);
console.log(999%2);


// LEVEL 3

var numberZ = [123, 456, 789];
console.log(numberZ);

var numberX = [234, 567, 899];
console.log(numberX);

var numberXZ = numberX.concat(numberZ)
console.log(numberXZ);

console.log(numberXZ.pop());
console.log(numberXZ.pop());
console.log(numberXZ.pop());
console.log(numberXZ);

//var numberJ = numberZ.push(222);
numberZ.push(222)
console.log(numberZ.length);

//loop using for
for (var i = 0; i < numberZ.length; i++) {
  console.log("! ", numberZ[i]);
}

//loop using for (reverse)
for (var i = numberZ.length-1; i >= 0; i--) {
  console.log("!! ", numberZ[i]);
}

//loop using forin
for (var i in numberZ) {
  console.log(numberZ[i]);
}
