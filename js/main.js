"use strict";

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
  introduction() {
    const div = document.querySelector("div");
    const div2 = document.createElement("div");
    div2.innerText = `Hi, my name is ${this.name}. I'm ${this.age} years old and I work as a ${this.occupation}.`;
    document.body.append(div2);
  }
}

class Form {
  constructor(form) {
    this.form = form;
  }
  handleSubmit() {
    const nameInput = this.form.name.value;
    const ageInput = this.form.age.value;
    const ocupattionInput = this.form.occupation.value;
    const person = new Person(nameInput, ageInput, ocupattionInput);
    person.introduction();
  }
}

const myForm = document.querySelector("form");
const form = new Form(myForm);
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  form.handleSubmit();
  event.target.reset();
});
