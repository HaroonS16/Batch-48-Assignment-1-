/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.*/

let guestList2 = [" Sheikh Muhmmad bin Rashid Al Maktoum","Al-Ameer Muhammad bin Salman"," Al-Ameer Muhammad bin Zayed"];

guestList2.push("Cristiano Ronaldo");// adding another guest at the end

guestList2.unshift("Imran Khan");// adding another guest to the start

guestList2.splice(3 , 0 , "Prince Al Waleed bin Talaal");//adding a new guest in the middle

for(let i=0 ; i<6 ; i++){

    var invitTxt2 = `
    Greetings ${guestList2[i]},
    
     I hope you are in the best of health.Your prescence at a formal dinner will be considered a great honor. It is the celebration
    of the Saudi National Football Teams's great win against Argentina in the World Cup.
    
    I am very happy to inform you that I have arranged for more of us to get together at this dinner. `

    console.log(invitTxt2,'\n');
}
   
console.log('No. of Guest that are joining us at this dinner:',guestList2.length);


