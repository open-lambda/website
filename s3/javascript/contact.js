function dosubmit() {
    console.log($("#follow-status"));
    $("#follow-status").text("submitting");

    url = "https://tvf6vlcfa0.execute-api.us-east-1.amazonaws.com/prod/open-lambda-subscribe";
    data = {
	"name": $('#name').val(),
	"email": $('#email').val()
    };

    $.ajax({
	type: "POST",
	url: url,
	contentType: "application/json; charset=utf-8",
	data: JSON.stringify(data),
	dataType: "json"}
	  )
	.done(function(result) {
	    $("#follow-status").html(result)
	})
	.fail(function(r){
	    $("#follow-status").html("subscription failed")
	});
}

function main() {
    $('#subscribe').click(dosubmit);
    $('#name').keypress(function(e){
	if(e.which === 13)
	    dosubmit();
    });
    $('#email').keypress(function(e){
	if(e.which === 13)
	    dosubmit();
    });
}

$(document).ready(function() {
    main();
});
