// Regular function

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     // getBirthYear: createUser.commonMethods.getBirthYear
//   }
//   return user
// }

// createUser.commonMethods = {
//   getBirthYear() {
//     return new Date().getFullYear() - this.age
//   },
// }

// Constructor function (CreateUser) is called with new, which:
// 1. Creates a new object.
// 2. Assigns properties (this.firstName, this.lastName, this.age).
// 3. Returns the object automatically.

function CreateUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

//   Prototype (CreateUser.prototype) stores shared methods (getBirthYear, getFullName) to save memory and improve efficiency.

CreateUser.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

CreateUser.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};


// new keyword ensures each instance (user1, user2) gets unique properties but shares methods.
const user1 = new CreateUser("Aman", "Mishra", 32);
const user2 = new CreateUser("Anurag", "Singh", 72);
