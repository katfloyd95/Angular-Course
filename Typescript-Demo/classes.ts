import { User, Login } from "./interface";

// class Employee {
//   id!: number;

//   name!: string;

//   address!: string;
// }

// let john = new Employee();

// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";

// console.log(john);

// Second method:

class Employee implements Login {
  #id: number;
  name: string;
  address: string;

  get empId(): number {
    return this.#id;
  }
  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  Login(): User {
    return { name: "John", id: 1, email: "" };
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "John", "Highway 71");
console.log(john);

john.empId = 100;
console.log(john.empId);

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
}

let address = john.getNameWithAddress();
console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
