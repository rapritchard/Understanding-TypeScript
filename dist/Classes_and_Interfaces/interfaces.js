"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.age = 25;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        console.log("Hi!");
    }
}
let user1;
user1 = new Person();
user1.greet("Hi there - I am");
console.log(user1);
//# sourceMappingURL=interfaces.js.map