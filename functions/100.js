<script type="text/JavaScript">
function func(a) {
	if(a > 1){
		func(a-1);
	}

	document.write(a, "<br />");
}

func(10);

</script>
