window.onload = function() {
	console.log(document.body.clientWidth);
	var height_$ = document.body.clientWidth * 650 / 1366;
	document.querySelector("section").style.height = height_$ + "px";
//	document.querySelectorAll(".d3xiaoguo span:first-child").style.transaction="2s all";
//	
    document.querySelector("article").style.marginTop="140px";
    document.querySelector("#chanpin").style.marginTop="100px";
    document.querySelector("#blog").style.marginTop="100px";
    document.querySelector("#zhijinyu").style.marginTop="100px";
}




window.onresize = function() {
	if(document.querySelector("body").clientWidth > 600) {
		$("#navmid").css("display", "block");
		$("#navright").css("display", "block");
	} else {
		$("#navmid").css("display", "none");
		$("#navright").css("display", "none");
	}
	var height_$ = document.body.clientWidth * 650 / 1366;
	document.querySelector("section").style.height = height_$ + "px";
	document.querySelector("section ul li").style.height = height_$ + "px";
}
$(function() {
	window.addEventListener("scroll",function(){
	var top=document.documentElement.scrollTop||document.body.scrollTop;
//	console.log(top);
	if(top>396){
		$("article").css("transition","1s all");
		$("article").css("transform","translateY(-100px)");
	}
	if(top>792){
		$("#chanpin").css("transition","1s all");
		$("#chanpin").css("transform","translateY(-150px)");
	}
	if(top>1500){
		$("#blog").css("transition","1s all");
		$("#blog").css("transform","translateY(-150px)");
	}
	if(top>1900){
		$("#zhijinyu").css("transition","1s all");
		$("#zhijinyu").css("transform","translateY(-150px)");
	}
//	
	});
	
	$(".d3xiaoguo").find("span:first-child").css("transition","1s all");
	$(".d3xiaoguo").find("span:first-child").css("transform","translateY(1em)");

	$(".d3xiaoguo").find("span:nth-child(2)").css("transition","1s all");
	$(".d3xiaoguo").find("span:nth-child(2)").css("transform","translateY(-1em)");
	
	$("#navright").css("transition","1s all");
	$("#navright").css("transform","translateY(40px)");


	$(".jihe").find("img").toggle(function() {
		$("#navmid").slideDown();
		$("#navright").slideDown();
	}, function() {
		$("#navmid").slideUp();
		$("#navright").slideUp();
	});

	$("#leftimg,#rightimg").css("background", "");
	$("#leftimg,#rightimg").find("img").hide();
	$("#leftimg").hover(function() {
		$(this).css("background", "-moz-linear-gradient(left,rgba(0,0,0,0.4),rgba(255,255,255,0.05))");
		$(this).find("img").show();
	}, function() {
		$(this).css("background", "");
		$(this).find("img").hide();
	});
	$("#rightimg").hover(function() {
		$(this).css("background", "-moz-linear-gradient(left,rgba(255,255,255,0.05),rgba(0,0,0,0.4))");
		$(this).find("img").show();
	}, function() {
		$(this).css("background", "");
		$(this).find("img").hide();
	});
	$("#ar3").find("li").find("div").hover(function() {
		$(this).find(".img1").hide();
		$(this).find(".img2").show();
		$(this).css("background", "dodgerblue");
	}, function() {
		$(this).find(".img2").hide();
		$(this).find(".img1").show();
		$(this).css("background", "#F5F5F5");
	});
	$("#chanpinzhanshi span img").hover(function() {
		$(this).css("transition", "2s all");
		$(this).css("transform", "scale(1.3)");
	}, function() {
		$(this).css("transition", "2s all");
		$(this).css("transform", "scale(1)");
	});
	
	/*图片轮播*/

	$("section ul li:nth-child(2)").hide();
	$("#spandian span:first-child").css("background", "dimgray");
	var i = 0;
	var li_$ = document.querySelectorAll("section ul li");
	var span_$ = document.querySelectorAll("#spandian span");
	var timer = setInterval(function() {
		li_$[i].style.opacity=0;
		span_$[i].style.background="";
		i=i+1;
		i=i%2;
		li_$[i].style.opacity=1;
		li_$[i].style.display="block";
		span_$[i].style.background="dimgray";
	}, 2000);

});