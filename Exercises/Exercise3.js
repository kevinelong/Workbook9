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
    //ALL EMPLOYEES HAVE A METHOD(AKA FUNCTION) TO GRANT A PROMOTION TO A NEW JOB
    promote(newJobTitle, newPayRate){
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }
    getIntro(){
        return "Hi my name is " + this.fullName + ", I am a " +this.jobTitle;
    }
}
/* TEST */
//CREATE A NEW INSTANCE OF EMPLOYEE AND ASSIGN TO LOVAL VARIABLE
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
//EXERCISE 3
let intro = employee1.getIntro();
console.log(intro);
//EXERCISE 2 test output
employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
