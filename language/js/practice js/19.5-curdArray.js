let animals = ["pig","lion","tiger","parrot"]
// ===============================================push() method=============================================
//Arrat.prototype.push()
//push method adds one or more element to the end of the array 
//which retur the new length of array

let countAnimal = animals.push("cow","dog","sheep");

console.log(animals);
console.log(countAnimal)

// ==================================================unshift() method============================================
//Array.prototype.unshift()
//unshift method also add element in array and return new length of array
//but different is it add value in starting and push() add in end

let countAnimal2 = animals.unshift("monkey","ant","cat");
console.log(animals)
console.log(countAnimal2)


// =================================================pop() method==================================================
//this pop() method is use to delete element from last and give new length of an array

let countPop = animals.pop(2);
console.log(animals)
console.log(countPop);