
function setuser(username){
    this.username = username
    console.log('hello')

}
function createUer(username,id,pass){
    setuser.call(this,username);
    this.id = id
    this.pass = pass
}

const data = new createUer('amresh','12',233);
console.log(data.username)