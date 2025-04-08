var a = 10;
let b = 30; //--> Global scope access in anywhere
const c =40;
 if(true){
   
    let b1 = 50; //--> block scope access in anywhere
    const c1 =60;

    console.log(b1,c1)
 }

 //nested level function

 function firsrNum(){
   let a4 = 5; //--> it is acess by inner function 
   function innserFun(){
    let a5 = 7;
    console.log(a4)
   }
   innserFun();

 }
 firsrNum();

 // We can also take function in variable but it is only access after declaration

 const username = function(){
    console.log('Hello World')
 }
 console.log(username());