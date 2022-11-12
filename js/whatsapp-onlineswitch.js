const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];

if (day != "Sunday" && day != "Saturday" && new Date().getHours() >= 8 && new Date().getHours() < 16 ) {
	
  document.getElementById("OnlineStatus").innerHTML = "🟢 Online";
}
else if (day == "Saturday" && new Date().getHours() >= 8 && new Date().getHours() < 13) {
  document.getElementById("OnlineStatus").innerHTML = "🟢 Online";
}else {
  document.getElementById("OnlineStatus").innerHTML = "🔴 Offline";
}