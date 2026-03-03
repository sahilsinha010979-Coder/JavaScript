/* Prompt the user to enter their full name. Generate a username for them based on the input.
 start username with @, followed by their fullname ending with the fullname length */
 let fullname = prompt("Enter your full name");
 let username = "@" + fullname + fullname.length;
 console.log(`Your Username is ${username}`);