/*
let num = [5, 8, 2, 9, 3]
for (c = 0; c < num.length; c++) {
    console.log(num[c])
}
for (c in num) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
console.log(num.indexOf(10))
*/
function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
console.log(parimpar(12))