import { Seq } from 'immutable';

const printBestStudents = (grades) => {
  const seq = Seq(grades);

  const getStudent = seq.filter((value) => value.score > 70);

  const student = getStudent.toJS();

  const firstCap = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  Object.keys(student).map((key) => {
    student[key].firstName = firstCap(student[key].firstName);
    student[key].lastName = firstCap(student[key].lastName);
    return student[key];
  });

  console.log(student);
};

export default printBestStudents;
