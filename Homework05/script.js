let random = Math.floor(Math.random() * 10) + 1;
let n;
do {
  n = +prompt("Nhập số");
  if (n > random) {
    console.log("Lớn hơn");
  } else if (n < random) {
    console.log("Nhỏ hơn");
  } else {
    console.log("Đúng");
  }
} while (n !== random);
