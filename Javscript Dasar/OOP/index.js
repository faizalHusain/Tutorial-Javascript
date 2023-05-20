// class Person {
//   #name;
//   #age;
//   constructor(name, age) {
//     this.#name = name;
//     this.#age = age;
//   }
//   set personName(name) {
//     this.#name = name;
//   }
//   set personAge(age) {
//     this.#age = age;
//   }
//   get personName() {
//     return this.#name;
//   }
//   get personAge() {
//     return this.#age;
//   }
//   sayHello() {
//     console.log(
//       `Hello, my name is ${this.#name}, and i'm ${this.#age} years old`
//     );
//   }
// }
// const person = new Person("Faizal Husain", 20);
// person.sayHello();

// class Student extends Person {
//   #studentId;
//   constructor(name, age, studentId) {
//     super(name, age);
//     this.#studentId = studentId;
//   }
//   set studentId(studentId) {
//     this.#studentId = studentId;
//   }
//   get studentId() {
//     return this.#studentId;
//   }
//   sayHello() {
//     console.log(
//       `Hello, my name is ${this.personName}, and i'm ${this.personAge} years old, and my student id is ${this.studentId}`
//     );
//   }
// }
// const mhs = new Student("Faizal Husain", 20, "24060121140115");
// mhs.sayHello();

// Error Handling tanpa custom error
// Tanpa custom error
// try {
//   let nilai = 4;
//   if (nilai < 7) {
//     throw new Error("Nilai tidak boleh kurang dari 5");
//   }
// } catch (error) {
//   console.log(`${error.message}`);
// } finally {
//   console.log("ini adalah finally");
// }
// Error Handling
// class ValidationNilai extends Error {
//   constructor(message, field) {
//     super(message);
//     this.field = field;
//   }
// }
// try {
//   let nilai = 4;
//   if (nilai < 7) {
//     throw new ValidationNilai("tidak boleh kurang dari 5", "nilai");
//   }
// } catch (error) {
//   console.log(`${error.field} ${error.message}`);
// } finally {
//   console.log("ini adalah finally");
// }
