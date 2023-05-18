// let and const 
// let can be resign value
// const cannot resign value 
// let and var are block scope

let money = 50 ;
money = 60;
console.log(money);

const bank = 'olla bank';
// bank = 'hello bank';
const Account = bank + ' 0912344';
console.log(Account);

const number = [20 , 30];
// number = [40 , 50 ];
number.push(60);
number[1] = 1000;
console.log(number);

const student = {
    name: 'hello me',
    school: 'bangladesh bank' 
}

// student = {
//     name: 'hanif khan',
// }
student.name = 'hanif khan';
console.log(student);

for (let i = 0; i < 5; i++) {
    const name = i;
    console.log(name);  
}




