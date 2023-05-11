import immutable from "immutable";
//uses fromJS from the Immutable.js library

const { Seq } = immutable;

const makeUppercase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function printBestStudents(object) {
  const bestStudents = Seq(object)
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {
        ...student,
        firstName: makeUppercase(firstName),
        lastName: makeUppercase(lastName),
      };
    });

  bestStudents.forEach((student) => console.log(student));
}
