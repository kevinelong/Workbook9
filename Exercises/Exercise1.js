class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    //DEFINE A PROPERTY THAT CALLS A FUNCTION USING "get"
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}

/* TEST */

//CREATE A NEW INSTANCE OF EMPLOYEE AND ASSIGN TO LOVAL VARIABLE
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
//ACCESS A PROPERTY AND PRINT IT IN A TEMPLATE STRING
console.log(`Employee ${employee1.firstName} created`);

//NEXT
//ORIGINAL console.log(`Employee ${employee1.fullName} created`);
console.log(`Employee ${employee1.fullName} created`);

console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

//SECOND EMPLOYEE
let employee2 = new Employee(2, "Kevin", "Long", "Geek at Large", 120.00);
console.log(`Employee ${employee2.fullName} created`);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);
