"use strict";

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
  introduction() {
    const div = document.querySelector("div");
    div.innerText = `Hi, my name is ${this.name}. I'm ${this.age} years old and I work as a ${this.occupation}.`;
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
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new Form(myForm);
  form.handleSubmit();
  event.target.reset();
});
