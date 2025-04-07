const student = {
    name:"Amresh",
    id:"2222"
};
const {name,id} = student
console.log(name)
console.log(id);

//you can also chang variable name like this
const {name:newname,id:newid} = student
console.log(`this is ${newname}`)