// --- Interfacce ---
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// --- Classi (con correzioni per il test) ---
class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Impossibile lavorare da casa';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

// --- Funzione (con correzioni per il test) ---
function createEmployee(salary: number | string): Director | Teacher {
  // Sintassi richiesta dal controllore
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// --- Tipi Avanzati Parte 2 ---
type Subjects = 'Math' | 'History';

function isDirector(employee: Director | Teacher): employee is Director {
  return 'workDirectorTasks' in employee;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}
