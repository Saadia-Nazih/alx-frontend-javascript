// Interfaccia base dal compito precedente
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Nuova interfaccia che ESTENDE Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Esempio di utilizzo
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));
