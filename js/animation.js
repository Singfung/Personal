$(document).ready(function(){
	// Color chanege when hover category button
	$("#categoryBar a").hover(function(){
		var colorTarget = $("#categoryBar")
		var ref = $(this).attr("ref");
		if(ref == "one"){
			colorTarget.css({"background-color":"rgba(255,253,27,0.5)"});
		}else if(ref == "two"){
			colorTarget.css({"background-color":"rgba(255,135,33,0.5)"});
		}else{
			colorTarget.css({"background-color":"rgba(255,4,34,0.5)"});
		}
	}, function(){
		var colorTarget = $("#categoryBar")
		colorTarget.css({"background-color":"rgba(0,0,0,0)"});
	});

	$("#categoryBar a").click(function(){
		var ref = $(this).attr("ref");
		$("#photoBox img[class != myDisable]").addClass("myDisable");
		$('#photoBox img[ref = "'+ref+'"]').removeClass("myDisable");
	});

	
});



/*$("a[target='_blank']")
$('.tabContent img[value="'+selectboxvalue+'"]')*/