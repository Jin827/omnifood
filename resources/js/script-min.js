$(document).ready(function(){$(".js--section-features").waypoint(function(n){"down"==n?$("nav").addClass("sticky"):$("nav").removeClass("sticky")},{offset:"60px"}),$(".js--scroll-to-plans").click(function(){$("html, body").animate({scrollTop:$(".js--section-plans").offset().top},1e3)}),$(".js--scroll-to-start").click(function(){$("html, body").animate({scrollTop:$(".js--section-features").offset().top},1e3)}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if((n=n.length?n:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:n.offset().top},1e3),!1}})}),$(".js--wp-1").waypoint(function(n){$(".js--wp-1").addClass("animated fadeIn")},{offset:"50%"}),$(".js--wp-2").waypoint(function(n){$(".js--wp-2").addClass("animated fadeInUp")},{offset:"50%"}),$(".js--wp-3").waypoint(function(n){$(".js--wp-3").addClass("animated fadeIn")},{offset:"50%"}),$(".js--wp-4").waypoint(function(n){$(".js--wp-4").addClass("animated pulse")},{offset:"50%"}),$(".js--nav-icon").click(function(){var n=$(".js--main-nav"),o=$(".js--nav-icon i");n.slideToggle(200),o.hasClass("ion-navicon-round")?(o.addClass("ion-close-round"),o.removeClass("ion-navicon-round")):(o.addClass("ion-navicon-round"),o.removeClass("ion-close-round"))}),new GMaps({div:".map",lat:38.7436266,lng:-9.1,zoom:12}).addMarker({lat:38.7436266,lng:-9.1602037,title:"Lisbon",infoWindow:{content:"<p>Our Lisbon HQ</p>"}})});