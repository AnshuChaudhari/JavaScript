function old35(n) {
    return (n%15!==0) && (n%3==0 || n%5==0);
}

console.log(old35(3)); // true
console.log(old35(10)); // true
console.log(old35(15)); // false
console.log(old35(5)); // true
console.log(old35(9)); // true
console.log(old35(8)); // false
console.log(old35(7)); // false
console.log(old35(6)); // true
console.log(old35(17)); // false
console.log(old35(18)); // true
console.log(old35(29)); // false
console.log(old35(20)); // true
console.log(old35(21)); // true
console.log(old35(22)); // false
console.log(old35(45)); // false
console.log(old35(99)); // true

