mobileData(false);
setAutoSync(true);
setGlobal("WIFICONNECTED", "1");

if (global("WIFII").indexOf("UPC1384348") > -1) {
	setGlobal("HOME", "1");

	if (global("NIGHTMODE") == "1") {
		ringerVol(0);
		systemVol(0);
		notificationVol(0);
	} else {
		ringerVol(7);
		systemVol(7);
		notificationVol(7);
	}
} else if (global("WIFII").indexOf("BK-") > -1) {
	setGlobal("OFFICE", "1");
	ringerVol(0);
	systemVol(0);
	notificationVol(0);
} else {
	setGlobal("HOME", "0");
	setGlobal("OFFICE", "0");
}

flash("Entering WiFi mode");

