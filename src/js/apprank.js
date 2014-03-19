// JavaScript Document

$(function(){
	var count = 100;
	var windowWidth = $(window).width()
	var windowHeight = $(window).height();
	var genrename = $("#genreChanger").find(':selected').text();
	var _countryJP = $("#jp");
	var _countryUS = $("#us");
	var _countryUK = $("#uk");
	var _countryCN = $("#cn");
	var _countryKR = $("#kr");
//json core
function core(){
  $("#target> *").remove();
  $("#target").hide();
  $("#loading").show();
  genrename = $("#genreChanger").find(':selected').text();
  $("#categolyName").text(genrename);
  $.ajax({
    type: "GET",
    scriptCharset: 'utf-8',
    dataType:'json', 
    url: "http://itunes.apple.com/" + country + "/rss/" + type + "/limit=" + count + "/genre=" + genrecode + "/json",
    success: function(json){
		$("#loading").fadeOut();
		$("#target").fadeIn("slow");
		for(var i = 0; i < count; i++) {
		$("#target").append(
		"<a href='" + json.feed.entry[i]["id"]["label"] + '&at=11l4Yj' +//URL
		"'><section id='t"+ parseInt(i+1)+"'><img src='" + json.feed.entry[i]["im:image"][2]["label"] +"' width='50' />" + //ランク
		"<div class='contents'><h3>" + parseInt(i+1) + "位."  +//画像
		json.feed.entry[i]["im:name"]["label"] + 
		"</h3><p>"+ json.feed.entry[i]["im:artist"]["label"] + "</p><p>"+ json.feed.entry[i]["im:price"]["label"] + "</p></div></section></a>");//名称
		}
    },
    error:function(){}
	});
};

//

////////////////////
_countryJP.click(function(){
	$("ul#countryList").find("li").removeClass();
	country = "jp";
	_countryJP.addClass("current");
	core();
});

_countryUS.click(function(){
	$("ul#countryList").find("li").removeClass();
	country = "us";
	_countryUS.addClass("current");
	core();
});

_countryUK.click(function(){
	$("ul#countryList").find("li").removeClass();
	country = "gb";
	_countryUK.addClass("current");
	core();
});

_countryCN.click(function(){
	$("ul#countryList").find("li").removeClass();
	country = "cn";
	_countryCN.addClass("current");
	core();
});

_countryKR.click(function(){
	$("ul#countryList").find("li").removeClass();
	country = "kr";
	_countryKR.addClass("current");
	core();
});



////////////////////
var flag = "OFF";

function switcher(){					  
	
	if(flag == "OFF"){
		$("#wrapper").css("height", $(window).height());
		$("#universalMenu").css("height", $(window).height());
		$("body").css("width", $(window).width());
		$("#wrapper").css("overflow","hidden");
		flag = "ON";
		$("#wrapper").animate({"left": "0"}, 200);
	}else if(flag == "ON"){
		$("#wrapper").css("height", "");
		$("body").css("width", "100%");
		$("#wrapper").css("overflow-y","");
		$("#wrapper").css("overflow-x","");
		flag = "OFF";
		$("#wrapper").animate({"left": "-250px"}, 200);
	}
	
};

$("#slideBtn").click(function(){
	switcher();
});

////////////////////
$("#feedFree").click(function(){
	$("ul#feed").find("li").removeClass();
	type = "topfreeapplications";
	$("#feedFree").addClass("currentU");
	$("#feedName").text("無料アプリ");
	switcher();
	core();
});


$("#feedPaid").click(function(){
	$("ul#feed").find("li").removeClass();
	type = "toppaidapplications";
	$("#feedPaid").addClass("currentU");
	$("#feedName").text("有料アプリ");
	switcher();
	core();
});


$("#feedGross").click(function(){
	$("ul#feed").find("li").removeClass();
	type = "topgrossingapplications";
	$("#feedGross").addClass("currentU");
	$("#feedName").text("トップセールス");
	switcher();
	core();
});

////////////////////
$("#displayNum100").click(function(){
	$("ul#displayNum").find("li").removeClass();
	count = 100;
	$("#displayNum100").addClass("currentU");
	switcher();
	core();
});


$("#displayNum300").click(function(){
	$("ul#displayNum").find("li").removeClass();
	count = 300;
	$("#displayNum300").addClass("currentU");
	switcher();
	core();
});

//////////////////
$("#genreChanger").change(function(){
	genrecode = $("#genreChanger").val();
	$(this).blur();
	switcher();
	core();
});


//

core();

//

});

<!-- 入力欄非表示 script -->
/*
window.onload = function(){
	setTimeout(function(){window.scrollTo(0,1);},100);
}
*/
