// 1

// 5 = 5 * 4 * 3 * 2 * 1
let sum = 1;
function numbers(num) {
    if (num <= 1) {
        return num;
    }

    return num * numbers(--num);
}
console.log(numbers(5));
// console.log(sum);
