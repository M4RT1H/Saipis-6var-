$( document ).ajaxSend(function() {
  console.log("ajaxSend hendler");
});

$( document ).ajaxComplete(function() {
  console.log("ajaxComplete hendler");
});

$( document ).ajaxSuccess(function() {
  console.log("ajaxSuccess hendler");
});

$( document ).ajaxError(function() {
  console.log("ajaxError hendler");
});

$( document ).ajaxStart(function() {
  console.log("ajaxStart hendler");
});

$( document ).ajaxStop(function() {
  console.log("ajaxStop hendler");
});
      
$('#lastButton').click(function(){

	var rates = $('.textSize');
	var rate_value;
	for(var i = 0; i < rates.length; i++){
    	if(rates[i].checked){
        	rate_value = rates[i].value;
    	}
	}

	var year = $('#birth').get(0).value;                  
	$('#auto').css("font-size", rate_value + "px");
	$('#auto').attr("value", "Born in " + year);

});

$('#secondButton').click(function(){                  
    $.getScript("../js/newScript.js", function(){     
        testAjax($('#birth').get(0).value);                                
    });                
});

$('#firstButton').click(function(){    

	$.ajax({

		url: "../resource/text.xml",
		dataType: "xml",
		async: true,
		success: function(data){
			var birth = $(data).find("Birth").text();
			var university = $(data).find("University").text();
			var faculty = $(data).find("Faculty").text();

			$('#birth').attr("value", birth);
			$('#university').attr("value", university);
			$('#faculty').attr("value", faculty);
		},
		error: function () {
            var error = confirm('Произошла ошибка.Перезагрузить страницу?');
            if(error){
                location.reload()
            } else {
                window.location.href = 'error-page.html'
            }
        }
	});                                 
});

