function addTwoNum(num1,num2){
    console.log(num1+num2);
  

}

function addTwoNum2(num1,num2){
    return num1+num2;
  

}
addTwoNum(3,4);
console.log(addTwoNum2(3,4));// for return statement

function userLoggedIn(username){  //this is old method for check conditionn
    if(username === undefined){
        return `Please enter your name`;
        
    }
  return `${username} is login now`

}

console.log(userLoggedIn())


function userLoggedIn1(username = 'sam'){  //this is new method for check conditionn and u can also set default value
    if(!username){
        return `Please enter your name`;
        
    }
  return `${username} is login now`

}
console.log(userLoggedIn1());

// we can pass more argument using rest operatore which is also called spred in concat arry or object

function cartPrice(...price){
    return price;
}
//console.log(cartPrice(20,30,50));

function cartPrice1(val1,val2,...price){
    return val1,price,val2;
}
console.log(cartPrice1(20,30,50,60,70,800));


//Passing object in an function

let user = {
    name:'Amresh'
}

function passObject(myObj){
    return `${myObj.name} is here`

}

console.log(passObject(user)); // you can directly paas object also

//Passing array 
let userdata = [100,200,300]

function passArray(myArr){
    return myArr[1]

}

console.log(passArray(userdata));


