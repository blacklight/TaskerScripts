setGlobal("OFFICE", "0");

if (global("WIFICONNECTED") == 0) {
	mobileData(true);
	setAutoSync(false);
	setWifi(false);
	setGlobal("HOME", "0");

	flash("Entering outdoor mode");
}

