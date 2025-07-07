//string type
let name1: string = 'John Doe';
console.log(name1); // Output: John Doe
//Representing a sequence of characters 

//2number type
let age: number = 30;
console.log(age); // Output: 30
//Representing a numerical value 

//3boolean
let isAdmin: boolean = true;
console.log(isAdmin); // Output: true
//Representing a true or false value 

//4array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
//Representing a collection of values 

//5enum
enum Color {
  Red,
  Green,
  Blue
}

let favoriteColor: Color = Color.Green;
console.log(favoriteColor); // Output: 1
//Represent a set of named values 

//6tuple

let person: [string, number] = ['John Doe', 30];
console.log(person); // Output: ['John Doe', 30]
//Representing an array with a fixed of an element 

//7any type

let data: any = 'Hello World';
data = 123;
console.log(data); // Output: 123
//Represents a value of any type

//8void type

function logMessage(): void {
  console.log('Hello World');
}

logMessage(); // Output: Hello World
//Represents the absence of any type

export{}