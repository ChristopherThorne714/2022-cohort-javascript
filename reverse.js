function reverse(input)
{
    // initialize two empty strings
    var word = "", output = "";
    // iterate through the input string using a for loop, stopping at input.length - 1 so that there isn't a space at the end. 
    for(var i = input.length - 1; i >= 0; i--) {
        // if the current iteration of input is a space, change output to add a space + whatever it was already
        if (input[i] == " ") {
            output = " " + word + output;
            // change word back to an empyy string because the current word has been reversed
            word = "";
        }
        else {
            //  if the current iteration is not a space, add it to the string 'word'
            word += input[i];
        }
    }
    // log the result in the console and return it.
    console.log(word + output);
    return word + output;
}
// function call with input string
reverse("Hello World ")