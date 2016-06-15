function main() {
	var folder = "resources/team/";
	var count = 0;
	var rows = [];
	var columns = 3;

	$.ajax({
	    url : folder,
	    success: function (data) {
	        $(data).find("a").attr("href", function (i, val) {
	            if(val.match(/\.(jpe?g|png|gif)$/) ) {
	            	var row = Math.floor(count/columns);
	            	if(count % columns === 0){
	            		rows[row] = $('<tr></tr>');
	            		$("#team").append(rows[row]);
	            	}

	            	//var text = 
	                rows[row].append( "<img src='"+ folder + val +"'>" );
	                count++;
	            } 
	        });
	    }
	});
}

$(document).ready(function() {
    main();
});