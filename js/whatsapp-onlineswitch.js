const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
if (day == "Monday") {
	if (new Date().getHours() >= 8 && < 16 ) {
  document.getElementById("OnlineStatus").innerHTML = "Online";}
}
else if (day == "Tuesday") {
	if (new Date().getHours() >= 8 && < 16 ) {
  document.getElementById("OnlineStatus").innerHTML = "Online";}
}
else if (day == "Wednesday") {
	if (new Date().getHours() >= 8 && < 16 ) {
  document.getElementById("OnlineStatus").innerHTML = "Online";}
}
else if (day == "Thursday") {
	if (new Date().getHours() >= 8 && < 16 ) {
  document.getElementById("OnlineStatus").innerHTML = "Online";}
}
else if (day == "Friday") {
	if (new Date().getHours() >= 8 && < 16 ) {
  document.getElementById("OnlineStatus").innerHTML = "Online";}
}
else if (day == "Saturday") {
	if (new Date().getHours() >= 8 && < 1 ) {
  document.getElementById("OnlineStatus").innerHTML = "Online";}
}
else {
  document.getElementById("OnlineStatus").innerHTML = "Offline";
}