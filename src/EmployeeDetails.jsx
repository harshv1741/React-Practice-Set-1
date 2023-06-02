function EmployeeDetails() {
  const employees = [
    {
      name: 'Jack Smith',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 24000
    },
    {
      name: 'Mary Robbins',
      level: 3,
      dept: 'Fin',
      designation: 'Manager',
      salary: 28000
    },
    {
      name: 'Steve Williams',
      level: 4,
      dept: 'Ops',
      designation: 'President',
      salary: 35000
    },
    {
      name: 'Bob Andrews',
      level: 1,
      dept: 'Fin',
      designation: 'Trainee',
      salary: 16500
    },
    {
      name: 'Dave Martin',
      level: 2,
      dept: 'Fin',
      designation: 'Manager',
      salary: 21700
    },
    {
      name: 'Julia Clarke',
      level: 3,
      dept: 'Ops',
      designation: 'Manager',
      salary: 26900
    },
    {
      name: 'Kathy Jones',
      level: 4,
      dept: 'Tech',
      designation: 'President',
      salary: 42500
    },
    {
      name: 'Tom Bresnan',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 22200
    }
  ];

  const totalSalary = employees.reduce((accumulator, employee) => accumulator + employee.salary, 0);

  return (
    <div>
      <h3>List of Employees</h3>
      <ul>
        {/* Solution For Question 8, 9, 10, 11 Combined t*/}
        {employees.map((employee) => (
          <li
            key={employee.name}
            style={{
              backgroundColor: employee.level === 2 ? 'orange' : '',
              border: employee.designation === 'President' ? '4px solid orange' : '',
              padding: '4px'
            }}
          >
            Name: {employee.name}, level: {employee.level}, dept: {employee.dept}, designation: {employee.designation},
            salary: {employee.salary}, Total Salary Expense: {totalSalary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeDetails;
