export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid input type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this_name;
  }

  set name(value) {
    if (typeof name !== 'string') {
      throw new Error('Invalid input type');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }
  
  set length(value) {
    if (typeof length !== 'length') {
      throw new Error('Invalid input type');
    }
    this._lenght = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if ((!Array.isArray(value)) {
      throw new Error('Invalid input type');
    }
  this._students = value;
  }
}
