setGlobal("WIFICONNECTED", "0");

if (global("HOME") == 0) {
	mobileData(true);
	setAutoSync(false);
	setWifi(false);
	setGlobal("HOME", "0");
	setGlobal("OFFICE", "0");

	flash("Entering outdoor mode");
}

