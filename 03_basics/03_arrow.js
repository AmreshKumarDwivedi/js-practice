// Explicit return: The function uses the `return` keyword to explicitly return the result.
const user = (num1, num2) => {
    return num1 + num2;
}
console.log(user(3, 5)); // Output: 8

// Implicit return: The function directly returns the result without using the `return` keyword (single expression).
const user1 = (num3, num4) => (num4 + num3);
console.log(user1(3, 7)); // Output: 10

// Implicit return: The function directly returns the result without using the `return` keyword (single expression).
const user2 = (num3, num4) => num4 + num3;
console.log(user2(4, 7)); // Output: 11
