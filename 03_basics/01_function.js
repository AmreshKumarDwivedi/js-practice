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
console.log(userLoggedIn1())