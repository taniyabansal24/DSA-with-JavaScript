// OOPs and Factory Functions 

// Four pillars of Object Oriented Programming
// Encapsulation - Data Protection, Controlled Access, Code Maintainability,
// Abstraction - Hiding the complexcity
// Inheritance
// Polymorphism

// Factory Functions => Reusability – Easily create multiple objects with shared logic.nbc 
 

function createUser(firstName, lastName, age) {
    const user = {
      firstName,
      lastName,
      age,
      getAgeYear () {
        return new Date().getFullYear() - user.age
      },
    }
    return user
  }
  
  const user1 = createUser('Aman', 'Mishra', 32)
  const user2 = createUser('Anurag', 'Singh', 72)