    let counter = CreatCounter();
    let counter2 = CreatCounter(); 
    
    function CreatCounter(){
        return{
            count:0,
            increment: function(){
                this.count++;//here what this do first we had writen counter.count++; and now see then we get result
            }
        }
    }
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter2.increment(); 
    counter2.increment();
    counter2.increment();
    counter2.increment();

console.log(counter);
console.log(counter2);
console.log(this);


