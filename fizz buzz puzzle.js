// take user input

x = parseInt(prompt("Enter a number", 15));

var i;

for (i = 0; i >= x; i++) {
    
    if (i % 3 == 0) {
        console.log(i);

    } else if(i % 5 == 0 && i % 3 == 0) {
        console.log(i);

    } else {
    console.log(i);
    }
}