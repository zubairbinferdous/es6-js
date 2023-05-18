const user = [
    {id:99 , name:'zubair' , job:'developer' , salary:90000},
    {id:11 , name:'khan' , job:'software' , salary:44000},
    {id:14 , name:'hake' , job:'web developer' , salary:90000}
]
console.log(user[0].name);
console.log(user);

const data = {
    salary: 5000,
    data:[
        {id:99 , name:'babu' , job:'car' },
        {id:11 , name:'nui' , job:'jam' },
    ],

    address:{
       street:{
        first:'hello its me',
        second:'hello this is 2nd',
        third:'hello this is me',
       },
       color: 'red',
       city:'dhaka'
    },
}

console.log(data.data[0].name);
console.log(data.address.street.first);
console.log(data.address?.street.first);
console.log(data.address.color);