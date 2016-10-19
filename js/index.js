$("p#sub").hide();
$(document).ready(function() {
	$("a#aboutBtn").click(function() {
		if (this.innerHTML === "About") {
			$("p#headline").hide(800);
			$("p#sub").show(800);
		} else {
			$("p#sub").hide(800);
			$("p#headline").show(800);
		}
		this.innerHTML = this.innerHTML === "About" ? "Home" : "About";
	});
});