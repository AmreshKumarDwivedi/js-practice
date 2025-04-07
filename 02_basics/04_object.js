let student = {
    userName:{
        name:{
            firstName:'Amresh',
            lastName:'Dwivedi'
        }
    }
}
console.log(student.userName.name.firstName);

//concat two objects
 let y = {
    name:'sone',
    city:'bihar'
 }
 let x = {
    name1:'alok',
    city1:'banaras'
 }
let z = Object.assign({},y,x)
let m = {...x,...y}
console.log(z);
console.log(m)
console.log(Object.keys(z));
console.log(Object.values(z));
