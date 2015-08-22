function keep(arg) {
	if (arg < 10)
		return '0' + arg;
	else
		return arg;
}

function tick() {
	var today;
	today = new Date();
	$("#localtime").html(keep(today.getHours()) + ':' + keep(today.getMinutes()) + ':' + keep(today.getSeconds()));
	window.setTimeout("tick()", 1000);
}

tick(); 