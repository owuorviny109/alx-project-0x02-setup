/**
 * 1. Teacher Interface
 * - readonly names, mandatory fullTimeEmployee & location
 * - optional yearsOfExperience
 * - index signature allows extra props (e.g., contract)
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

/**
 * 2. Director Interface extends Teacher
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

/**
 * Teacher examples
 */
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Smith",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York",
};
const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Johnson",
  fullTimeEmployee: false,
  location: "London",
  contract: false,  // extra attribute allowed!
};
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};
console.log("Teacher3:", teacher3);

/**
 * Director example
 */
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};
console.log("Director example:", director1);

/**
 * 3. printTeacher function + interface
 */
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("John", "Doe"));    // "J. Doe"
console.log(printTeacher("Alice", "Smith")); // "A. Smith"

/**
 * 4. StudentClass
 */
// Constructor signature interface
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
// Instance shape interface
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Jane", "Doe");
console.log(student.displayName());    // "Jane"
console.log(student.workOnHomework()); // "Currently working"
