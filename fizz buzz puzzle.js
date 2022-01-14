// take user input

function fizzbuzz(x){
    //var i;
    // Create a for loop to iterate from 0 to the input
    for (let i = 1; i <= x; i++) {

        //if the iterator is divisible by 15, then its divisible by both 5 and 3 as well, then print fizz buzz
        if(i % 15 == 0) {
            console.log("Fizz Buzz");

        //if the current iteration is divisible by 3, print fizz
        }else if (i % 3 == 0) {
            console.log("Fizz");
        
        //If the current iteration is divisible by 5, print 
        } else if(i % 5 == 0) {
            console.log("Buzz");


        //otherwise print i to the console
        } else {
        console.log(i);
        }
    }
}

x = parseInt(prompt("Enter a number", 15));
fizzbuzz(x);
// I have no idea why this doesn't work. 