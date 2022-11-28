// This is the parent class (AKA base class)
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getIntro() {
        return "My name is " + this.getFullName() + "!";
    }
}

// This is the extended class (AKA child class)
class Student extends Person { //extends === "is a kind of"
    constructor(firstName, lastName, grade, major) {
        super(firstName, lastName); //call parent constructor
        this.grade = grade
        this.major = major
    }
    // You can also use methods defined in the parent class
    // from the extended class, and even override and replace them.
    getIntro() {
        return "My name is " + this.getFullName() +
            " and I am a " + this.grade +
            " and I study " + this.major + "!";
    }
}

//TESTS

// Use the parent class
let sallie = new Person("Sallie", "Sheppard");
console.log(sallie.getIntro());

//Use the student class
let tim = new Student("Tim", "Kellogg", "Sophomore", "Engineering");
console.log(tim.getIntro());

/* EXPECTED OUTPUT:
        My name is Sallie Sheppard!
        My name is Tim Kellogg and I am a Sophomore and I study Engineering!
*/