// function declaration  
function Name(first , second) {
    const total = first + second;
    return total;
}

// function Expression 
const add1 = function add(first , second) {
    const total = first + second;
    return total;
}

// anonymous function
const add2 = function (first , second) {
    const total = first + second;
    return total;
}

function add45(first , second) {
    const total = first + second;
    return total;
}

const add33 = function (first , second) {
    return first + second;
}

const arrow = (num , num2) => num + num2 ;
const result = arrow(340 , 530);
console.log(result);


const add = (num , mun) => num + mun ;
const add23 = (num , mun) => num * mun ;
const no = () => 'hello';
const one = (num) => num + 'hello';
const multi = (e ,r ,t) => {
    const num = e + r ;
    const mun = num / t ;
    return mun ;
}
console.log(add(40 , 50));
console.log(no());
console.log(one('khan '));
console.log(multi(10 , 20 , 5));


// spread 
let oneS = [20 , 30 , 40 ];
let longNum = Math.max(...oneS);
console.log(oneS);
console.log(...oneS);
console.log(longNum);

const num2 = [...oneS];
const num22 = [ 500,...oneS , 700];
num2.push(100);
oneS.push(80);
console.log(oneS);
console.log(num2);
console.log(num22);

// destructuring object nad array 
const person = {
    name:'hello',
    age: 49,
    address:'hello me to you',
    phone: 1924495997
}

const phone = person.phone;
const {age} = person;
console.log(phone);
console.log(age);

const {nameS , roll} = {
    nameS:'hello',
    roll: 469,
}
console.log(nameS , roll);

const[king , queen] = ['zubair' , 'pakhi'];
console.log(king);



function get() {
    return ['ala' , 'home'];
}
console.log(get()[0]);
console.log(get());
const [baba , ma] = get();
console.log(ma , baba);
