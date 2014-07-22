if (global("WIFICONNECTED") == "0") {
	setWifi(false);
	setAutoSync(false);
	mobileData(true);

}

flash("Entering charging off mode");

