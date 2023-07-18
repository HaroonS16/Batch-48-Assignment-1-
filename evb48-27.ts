/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

var current_users = ["John","Larry","Adam","Eva","Arnold"];
var new_users = ["Jordan","Sam","Mary","John","Arnold"];

for(let i=0 ; i<5 ; i++){
    if(new_users[i] == current_users[0] || new_users[i] == current_users[0].toUpperCase()){
        console.log(`The username ${new_users[i]} is already taken try another \n`)
    }
    else if (new_users[i] == current_users[1] ||new_users[i] == current_users[1].toUpperCase()){
        console.log(`The username ${new_users[i]} is already taken try another \n`)
    }
    else if(new_users[i] == current_users[2] ||new_users[i] == current_users[2].toUpperCase()){
        console.log(`The username ${new_users[i]} is already taken try another\n`)
    }
    else if (new_users[i] == current_users[3] ||new_users[i] == current_users[3].toUpperCase()){
        console.log(`The username ${new_users[i]} is already taken try another \n`)
    }
    else if(new_users[i] == current_users[4] ||new_users[i] == current_users[4].toUpperCase()){
        console.log(`The username ${new_users[i]} is already taken try another \n`)
    }
    else if (new_users[i] == "" || new_users[i] == undefined){
        
        console.log(`Error! username can not be empty. \n`);
    }
        

     else{
console.log(`username ${new_users[i]}  is available \n`);
     }
    }
    
