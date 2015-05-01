<script type="text/JavaScript">
function a() {
	var x = 1;
	return x;
}
function b() {
	x = 2;
}
var x = 0;
document.write("Before a(): ", x, "<br />");
document.write("a(): ", a(), "<br />");
document.write("After a(): ", x, "<br />");
b();
document.write("After b(): ", x, "<br />");
</script>
