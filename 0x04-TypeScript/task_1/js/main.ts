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
// (Puoi aggiungere questo codice in fondo al file main.ts del Task 1)

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Esempio di utilizzo
console.log(printTeacher("John", "Doe"));
// Output atteso: J. Doe
