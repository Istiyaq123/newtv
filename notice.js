var notice = document.getElementById("info");
var home = document.getElementById("homeback");

notice.innerHTML = "<strong>&copy2020 Pok&eacute;mon / &copy The Pok&eacute;mon Company / &copy The Pok&eacute;mon Company / &copy DuArt, Film and Video .inc<br>&copy 2020 IstiyaqGames,inc</strong>"
home.innerHTML = "<a href='\series'>Pok&eacute;mon the Series</a>"

if (screen.width <= 699) {
	location.replace("https://watchpokemontv.netlify.com/");
}