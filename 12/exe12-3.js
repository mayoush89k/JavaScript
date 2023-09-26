const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};
// 1.
function findPerson(persons, id) {
  const currentTeacher = persons.teachers.find((teachers) => teachers.id == id);
  const currentStudent = persons.students.find((students) => students.id == id);
  return currentStudent || currentTeacher;
}

console.log("Student with id 10 is: ", findPerson(school, 10));

//2.
function assignStudent(studentId, TeacherSubject) {
  const currentStudent = findPerson(school, studentId);
  const currentTeacher = school.teachers.find((teacher, index) => {
    teacher.subjects.forEach((subject) => {
      if (subject == TeacherSubject) {
        if (school.teachers[index].capacityLeft > 0) {
          school.teachers[index].capacityLeft--;
          school.teachers[index].students.push(currentStudent);
          console.log(
            `${currentStudent.name} has been added to ${TeacherSubject} list`
          );
        } else
          console.log(
            `There is no place for ${currentStudent.name} to Subject "${TeacherSubject}"`
          );
      }
    });
  });
}
assignStudent(10, "history");
assignStudent(11, "ethics");
assignStudent(12, "ethics");
assignStudent(13, "chemistry");

// 3.
function assignTeachersSubject(TeacherID, newSubject) {
  school.teachers.forEach((teacher) => {
    if (
      teacher.id === parseInt(TeacherID) &&
      !teacher.subjects.includes(newSubject)
    ) {
      teacher.subjects.push(newSubject);
      console.log(
        `Subject ${newSubject} has been added to teacher ${teacher.name}`
      );
    }
  });
}

assignTeachersSubject(2, "Maths");

// 4.
// I am creating a filter that receiving students that have 'h' as first letter of their name
function firstLetter(students, letter) {
    return students.filter((student) => student.name.charAt(0).toUpperCase() === letter.toUpperCase())
}

console.log(
  "student's name that first letter h are : ",
  firstLetter(school.students, "h")
);
