/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guestList3=["Imran Khan",
               "Sheikh Muhmmad bin Rashid Al Maktoum",
               "Al-Ameer Muhammad bin Zayed",
               "Prince Al Waleed Bin Talaal",
               "Al-Ameer Muhammad bin Salman",
               "Cristiano Ronaldo"]; 


/*guestList3.push("Cristiano Ronaldo");// adding another guest at the end

guestList3.unshift("Imran Khan");// adding another guest to the start

guestList3.splice(2 , 0 , "Prince Al Waleed bin Talaal");//adding a new guest in the middle*/
console.log(guestList3.length);
for (let i = 0; i < 4; i++) {
    if (guestList3[i]) {
      const sorryMessage = `
        Regrettably ${guestList3[i]},
        I would not be able to accommodate you at this dinner party today due to poor communication and arrangements by the venue administration. I do apologize for this late and unfortunate news.`;
  
      console.log(sorryMessage);
    }
  }
  
  guestList3 = guestList3.slice(4);
  

  for(let i=0 ; i<2 ; i++){
    if(guestList3[i]){
        console.log(`Greetings ${guestList3[i]}
        I hope you are in the best of health.Your prescence at a formal dinner will be considered a great honor. It is the celebration
        of the Saudi National Football Teams's great win against Argentina in the World Cup. Due to poor administration by the venue i ahve room
        to invite only 2 guests today, thankfully you are still invited to this diner \n`);
    }
  }


/**In this code, the loop has been modified to iterate only three times (for (let i = 0; i < 3; i++)) to display the first three guests. An if statement is added to check if the guest at index i exists before generating the apology message. After displaying the messages, the guestList3 array is updated using slice to remove the first three guests, keeping only the remaining guests whose reservations have not been canceled. 
let guestList3: string[] = [
    "Imran Khan",
    "Sheikh Muhmmad bin Rashid Al Maktoum",
    "Al-Ameer Muhammad bin Zayed",
    "Prince Al Waleed Bin Talaal",
    "Al-Ameer Muhammad bin Salman",
    "Cristiano Ronaldo"
  ];
  
  console.log(guestList3.length);
  
  for (let i = 0; i < 4; i++) {
    if (guestList3[i]) {
      const sorryMessage = `
        Regrettably ${guestList3[i]},
        I would not be able to accommodate you at this dinner party today due to poor communication and arrangements by the venue administration. I do apologize for this late and unfortunate news.`;
  
      console.log(sorryMessage);
    }
  }
  
  guestList3 = guestList3.slice(4);
  console.log(guestList3);*/

   