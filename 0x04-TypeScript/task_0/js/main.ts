// src/js/main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  { firstName: "Vincent", lastName: "Owuor", age: 22, location: "Kakamega" },
  { firstName: "Fidel", lastName: "Otieno", age: 20, location: "Kisumu" },
];

function renderStudentsTable(): void {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

function onReady(): void {
  renderStudentsTable();
}

// Ensures the code runs after the DOM is fully parsed
if (document.readyState !== "loading") {
  // DOM is already ready
  onReady();
} else {
  document.addEventListener("DOMContentLoaded", onReady);
}
