function Student() {
  const student = {
    name: 'John Doe',
    english: 90,
    maths: 80,
    computers: 70
  };

  const gradesAssignment = (total) => {
    if (total >= 225) {
      return 'A';
    } else if (total >= 180) {
      return 'B';
    } else if (total >= 150) {
      return 'C';
    } else {
      return 'D';
    }
  };

  const total = student.english + student.maths + student.computers;

  return (
    <div>
      <h3>Student Data</h3>
      <h3>
        <ul style={{ listStyle: 'none' }}>
          <li>Name: {student.name}</li>
          <li>English: {student.english}</li>
          <li>Maths: {student.maths}</li>
          <li>Computers: {student.computers}</li>
          <li>Total Marks: {total}</li>
          <li>Grades: {gradesAssignment(total)}</li>
        </ul>
      </h3>
    </div>
  );
}

export default Student;
