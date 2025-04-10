//for of

let data = [1,2,3,4,5]
for(const num of data){
    console.log(num)
}

const map = new Map();
map.set("IN","INDIA"),
map.set("USA","AMERICA")

for(const [val,data] of map){
    console.log(`${val}---${data}`)
}

//--> for of is not work on object

const data1 = {
    name:"Amresh",
    age:23
}
for(key in data1){
    console.log(data1[key]);
}
//for in work on object and key but it does not work on map it gives index as key 


//foreach loop

const arrdata = [1,3,5,8];
arrdata.forEach((val,index,arr)=>{
console.log(`${val} index is ${index} and list is ${arr}`)
})


const languages = [
    {
        coding:'python',
        shortcut:'py'
    },
    {
        coding:'javascript',
        shortcut:'js'
    },
    {
        coding:'java',
        shortcut:'java'
    }
]
languages.forEach((val)=>{
    console.log(val.coding);
})