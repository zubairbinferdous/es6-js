class teamMember{
    name;
    location;
    constructor(name , location){
        this.name = name;
        this.location = location;
    }
    provide(){
        console.log(`${this.name} this is ok for that thanks`);
    }
}


class Instructor extends teamMember{
    designation = 'web course'
    team = 'web team'
    constructor(nameMe , locationMe){
       super(nameMe , locationMe);
    }
    startSupport(time){
        console.log(`this is support at ${time}`)
    }
    createQuiz(mod){
        console.log(`this is quiz at ${mod}`)
    }
   
}


class developer extends teamMember {
 
    designation = 'web course'
    team = 'web team'
    tech;
    constructor(nameMe , locationMe, techNow){
        super(nameMe , locationMe);
        this.tech = techNow;
    }
    developFeature(feature){
        console.log(`this is support at ${feature}`)
    }
    release(develop){
        console.log(`this is quiz at ${develop}`)
    }

}

const ali = new developer('ali khan' , 'dhaka' , 'font-end-developer');

// 1. optional chain 
student.mark?.math;
// map , filter , find
// forEach , reduce(advance),
// class,
// (option) inheritance , super 
// (must) prototypical inheritance

