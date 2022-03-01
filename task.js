const numbers = [1, 2, 3, 4, 5, 6];

separateArray(numbers);
// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

function separateArray(array) {
    let even = [], odd = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i])
        }
    }
    let res = { even: even, odd: odd }
    console.log(res);
    console.log(even);
    console.log(odd);
}