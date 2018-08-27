function less20(n) {
   return (n+1)%20==0 || (n+2)%20==0;
}

console.log(less20(18)); // true
console.log(less20(19)); // true
console.log(less20(20)); // false
console.log(less20(8)); // false
console.log(less20(17)); // false
console.log(less20(23)); // false
console.log(less20(25)); // false
console.log(less20(30)); // false
console.log(less20(31)); // false
console.log(less20(58)); // true
console.log(less20(59)); // true
console.log(less20(60)); // false
console.log(less20(61)); // false
console.log(less20(62)); // false
console.log(less20(1017)); // false
console.log(less20(1018)); // true
console.log(less20(1019)); // true
console.log(less20(1020)); // false
console.log(less20(1021)); // false
console.log(less20(1022)); // false
console.log(less20(1023)); // false
console.log(less20(37)); // false

