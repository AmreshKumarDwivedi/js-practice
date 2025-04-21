function newfun(num){
    return 5*num;

}
newfun.ttle = '2';
console.log(newfun(5))
console.log(newfun.prototype);
console.log(newfun.ttle);

function newdata(username,score){
    this.username = username
    this.score = score
}
newdata.prototype.printme = function(){
    console.log(`${this.score}`)
}
newdata.prototype.increment = function(){
    console.log(`${this.username}`)
}
const fname = new newdata('amresh',190)
const fname1 = new newdata('gaurav',290)
fname.printme();
fname1.increment();


const heroPower = {
    thor:'hammer',
    spiderman:'sling'
}