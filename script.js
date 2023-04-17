var backlist = ["Faces/blue.jpg","Faces/green.jpg","Faces/grey.jpg","Faces/orange.jpg","Faces/pink.jpg","Faces/purple.jpg","Faces/red.jpg","Faces/yellow.jpg"]
var beardlist = ["Beards/brown.png","Beards/yellow.png","Beards/grey.png","Beards/green.png","Beards/blue.png","Beards/darkblue.png","Beards/purple.png"]
var hatlist = ["Hats/pink.png","Hats/green.png","Hats/yellow.png"]

back_number = Math.floor(Math.random() * backlist.length);
document.getElementById("background").src = backlist[back_number];

beard_number = Math.floor(Math.random() * beardlist.length);
document.getElementById("beard").src = beardlist[beard_number];

hat_number = Math.floor(Math.random() * hatlist.length);
document.getElementById("hat").src = hatlist[hat_number];

