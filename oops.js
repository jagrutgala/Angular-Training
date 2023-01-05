class Person {
  #_name
  constructor(name) {
    this.#_name = name
  }

  get name() {
    return this.#_name``
  }

  set name(newName) {
    if (newName.length < 3) {
      console.log("Name should be more than 2 letters");
    }
    this.#_name = newName
  }

  static greet(person) {
    console.log(`Hello ${person.name}. How are you from?`);
  }
}

const p1 = new Person("H")

console.log(`Name: ${p1.name}`);
p1.name = "Hello"
console.log(`Name: ${p1.name}`);

Person.greet(p1)
// p1.#_name = "Hello" //

