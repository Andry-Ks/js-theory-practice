// Nested Structures - Objects and Arrays

// 1. Object inside object
const student = {
  name: "Anna",
  contact: {
    email: "anna@example.com",
    phone: "123-456-789",
  },
};

console.log(student.contact.email); // anna@example.com

// 2. Array inside object
const team = {
  name: "Developers",
  members: ["Alice", "Bob", "Charlie"],
};

console.log(team.members[1]); // Bob

// 3. Object inside array
const users = [
  { id: 1, name: "Max" },
  { id: 2, name: "Lena" },
];

console.log(users[0].name); // Max

// 4. Deeply nested structure
const company = {
  name: "TechCorp",
  departments: [
    {
      name: "Engineering",
      employees: [
        { name: "Alice", role: "Frontend" },
        { name: "Bob", role: "Backend" },
      ],
    },
    {
      name: "Design",
      employees: [
        { name: "Sue", role: "UX" },
      ],
    },
  ],
};

console.log(company.departments[0].employees[1].role); // Backend

// 5. Looping through nested data
company.departments.forEach((dept) => {
  console.log("Department:", dept.name);
  dept.employees.forEach((emp) => {
    console.log(" -", emp.name, "(", emp.role, ")");
  });
});