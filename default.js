function num( numOne , numTwo) {
    // if (numTwo === undefined) {
    //     numTwo = 50;
    // }
    numTwo = numTwo || 70 ;
    const total = numOne + numTwo;
    return total;
}

function num(numOne , numTwo = 66) {
    const total = numOne + numTwo;
    return total;
}
const result = num(10 , 6 );
console.log(result);