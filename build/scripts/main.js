function isScrolledIntoView(e){var t=$(e),a=$(window),s=a.scrollTop(),o=s+a.height(),n=t.offset().top,i=n+t.height();return o>=i&&n>=s}function setSpanArrow(e){"right"==e.parent().css("float")&&(e.addClass("span-left"),e.removeClass("span-right")),"left"==e.parent().css("float")&&(e.addClass("span-right"),e.removeClass("span-left"))}function fixFloat(e){e[0].getElementsByClassName("people-text")[0].style.cssFloat="right",e[0].getElementsByClassName("people-picture")[0].style.cssFloat="left";for(var t=1;t<e.length;t++){var a=e[t-1].getElementsByClassName("people-text")[0],s=e[t-1].getElementsByClassName("people-picture")[0],o=e[t].getElementsByClassName("people-text")[0],n=e[t].getElementsByClassName("people-picture")[0];e[t-1].offsetTop!=e[t].offsetTop?("right"==a.style.cssFloat&&(o.style.cssFloat="left",n.style.cssFloat="right"),"left"==a.style.cssFloat&&(o.style.cssFloat="right",n.style.cssFloat="left")):(o.style.cssFloat=a.style.cssFloat,n.style.cssFloat=s.style.cssFloat)}}function validateEmail(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}var stats;$(document).ready(function(){function e(){yStart=$(".ocean-break").offset().top-$(window).scrollTop();var e=window.innerHeight-yStart-window.innerHeight/100*35;$(".ocean-break img").css("left",e/7+"vw")}$(".header-logo").animate({left:0,opacity:1},1e3),$(".collaboration > *").animate({left:0,opacity:1},1e3),$(".header-btn").animate({opacity:1},1500),$(".header-info").animate({opacity:1},1500),$(".header-date").animate({opacity:1},1500),$(".header-btn").animate({opacity:1},1500),$("a[href*=#]").bind("click",function(e){e.preventDefault();var t=$(this).attr("href");return $("html, body").stop().animate({scrollTop:$(t).offset().top},1e3),!1});var t=$("h1");$(".anchor").on("click",function(){$(".anchor").addClass("rotated");for(var e,a=0;a<t.length;a++)switch(e=t.eq(a),console.log(e),a){case 0:e.html("Arrr, me hearties!");break;case 1:e.html("What ye be needin' to know!");break;case 2:e.html("But why is the rum gone?");break;case 3:e.html("Where we be settin' sail from.");break;case 4:e.html("Avast! Sign up 'ere!");break;case 5:e.html("Prepare to be boarded!");break;case 6:e.html("Jolly Roger's Crew.");break;case 7:e.html("The ol' seadogs.");break;case 8:e.html("In Davy Jones' Locker.");break;case 9:e.html("Landlubbers' Section.")}});var a=!0;$(".mail-button").on("click",function(){$(this).css("opacity",1),$(this).find("span").text(""),$(".hide-sub").toggleClass("hide-sub"),$(".email").focus(),a&&($(".email-form").css("width","1px"),$(".email-form").animate({width:"100%"},200),a=!1)}),$(".subscribe-btn").on("click",function(){var e=$(".mail-button").css("width");setTimeout(function(){$(".email").hasClass("valid")?($(".mail-button, .email, .subscribe-btn").css("background","#0D6759"),$(".email-form").toggleClass("hide-sub"),$(".mail-button").find("span").text("Check mail for confirmation!"),$(".mail-button").css("width",e)):$(".email").hasClass("mce_inline_error")&&$(".mail-button, .email, .subscribe-btn").css("background","#692528")},100)}),window.innerWidth>=480?$(window).bind("scroll",function(){e()}):$(".ocean-break img").css("left","15vw");var s=0;$(".ocean-break img").on("click",function(){if(s++,2==s){var e,t,a;e=t=a=0,$(this).animate({borderSpacing:-1440},{step:function(e){$(this).css("-webkit-transform","rotate("+e+"deg)"),$(this).css("-moz-transform","rotate("+e+"deg)"),$(this).css("transform","rotate("+e+"deg)")},queue:!1,duration:1e3},"linear"),s=0}});var o=$(".the-day-text:eq(0)").height();$(".the-day-text:eq(1)").css("top",-o),$(".the-day .ghost-btn").click(function(){$(this).hasClass("active")||($(".the-day>img").toggleClass("img-shown").toggleClass("img-not-shown"),$(".the-day-text").toggleClass("text-shown").toggleClass("text-not-shown"),$(".startup-arena-text").toggleClass("text-not-shown").toggleClass("text-shown"),$(".the-day .ghost-btn").each(function(){$(this).toggleClass("active")}))}),$(".location-image-holder").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}});var n=$(".people");fixFloat(n),$(".people span").each(function(){setSpanArrow($(this))}),$(window).on("resize",function(){fixFloat(n),$(".people span").each(function(){setSpanArrow($(this))})}),$(window).resize(function(){var e=$(".the-day-text:eq(0)").position().top;$(".the-day-text:eq(1)").css("top",e)})}),$(function(){countdown(1429524e6,function(e){$("#countdown").text(e.seconds)},countdown.SECONDS)});var audioObject=new Audio("https://p.scdn.co/mp3-preview/2650c19280ca427c10e3bcb5ce5295f1ace84ce0");window.addEventListener&&(keys=[],code=[38,38,40,40,37,39,37,39,66,65],window.addEventListener("keyup",function(e){keys.push(e.keyCode),keys.length>code.length&&keys.shift(),keys.length==code.length&&keys.toString()==code.toString()&&audioObject.play()}));