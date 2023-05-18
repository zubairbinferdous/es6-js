// 1. var let const  
const number = [20 , 30 ,60 ];
let nameS = 'zubair';
nameS = 'pakhi';

// 2. default parameters 

function salary( salary , tax = 0.15 , bonus = 0) {
    const amount = salary - salary * tax ; 
    const total = amount + bonus;
    return total;
}


// 3 template string 
const element = `
<h1>hello</h1>
<p>${nameS}</p>
`
//arrow function 
const fun = x => x*2;
const salaryArrow = (salary , tax , bonus) => salary + salary * tax + bonus;

//5 spread 
//Array and object reference dore rakhe .

const ages = [30 , 20 , 50];
const newAge = [...ages, 22, 24, 23];

// destructuring 

const { x, y , ...z} ={x:40 , y:50 , name:'zubair' , school:'bank high' , age:44 };
const [num , mun, ...pox] = ['hello' , 'khan' , 400 ,600, 909];


