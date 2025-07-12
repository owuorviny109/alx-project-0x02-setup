/**
 * 5. Interfaces and Classes
 */

// 5.1 DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 5.2 TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 5.3 Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// 5.4 Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

/**
 * 5.5 createEmployee function:
 * Returns a new Teacher or Director based on salary.
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Examples
console.log(createEmployee(200));    // Teacher {}
console.log(createEmployee(1000));   // Director {}
console.log(createEmployee("$500")); // Director {}

/**
 * 6. isDirector and executeWork
 */

// Type predicate: checks if instance is Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Executes appropriate work method based on type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Examples
console.log(executeWork(createEmployee(200)));  // "Getting to work"
console.log(executeWork(createEmployee(1000))); // "Getting to director tasks"

/**
 * 7. String Literal Types and teachClass
 */
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Examples
console.log(teachClass("Math"));    // "Teaching Math"
console.log(teachClass("History")); // "Teaching History"
