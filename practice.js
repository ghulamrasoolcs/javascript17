console.log("Q#1")
for (var i = 200; i >= 0; i -= 3)
  console.log(i);

console.log("Q#2")
var i = 1;
while (i < 11) {
  console.log("Ghulam Rasool");
  i++;
}


console.log("Q#3")
var a = 0;
var n = 1;
while (n <= 10) {

  if (n % 2 == 0) {
    a = a + n;
  }
  n++
}
console.log("Sum of 1 to 10 even numbers is ", a);


console.log("Q#4")
i = 1;
do {
  console.log(i)
  i++;
} while (i <= 5);

console.log("Q#5")
function sum(a, b) {
  console.log(a + b)
}
sum(3, 4)
sum(4, 9)


console.log("Q#6")
function Area(width, height) {
  area = height * width;
  console.log("Area is: ", area)
}
// let width = prompt("Enter the width...")
// let height = prompt("Enter the height...")
Area(width, height)
Area(6, 8)