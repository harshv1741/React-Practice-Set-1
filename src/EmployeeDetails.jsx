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
  return (
    <div>
      <h3>List of Employees</h3>
      <ul>
        {employees.map((employee) => (
          <li key={employee.level}>
            Name: {employee.name}, level: {employee.level}, dept: {employee.dept}, designation: {employee.designation},
            salary: {employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeDetails;
