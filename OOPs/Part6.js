// Demystifying THIS Keyword in JavaScript 

// function Hi() {
//   this.hello = 'world'
//   console.log(this);
// }

// new Hi() 

// const user = {
//   firstName: 'Anurag',
//   lastName: 'Singh',
//   tags: ['a', 'b', 'c'],
//   printTags: () => {
//     console.log(this);
//   }
// }

// const body  = document.querySelector('body')

// body.addEventListener('click', (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(this);
// })

class User {
    constructor () {
      this.firstName = 'Anurag'
      console.log(this);
    }
  
    getUser() {
      console.log(this);
    }
  }


// Summary
/*
| Context                 | `this` Refers To                              |
|-------------------------|----------------------------------------------|
| Global Scope           | `window` (browser) / `global` (Node.js)      |
| Object Method          | The object itself                            |
| Regular Function       | `window` / `undefined` in strict mode        |
| Constructor Function   | The newly created object                     |
| Class Method          | The instance of the class                     |
| Arrow Function         | The surrounding lexical scope                |
| Event Listener         | The element that triggered the event         |
| `call()`, `apply()`, `bind()` | Explicitly defined `this`           |
*/
