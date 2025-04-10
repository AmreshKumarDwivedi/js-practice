
const data = [1,2,3,4,5,5,6,7,8]

const newnum = data.filter((num)=> num > 3);
//console.log(newnum);
const newnum1 = data.filter((val)=>{
    if(val < 5){
        return val;
    }
})
//console.log(newnum1)

let userdata = data.map((num1)=>{
    return num1
})
console.log(userdata)