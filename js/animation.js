$(document).ready(function(){
	$("#catagoryBar a").hover(function(){
		var colorTarget = $("#catagoryBar")
		var ref = $(this).attr("ref");
		if(ref == "one"){
			colorTarget.css({"background-color":"rgba(255,253,27,0.5)"});
		}else if(ref == "two"){
			colorTarget.css({"background-color":"rgba(11,53,219,0.5)"});
		}else{
			colorTarget.css({"background-color":"rgba(255,18,5,0.5)"});
		}
	}, function(){
		var colorTarget = $("#catagoryBar")
		colorTarget.css({"background-color":"rgba(0,0,0,0)"});
	});
});