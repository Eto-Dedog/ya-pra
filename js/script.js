const guestsInfo = [
    { name: "Саша", age: 19 },
    { name: "Катя", age: 21 },
    { name: "Миша", age: 17 },
    { name: "Федя", age: 23 },
    { name: "Клава", age: 22 }
]
const data = guestsInfo;

const reducer = (pre,cur)=>pre+cur;
function calcAvgAge(array) {
    let sumAge = array.reduce((pre, cur) => pre + cur.age, 0) / array.length;
    console.log(sumAge);

}

calcAvgAge(data);