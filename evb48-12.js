/*12.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
var guestList = [" Sheikh Muhmmad bin Rashid Al Maktoum", "Al-Ameer Muhammad bin Salman", " Al-Ameer Muhammad bin Zayed"];
for (var i = 0; i < 3; i++) {
    var invitTxt = "\nGreetings ".concat(guestList[i], ",\n\n I hope you are in the best of health.Your prescence at a formal dinner at my residence a great honor. It is the celebration\nfor the great win of the Saudi National Football Teams's great win against Argentina in the world cup . ");
    console.log(invitTxt);
}
