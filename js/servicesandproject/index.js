



$(function() {
	$(".projectNav_li p").on("click", function() {
		var _this = $(this);
		$(".projectNav_li p").removeClass("active").parent().css("background", "#f9f9f9");
		_this.addClass("active").parent().css("background", "#fff");
		$(".projects_content_li").each(function(){
			var _self = $(this)
			if(_this.attr("data-name") == _self.attr("data-name")){
				$(".projects_content_li").hide();
				_self.show();
				_self.find(".page li").on("click", function() {
					$(".page li").removeClass("activePg");
					$(this).addClass("activePg");
				}).eq(0).click();
			}		
		});
	}).eq(0).click();
});