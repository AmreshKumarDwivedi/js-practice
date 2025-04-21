class User {
    constructor(username) {
        this.username = username;
    }

    get username() {
        return this._username.toUpperCase();
    }

    set username(value) {
        this._username = value;
    }
}

const chai = new User('amresh');
console.log(chai.username); // Outputs: "AMRESH"
