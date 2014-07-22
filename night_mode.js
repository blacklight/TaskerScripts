var date = new Date();
var day = date.getDay() + 1;
var hh = date.getHours();
var mm = date.getMinutes();
var hhmm = hh * 100 + mm;

if (
	global("NIGHTMODE") == "0" && (
	(day < 6 && (hhmm >= 100 && hhmm <= 800)) ||
	(day > 5 && (hhmm >= 200 && hhmm <= 1000))

	)) {
	ringerVol(0);
	systemVol(0);
	notificationVol(0);
	setGlobal("NIGHTMODE", "1");

	flash("Entering night mode");
} else if (global("NIGHTMODE") == "1") {
	if (global("OFFICE") == "0") {
		ringerVol(7);
		systemVol(7);
		notificationVol(7);
	}

	setGlobal("NIGHTMODE", "0");

	flash("Entering day mode");
}

