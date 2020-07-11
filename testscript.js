var userName = window.prompt('enter your name:', 'default');
today = new Date();

xmas = new Date("December 25, 2020");
msPerDay = 24 * 60 * 60 * 1000 ;
timeLeft = (xmas.getTime() - today.getTime());


e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
e_hrsLeft = (e_daysLeft - daysLeft)*24;
hrsLeft = Math.floor(e_hrsLeft);
minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);

document.write("There are only " + daysLeft + " days " + hrsLeft +" hours and " + minsLeft + " minutes left Until December 25th 2020<P>");

window.alert('Hello ' + userName);

console.log('Hello '+ userName )