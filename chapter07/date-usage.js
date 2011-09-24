var y = +prompt("What year were you born in?");
var m = +prompt("What month were you born in (1-12)?") - 1;
var d = +prompt("What day of the month were you born on?");
var birthday = new Date(y, m, d);
var dayNames = "Sun|Mon|Tues|Wednes|Thurs|Fri|Satur".split("|");
alert("That was a " + dayNames[birthday.getDay()] + "day");
var today = new Date();
var differenceInMillis = today.getTime() - birthday.getTime();
var differenceInDays = Math.floor(differenceInMillis / 86400000);
alert("That was " + differenceInDays + " days ago");