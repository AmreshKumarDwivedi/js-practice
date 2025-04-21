//Object Literal
const user = {
    username:'Amresh',
    userDetail:function(){
        console.log(`${this.username}`)
    }
}

console.log(user.userDetail());


//Constructor
function user1(username, uderdetail, isLoggedin) {
    this.username = username;
    this.uderdetail = uderdetail;
    this.isLoggedin = true; // Ignoring passed `isLoggedin`, always setting to true
    this.greetings = function () {
        console.log(`${this.uderdetail}`);
    };
    // `return this` is optional in a constructor function called with `new`
}

// Create new user objects
const userA = new user1('amresh', 'From katka', 1);
const userB = new user1('amreshdubey', 'From katka', 1);

// These will print the objects with all their properties
console.log(userA);
console.log(userB);

// Call the `greetings` method on the instance
userA.greetings(); // Output: "From katka"
userB.greetings();