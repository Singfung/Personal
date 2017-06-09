$(document).ready(function(){
	$("#catagoryBar a").hover(function(){
		var colorTarget = $("#catagoryBar")
		var ref = $(this).attr("ref");
		if(ref == "one"){
			colorTarget.css({"background-color":"rgba(255,253,27,0.5)"});
		}else if(ref == "two"){
			colorTarget.css({"background-color":"rgba(255,135,33,0.5)"});
		}else{
			colorTarget.css({"background-color":"rgba(255,4,34,0.5)"});
		}
	}, function(){
		var colorTarget = $("#catagoryBar")
		colorTarget.css({"background-color":"rgba(0,0,0,0)"});
	});
});