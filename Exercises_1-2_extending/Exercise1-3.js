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
class Employee extends Person { //extends === "is a kind of"
    constructor(firstName, lastName, jobTitle, payRate) {
        super(firstName, lastName); //call parent constructor
        this.jobTitle = jobTitle
        this.payRate = payRate
    }
    // You can also use methods defined in the parent class
    // from the extended class, and even override and replace them.
    getGrossPay(hoursWorked){
        return hoursWorked * this.payRate;
    }
}

//TEST
dave = new Employee("Dave", "Doohan", "Janitor", 20.00);
console.log(dave.getGrossPay(40));

jane = new Employee("Jane", "Goodall", "Researcher", 40.00);
console.log(jane.getGrossPay(30));
