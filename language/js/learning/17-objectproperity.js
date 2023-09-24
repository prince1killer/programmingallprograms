const person = {
    first_name: "pranav",
    last_name: "kumar",
    Buying:"car",
    modal:{
        car1:"landLover",
        car2:"scorpo",
        car3:"farari",
        car4:"vaganer"
    },
    price:90
} 

person.quantity = 23;//this is for adding new key-value in object

//Here we can call in two ways
// first
console.log(person.first_name)
console.log(person.last_name)
console.log(person.Buying)
console.log(person.modal.car1)
console.log(person.quantity)
// console.log(person.car1)
// delete person.quantity;


person.quantity = 78;//update key-value pair

// Second
console.log(person["first_name"])
console.log(person["last_name"])
console.log(person["Buying"])
console.log(person["modal"]["car2"])
console.log(person["quantity"]);

delete person.quantity;//deleting key-value pair
console.log(person["quantity"]);