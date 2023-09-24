//Return the first(least) index of an element within the array equal
//to an element, or -1 if none is found. it search the element from the 0th index
//if there is no match from then it return -1 


let name = ["pranav", "kumar", "pranav kumar","Pranav", "Kumar","PranavKumar","pranavkumar","pranav"];
console.log("It will find number from 0 index  and searching name is pranav = "+name.indexOf("pranav kumar"));
console.log("It will find number from 3 index = "+name.indexOf("pranav kumar",3));


//now we are seeing lastIndexOf here it will work as best work flow 
//the different between lastIndex and indexOf is lastindex start searching from  last index
//where index start seatching from 0th index

console.log("searching from lastIndex name is pranav = "+name.lastIndexOf("pranav"))