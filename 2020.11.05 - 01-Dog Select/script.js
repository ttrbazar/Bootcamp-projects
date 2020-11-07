const dog = {
    name: "Somedogname",
    legs: 4,
    color: "brown",
    age: 3,
    bark() {
        return "woof woof";
    }
}

// 4. Print the dog object on the console

console.log(dog);

// 5. Set new properties to the dog object: breed, getDogInfo

dog.breed = "alabay";

console.log(dog);

// 6. The getDogInfo property is a method which returns Name and Age of the dog in a string.

dog.getDogInfo = function() {
    return this.name + " - " + this.age;
}

console.log(dog);

console.log(dog.getDogInfo());

dog.name = "Some other dog name";
dog.age = 5;

console.log(dog.getDogInfo());

// 7. Create a method called calcAge, returning humanAge as a property of this object.

dog.calcAge = function() {
    return this.age < 2 ? 10.5 : 2 * 10.5 + (this.age - 2) * 4;
}

console.log(dog.calcAge());

dog.getDogInfo = function() {
    return `My name is ${this.name}. I am ${this.calcAge()} years old in human years which is ${this.age} years old in dog years.`;
}

// 8. Change getDogInfo return to this string:

console.log(dog.getDogInfo());

console.log(dog);