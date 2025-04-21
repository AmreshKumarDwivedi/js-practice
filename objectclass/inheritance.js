class user{
    constructor(username){
        this.username = username
    }
}
 class data1 extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
     static namedata(){
        console.log('hello',this.username)
    }

}
const chai = new data1('amresh','ak@gmail.com')
console.log(chai.namedata())