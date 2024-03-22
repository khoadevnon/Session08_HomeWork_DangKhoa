let n = +prompt("Nhập số n");
let sum = 0;
for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    sum = sum + i;
  }
}
if (sum === n) {
  console.log("Số hoàn hảo");
} else {
  console.log("Không phải số hoàn hảo");
}
