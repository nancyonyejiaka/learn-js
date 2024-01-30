const o = {
  msg: "An object",
  person: {
    firstName: "Grace",
    lastName: "Hopper",
    age: 89,
    fullName: () => {
      return this.firstName + " " + this.lastName;
    },
  },
};

/*
When we run, we will get undefined because fullName is an arrow function that 
is called outside the o object.
If we want to run a function outside the lexical scope where it is defined, use regular function notation.
If we want to run a function within the lexical scope where it is defined, use the arrow function
*/
let x = o.person.fullName();
console.log(x);

/*
If we define firstName and lastName within 
*/
