// Getter and Setter

// Key Concepts

// 🔹 Getter (get):
// Acts like a property (user1.fullName instead of user1.getFullName()).
// Used to retrieve values dynamically.

// 🔹 Setter (set):
// Allows modifying properties (user1.fullName = "Raj Verma").
// Useful for validations or modifying input before assignment.



class CreateUser {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
  
    getBirthYear() {
      return new Date().getFullYear() - this.age
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  
    set fullName(value) {
      const [firstName, lastName] = value.split(' ')
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const user1 = new CreateUser('Aman', 'Mishra', 32)
  const user2 = new CreateUser('Anurag', 'Singh', 72)
  
  // const user = {
  //   firstName: 'Anurag',
  //   lastName: 'Singh',
  //   get fullName() {
  //     return `${this.firstName} ${this.lastName}`
  //   },
  //   set fullName(value) {
  //     const [firstName, lastName] = value.split(' ')
  //     this.firstName = firstName
  //     this.lastName = lastName
  //   }
  // }
  
  // console.log(user.fullName);