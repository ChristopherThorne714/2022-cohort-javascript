var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";
n = "10";

//this function shifts the current letter of the string by n spaces
function shift(n){
    //for loop that goes until the length of the alphabet
	for (let i = 0; i < alphabet.length; i++){
        //add n to i and mod that by the length of the alphabet to make sure we stay within the bounds of letters to get the true offset
		let offset = (i + n) % alphabet.length;
        //construct a new alphabet with the desired offset
		newalpha += alphabet[offset];
	}
}

message="Hello There"
//encode a message with the new alphabet we created
function encode(message){
    let result = "";
    //convert message to lowercase so the letters can match the alphabet string
    message = message.toLowerCase();
    //iterate through the whole message
    for (let i = 0; i < message.length; i++){
        //get the corresponding index from message that relates to alphabet
        let index = alphabet.indexOf(message[i]);
        //get the letter from the new alphabet that corresponds to the index value and add it to the result string
        result += newalpha[index];
    }
    console.log(result);
    return result;
}
//idk why this isn't logging to the console.