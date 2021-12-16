
$('#changeID').on("click", function () {

    $('.id2').attr('class', 'idNew');
    $('td:odd').attr('class', 'idNew1');  
});

$('#changeStyle').on("click", function () {

    $("img").fadeTo(2000, 0, "linear");
    $("#changeID").prop('disabled', true);


});

$("#Divv").dblclick(function () {
    $("#Divv").fadeTo(2000, 0, "linear");
});