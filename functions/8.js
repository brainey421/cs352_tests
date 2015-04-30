<script type="text/JavaScript">
function func() {
	document.write(obj.one, "<br />");
	var obj = {};
	obj.one = 5;
	document.write(obj.one, "<br />");
}
var obj = {};
obj.one = 1;
document.write(obj.one, "<br />");
func();
document.write(obj.one, "<br />");
</script>
