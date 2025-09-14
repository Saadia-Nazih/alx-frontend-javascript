
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('Oggetto Director:');
console.log(director1);

interface TeacherData {
  firstName: string;
  lastName: string;
}

interface printTeacherFunction {
  (teacher: TeacherData): string;
}

function printTeacher({ firstName, lastName }: TeacherData): string {
  return `${firstName}. ${lastName}`;
}

console.log('Output di printTeacher:');
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));

