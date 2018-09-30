
			$(function(){
				console.log($("body").width());
				/*-----------------------3D旋转------------------------*/
				/*添加小div*/
				var div3d = $("#chatu_3d");
				for(var i = 0;i<32;i++){
					div3d.append("<div class='chatu_3d'><div class='chatu_3d1'></div><div class='chatu_3d2'></div></div>");
				}
				var chatuwidth = div3d.width();
				var chatuheight = div3d.height();
				$(".chatu_3d div").css("background-size","800% 400%");
				/*覆盖图片*/
				for(var i = 0;i<32;i++){
					var chatu_top = parseInt(i/8)*100/3;
					var chatu_left = (i%8)*100/7;
//					$(".chatu_3d:eq("+i+")").children("div").css("background-position-y",chatu_top+"%");
					$(".chatu_3d1:eq("+i+")").css("background-position-y",chatu_top+"%");
					$(".chatu_3d2:eq("+i+")").css("background-position-y",chatu_top+"%");
					$(".chatu_3d1:eq("+i+")").css("-moz-background-position-y",chatu_top+"%");
					$(".chatu_3d2:eq("+i+")").css("-moz-background-position-y",chatu_top+"%");
//					$(".chatu_3d:eq("+i+")").children("div").css("background-position-x",chatu_left+"%");
					$(".chatu_3d1:eq("+i+")").css("background-position-x",chatu_left+"%");
					$(".chatu_3d2:eq("+i+")").css("background-position-x",chatu_left+"%");
					$(".chatu_3d1:eq("+i+")").css("-moz-background-position-x",chatu_left+"%");
					$(".chatu_3d2:eq("+i+")").css("-moz-background-position-x",chatu_left+"%");
				}
				/*背景数组*/
				var chatuarry = [
					"url(img/sheji/1468282718.jpg)",
					"url(img/sheji/1468238182.jpg)",
					"url(img/sheji/banner0.jpg)",
					"url(img/sheji/banner1.jpg)",
					"url(img/sheji/banner2.jpg)"
				]
				/*切换*/
				var chatuindex = 0;
				function chatuscoll3d(){
					chatuindex++;
					chatuindex = chatuindex % chatuarry.length;
					$(".chatu_3d2").css("background-image",chatuarry[chatuindex]);
					$(".chatu_3d").css("transition-duration","0.5s");
					$(".chatu_3d").css("-moz-transition-duration","0.5s");
					$(".chatu_3d").css("-moz-transform","rotateY(180deg)");
					for(var i = 0;i<32;i++){
						var randomnum = Math.floor(Math.random()*1500);
						$(".chatu_3d:eq("+i+")").css("transition-delay",randomnum+"ms");
						$(".chatu_3d:eq("+i+")").css("-moz-transition-delay",randomnum+"ms");
						$(".chatu_3d:eq("+i+")").css("transform","rotateY(180deg)");
						$(".chatu_3d:eq("+i+")").css("-moz-transform","rotateY(180deg)");
					}
					setTimeout(function(){
						$(".chatu_3d").css("transition-duration","0s");
						$(".chatu_3d").css("-moz-transition-duration","0s");
						$(".chatu_3d").css("transition-delay","0ms");
						$(".chatu_3d").css("-moz-transition-delay","0ms");
						$(".chatu_3d").css("transform","rotateY(0deg)");
						$(".chatu_3d").css("-moz-transform","rotateY(0deg)");
						$(".chatu_3d1").css("background-image",chatuarry[chatuindex]);
					},2020);
				}
				/*创建定时器*/
				setInterval(chatuscoll3d,7000);
				/*-----------------------3D旋转------------------------*/
//				$(".special").css("height",$(".special ul").height());
				/*-----------------------轮播-----------------------*/
				/*添加背景图*/
				var bannerli = $("#banners li");
				var bannerul = $("#banners");
				for(var i = 0;i<bannerli.length;i++){
					bannerli.eq(i).css("background-image","url(img/sheji/banner"+i+".jpg)");
				}
				/*设置定时器*/
//				console.log(bannerli.eq(bannerli.length-1));
					/*定时器的一次循环*/
				function banneronce(direction){
					removecontrol();
					var bannerli = $("#banners li");
					var bannerul = $("#banners");
					bannerscroll(direction,bannerul,bannerli,1);
					setTimeout(addcontrol,1000);
				}
					/*定时器赋值*/
				var bannertimer ;
				bannertimer = setInterval(function(){banneronce("left");},3000);
				/*设置手动控制*/
				function removecontrol(){
					$(".banner_left").unbind("click",bannerleft);
					$(".banner_right").unbind("click",bannerright);
				}
				function addcontrol(){
					$(".banner_left").bind("click",bannerleft);
					$(".banner_right").bind("click",bannerright);
				}
				addcontrol();
				function bannerleft(){
					/*清除正在运行的 定时器*/
					clearInterval(bannertimer);
					/*执行一次向右移动*/
					var bannerli = $("#banners li");
					var bannerul = $("#banners");
					banneronce("right");
					/*重新添加定时器*/
					setTimeout(function(){
						clearInterval(bannertimer);
						bannertimer = setInterval(function(){banneronce("left")},3000);
					},3000);
				}
				function bannerright(){
					clearInterval(bannertimer);
					var bannerli = $("#banners li");
					var bannerul = $("#banners");
					banneronce("left");
					setTimeout(function(){
						clearInterval(bannertimer);
						bannertimer = setInterval(function(){banneronce("left")},3000);
					},3000);
				}
				/*滑动函数*/
				function bannerscroll(direction,bannerul,bannerli,time){
//					var i = Math.floor(Number($(".banner1").css("left").replace("px",""))/$(".banner").width());
					var divs = $(".banner1 li div");
					divs.css("line-height","100px");
					if(direction == "left"){
						var i = -2;
						bannerul.css("transition-duration",time+"s");
						bannerul.css("left",i*100+"%");
						setTimeout(function(){
							var firstbanner = bannerli.eq(0);
							firstbanner.clone(true).appendTo(bannerul);
							firstbanner.remove();							
							bannerul.css("transition-duration","0s");
							bannerul.css("left","-100%");
							divs.css("line-height","50px");
						},time*1001);
					}
					else if(direction == "right"){
						var i = 0;
						bannerul.css("transition-duration",time+"s");
						bannerul.css("left",i*100+"%");
						setTimeout(function(){
							var lastbanner = bannerli.eq(bannerli.length-1);
							lastbanner.clone(true).prependTo(bannerul);
							lastbanner.remove();
							bannerul.css("transition-duration","0s");
							bannerul.css("left","-100%");
							divs.css("line-height","50px");
						},time*1000);
					}
					
				}
				/*-----------------------轮播-----------------------*/
				/*-----------------------导航栏----------------------*/
				$(".top_nav_icon").toggle(function(){
					$(".top_navs").slideDown("normal");
					$(this).css("background-image","url(img/icon/cuohao.png)");
				},function(){
					$(".top_navs").slideUp("normal");
					$(this).css("background-image","url(img/icon/caidan.png)");
				});
				$(".top_navs li").hover(function(){
					$(this).children("ul").slideDown("normal");
				},function(){
					$(this).children("ul").slideUp("normal");
				});
				/*-----------------------导航栏-----------------------*/
				/*----------------------进度条监听---------------------*/
				var top = 0 ;
				var ptop = 0;
				$(".intr ul").css("top",$(".intr").height());
				$(".special ul").css("top",-$(".intr").height()+"px");
//				console.log(Math.max($(".special ul li:eq(1)").height(),$(".special ul li:eq(2)").height()));
//				console.log($(".special ul li:eq(1)").height());
//				console.log($(".special ul li:eq(2)").height());
				window.onscroll = function(){
					ptop = document.documentElement.scrollTop || document.body.scrollTop;
					var bannerheight = $(".banner1").height();
					var bottom = ptop + $("body").height();
//					console.log(top);
//					console.log(t);
					/*简介部分动画*/
					if(bottom>bannerheight){
						$(".intr ul").css("top","0");
					}
					/*具体内容部分*/
					if(bottom>bannerheight){
						$(".special ul").css("top","0");
						$(".special ul").css("opacity","1.0");
					}
					/*导航部分*/
//					if(ptop>bannerheight){
//						/*控制导航栏*/
//						$(".top").css("position","fixed");
//						if(ptop>bannerheight){
//							if(top>ptop){
//								$(".top").slideDown("normal");
//							}
//							else{
//								$(".top").slideUp("normal");
//							}
//						}
//					}
//					else{
//						$(".top").css("position","absolute");
//					}
//					setTimeout(function(){top = ptop},0);
					if(ptop>bannerheight){
						/*控制导航栏*/
						$(".top").css("top",ptop);
						if(ptop>bannerheight){
							if(top>ptop){
								$(".top").slideDown("normal");
							}
							else{
								$(".top").slideUp("normal");
							}
						}
					}
					else{
						$(".top").css("top","0");
					}
					setTimeout(function(){top = ptop},0);
					/*案例部分*/
					var casetop = $(".cases").offset().top;
					if(bottom>casetop){
						$(".cases li").css("margin-left","0");
					}
					/*底部*/
					var bottomtop = $(".bottom").offset().top;
					if(bottom>bottomtop){
						$(".bottom_ul").css("margin-top","0");
					}
					/*视频控制*/
					var videotop = $("video").offset().top;
					if(bottom>videotop){
						$("video").get(0).play();
					}
					
				}
				/*----------------------进度条监听---------------------*/
				/*----------------------案例淡入淡出---------------------*/
				$(".cases ul li").hover(function(){
					$(this).css("transition","0.5s ease");
					$(this).css("background-size","140% 140%");
					$(this).children("p").fadeIn("fast");
				},function(){
					$(this).css("transition","0.5s ease");
					$(this).css("background-size","100% 100%");
					$(this).children("p").fadeOut("fast");
				});
				/*----------------------案例淡入淡出---------------------*/
				/*----------------------控制高度变化-----------------------*/
				window.onresize = function(){
//					$(".special ul li").css("height",Math.max($(".special ul li:eq(1)").height(),$(".special ul li:eq(2)").height())+100+"px");
//					$(".special").css("height",$(".special ul").height());
					if($("body").width()>850)
						$(".top_navs").show();
					else
						$(".top_navs").hide();
					var chatuwidth = div3d.width();
					var chatuheight = div3d.height();
					$(".chatu_3d div").css("background-size","800% 400%");
				}
				/*----------------------控制高度变化-----------------------*/
			});