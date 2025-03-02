// Classes in Javascript

class CreateUser {

    // constructor(firstName, lastName, age) initializes properties when an object is created.

    // for making private we can use #
    #age
    constructor(firstName, lastName, age) {
        // for making private we can use #
      this.firstName = firstName
      this.lastName = lastName
      this.#age = age
    }
  
    // Are methods inside the class, automatically added to the prototype (just like in constructor functions).
    getBirthYear() {
      return new Date().getFullYear() - this.#age
    }
    getFullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
  
  const user1 = new CreateUser('Aman', 'Mishra', 32)
  const user2 = new CreateUser('Anurag', 'Singh', 72)