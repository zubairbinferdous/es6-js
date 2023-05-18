const allNumbers = [2 ,4, 5, 6, 7, 9];
function getNumber(number) {
    const output = [];
    for (const num of number) {
        const newNum = double(num) ;
        output.push(newNum);
    }
    return output;
}

// function doubleOld(dub){
//     return dub * 2;
// }

const double = add => add * 2;
console.log(getNumber(allNumbers));

const makeDouble = allNumbers.map(double);
console.log(makeDouble);

console.log(allNumbers);

const makeDouble2 = allNumbers.map( x => x * 3);
console.log(makeDouble2);

// map
// map use in array
// get every element of array
// do want u do with that
// store the result in array
// and return the array ..



const num = [20, 30, 60, 44, 23, 31, 15];
const half = num.map((n) => n / 2);
console.log(half);

const name = ["babi", "man", "rok"].map((num) => num[2]);
console.log(name);

const name3 = ["babi", "man", "rok"].map((num) => num.length);
console.log(name3);

const products = [
  { id: 1, name: "zubi", salary: 4000 },
  { id: 1, name: "king", salary: 3000 },
  { id: 1, name: "rani", salary: 6000 },
];

const findSalary = products.map((items) => items.salary);
console.log(findSalary);

num.forEach((e) => {
  let n = e + 30;
  console.log(n);
});

const age = num.filter((number) => number > 20);
console.log(age);

const even = num.filter((number) => number % 2 === 0);
console.log(even);

const find = num.find((number) => number % 5 === 0);
console.log(find);

// reduce ***
// notation.js 


// syntactic sugar
// object -> method , property 
class Instructor {
    name;
    designation = 'web course'
    team = 'web team'
    location;
    constructor(nameMe , locationMe){
        this.name = nameMe;
        this.location = locationMe;
    }
    startSupport(time){
        console.log(`this is support at ${time}`)
    }
    createQuiz(mod){
        console.log(`this is quiz at ${mod}`)
    }
}

const amir = new Instructor('ami' , 'dhaka');
const beer = new Instructor('zubair' , 'Bangladesh dhaka');
console.log(amir);
console.log(beer);
amir.startSupport('9.00');
amir.createQuiz('mood val na');



