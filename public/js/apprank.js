$(function(){function a(){$("#target> *").remove(),$("#target").hide(),$("#loading").show(),d=$("#genreChanger").find(":selected").text(),$("#categolyName").text(d),$.ajax({type:"GET",scriptCharset:"utf-8",dataType:"json",url:"http://itunes.apple.com/"+country+"/rss/"+type+"/limit="+c+"/genre="+genrecode+"/json",success:function(a){$("#loading").fadeOut(),$("#target").fadeIn("slow");for(var b=0;c>b;b++)$("#target").append("<a href='"+a.feed.entry[b].id.label+"&at=11l4Yj'><section id='t"+parseInt(b+1)+"'><img src='"+a.feed.entry[b]["im:image"][2].label+"' width='50' /><div class='contents'><h3>"+parseInt(b+1)+"位."+a.feed.entry[b]["im:name"].label+"</h3><p>"+a.feed.entry[b]["im:artist"].label+"</p><p>"+a.feed.entry[b]["im:price"].label+"</p></div></section></a>")},error:function(){}})}function b(){"OFF"==j?($("#wrapper").css("height",$(window).height()),$("#universalMenu").css("height",$(window).height()),$("body").css("width",$(window).width()),$("#wrapper").css("overflow","hidden"),j="ON",$("#wrapper").animate({left:"0"},200)):"ON"==j&&($("#wrapper").css("height",""),$("body").css("width","100%"),$("#wrapper").css("overflow-y",""),$("#wrapper").css("overflow-x",""),j="OFF",$("#wrapper").animate({left:"-250px"},200))}var c=100,d=($(window).width(),$(window).height(),$("#genreChanger").find(":selected").text()),e=$("#jp"),f=$("#us"),g=$("#uk"),h=$("#cn"),i=$("#kr");e.click(function(){$("ul#countryList").find("li").removeClass(),country="jp",e.addClass("current"),a()}),f.click(function(){$("ul#countryList").find("li").removeClass(),country="us",f.addClass("current"),a()}),g.click(function(){$("ul#countryList").find("li").removeClass(),country="gb",g.addClass("current"),a()}),h.click(function(){$("ul#countryList").find("li").removeClass(),country="cn",h.addClass("current"),a()}),i.click(function(){$("ul#countryList").find("li").removeClass(),country="kr",i.addClass("current"),a()});var j="OFF";$("#slideBtn").click(function(){b()}),$("#feedFree").click(function(){$("ul#feed").find("li").removeClass(),type="topfreeapplications",$("#feedFree").addClass("currentU"),$("#feedName").text("無料アプリ"),b(),a()}),$("#feedPaid").click(function(){$("ul#feed").find("li").removeClass(),type="toppaidapplications",$("#feedPaid").addClass("currentU"),$("#feedName").text("有料アプリ"),b(),a()}),$("#feedGross").click(function(){$("ul#feed").find("li").removeClass(),type="topgrossingapplications",$("#feedGross").addClass("currentU"),$("#feedName").text("トップセールス"),b(),a()}),$("#displayNum100").click(function(){$("ul#displayNum").find("li").removeClass(),c=100,$("#displayNum100").addClass("currentU"),b(),a()}),$("#displayNum300").click(function(){$("ul#displayNum").find("li").removeClass(),c=300,$("#displayNum300").addClass("currentU"),b(),a()}),$("#genreChanger").change(function(){genrecode=$("#genreChanger").val(),$(this).blur(),b(),a()}),a()});