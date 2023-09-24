//Array prototype find()
//arr.find(element[,index[,array]])(thisArg)

//it return found element array if some array satisfies the testing function , or undifine  if not found
// Only problem is that it return only one problem

const prices = [100,150,200,250,300,350,400,450,500,550,600,650,700];

// const myPrince = prices.find((ele)=>{
//     return ele > 400;
// })
// console.log(myPrince);


//so there is another
//method called 
// prices.findIndex(()=>{return inc < 100})
//it gives two result if number find the it represent 0 if not then -1
console.log(prices.findIndex((cal) => cal < 200))

