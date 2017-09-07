$(".input_search").click(function(event) {
	event.stopPropagation();
});
$(".header_search").click(function() {
	alert(1);
});
$(".nav_li").on("mouseover", function(i) {
	var a = $(this).find(".navTitle");
	var src = a.children("img").attr("src");
	a.addClass("nav_liActive").siblings().show();
	if(a.attr("data-off")==1){
		src = src.replace("black", "blue");
		a.children("img").attr("src", src);
	}
}).on("mouseout", function() {
	var a =  $(this).find(".navTitle"); 
	var src = a.children("img").attr("src");
	a.removeClass("nav_liActive").siblings().hide();
	if(a.attr("data-off")==1){
		src = src.replace("blue", "black");
		a.children("img").attr("src", src);
	}
});