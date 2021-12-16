$.noConflict();
function testAjax(year) {
   console.log(year);

		$('#dd').dialog({
			title: "Описание",
   			autoOpen: false,
   			modal: true
   		});
		$("#dd").load("../html/results.html");
		$("#dd").css({'background-color': 'blue'});
   		$("#dd").dialog('open');
}