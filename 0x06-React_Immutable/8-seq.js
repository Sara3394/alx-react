import { Seq } from 'immutable';
//uses fromJS from the Immutable.js library

const firstLetterCap = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function printBestStudents(objects) {
  const bestStudents = Seq(objects)
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {
        ...student,
        firstName: firstLetterCap(firstName),
        lastName: firstLetterCap(lastName),
      };
    });
