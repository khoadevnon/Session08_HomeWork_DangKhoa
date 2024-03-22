let n = +prompt("Nhập số n");
let giaithua = 1;
for (let i = 1; i <= n; i++) {
  giaithua = giaithua * i;
}
console.log(`Giai thừa của ${n} là ${giaithua}`);
