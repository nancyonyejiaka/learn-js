class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  get persons() {
    return this._persons;
  }

  set persons(p) {
    this._persons = p;
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this.persons.push(p)
  }

  pop() {
    return this.persons.pop().age
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
