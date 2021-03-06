$(document).ready(function(){
	// Color chanege when hover category button
	var current = $("#category1 img").not(".myDisable").attr("ref");

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


	$("#photoBox a").click(function(){
		var numOfPic = 19;
		// String reference e.g. "12"
		var next;

		if($(this).attr("id") == "right"){
			next = ((parseInt(current) + 1)%numOfPic).toString();
		}else{
			next = ((parseInt(current) + (numOfPic - 1))%numOfPic).toString();
		}

		// disable current, enable next
		$("#category1 img[ref = '"+current+"']").addClass("myDisable");
		$("#category1 img[ref = '"+next+"']").removeClass("myDisable");

		// next slide becomes current slide next time clicked
		current = next;
	});


	
});



/*$("a[target='_blank']")
$('.tabContent img[value="'+selectboxvalue+'"]')*/