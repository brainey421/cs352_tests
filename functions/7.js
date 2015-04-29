<script type="text/JavaScript">
function func() {
	document.write(a+b, "<br />");
	a = 10;
	document.write(a+b, "<br />");
	var a = 0;
	document.write(a+b, "<br />");
}
var a = 5;
var b = 6;
func();
document.write(a+b);
</script>
