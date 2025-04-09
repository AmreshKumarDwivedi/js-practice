
//Truthy value --> '0',' ','False',[],{},function(){}
//false value --> 0,null,undefined,null

const user = {};
if((Object.keys(user).length === 0)){
    console.log('Hello')
}

//Nullish Collescing Operator

let var1 = 5;
 var1 = 10 ?? null;
 console.log(var1);
 var1 = undefined ?? 15;
 console.log(var1)

 //terniary operator

 let score1 = 200
 score1 > 100 ? console.log('greater than'):console.log('smaller');