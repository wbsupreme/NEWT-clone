var gitTest = {
	debug: true,

	doAlert: function(msg) {
		alert(msg);
	},

	doLog: function(msg) {
		if(gitTest.debug) console.log(msg);
	}
};

(function () {
    gitTest.doAlert("script included");
})(); 