let a = +prompt("Nhập số a");
let b = +prompt("Nhập số b");
for (let i = 1; i <= a; i++) {
  if (i % b === 0) {
    console.log(i);
  }
}
