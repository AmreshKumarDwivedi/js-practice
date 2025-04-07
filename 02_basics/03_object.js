//objects

let village = Symbol('Katka')
let student = {
    name:"Amresh",
    village:[village],
    CITY:"GORAKHPUR"

}
console.log(student.name) // this is not a prefered method
console.log(student['village','CITY']); //Alway use this method to print object 
student['name'] = 'Gorakh';
//console.log(student.name)
//console.log(student)
//Object.freeze(student); --> It is used to not make change in object
student['name'] = 'Prince';
//console.log(student)
student.greetings = function(){
    console.log('Hello amresh')
}
student.greetings1 = function(){
    console.log(`Hello amresh ${this.CITY}`)
} 
console.log(student.greetings());
console.log(student.greetings1());

