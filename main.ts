

// Definizione del Tipo Stringa Letterale
type Subjects = 'Math' | 'History';

// Funzione "Type Predicate"
function isDirector(employee: Director | Teacher): employee is Director {
  return 'workDirectorTasks' in employee;
}

// Funzione che usa il Type Predicate
function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Funzione che usa il Tipo Stringa Letterale
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  // Se non è 'Math', deve essere per forza 'History'
  return 'Teaching History';
}



executeWork(createEmployee(200));
// Output atteso: Getting to work

executeWork(createEmployee(1000));
// Output atteso: Accesso alle attività del direttore

console.log(teachClass('Math'));
// Output atteso: Teaching Math

console.log(teachClass('History'));
// Output atteso: Teaching History
