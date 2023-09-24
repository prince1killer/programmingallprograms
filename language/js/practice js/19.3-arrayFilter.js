//IT WILL CLEAR OUR WORK THAT IS 
//it return all new arrat contain all new element

let price = [100,200,300,400,500,600,700,800,900,1000]
// console.log(price.filter((cal)=> cal > 500))

    // OR

let myPrice = price.filter((cal) => {
    return cal > 500;
})
console.log(myPrice)


let person = [
    {
        name:"pranav",
        roll:24
    },
    {
        name:"kumar",
        roll:34
    },
    {
        name : "rahul",
        roll:12
    }
]


console.log(person.filter((calw,ind)=> calw.name = 0))