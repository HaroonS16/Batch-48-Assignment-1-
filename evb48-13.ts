/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let guestList1 = [" Sheikh Muhmmad bin Rashid Al Maktoum","Al-Ameer Muhammad bin Salman"," Al-Ameer Muhammad bin Zayed"];

console.log(`
Unfortunately,${guestList1[1]} will not be able join you at dinner due to unforeseen circunstances.`);

for(let i=0 ; i<3 ; i++){


guestList1[1] = "Sheikh Hammad bin Tamim Al Thani"

let invitTxt1 = `
Greetings ${guestList1[i]},

 I hope you are in the best of health.Your prescence at a formal dinner at my residence a great honor. It is the celebration
for the great win of the Saudi National Football Teams's great win against Argentina in the world cup . `

console.log(invitTxt1);
}