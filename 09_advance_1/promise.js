
const data = new Promise(function(resolve,reject){
setTimeout(function(){
console.log('hello')
resolve();
},0)
})
data.then(function(){
    setTimeout(function(){
    console.log('hiiiii')
},10)
})