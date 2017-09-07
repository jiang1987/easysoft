$(function() {
	//点击事件 显示和图片改变
	for(var i = 1; i <= 3; i++) {
		(function(i) {
			$(".zhaopin_nav_li[data-index=" + i + "]").on("click", function(event) {
				event.stopPropagation();
				var _this = $(this);
				$(".zhaopin_nav_li").children(".mask").show();
				_this.children(".mask").hide();
				$(".zhaopin_nav_li_details").each(function(j) {
					if(i == (j + 1)) {
						if($(this).is(":hidden")) {
							$(".zhaopin_nav_li_details").slideUp(1000);
						}
						$(this).slideDown(1000);
					}
				});
				//图片改变
				$(".zhaopin_nav_li_List").each(function() {
					var _self = $(this);
					if(_this.attr("data-name") == _self.attr("data-name")) {
						$(".zhaopin_nav_li_List").hide();
						_self.show();
						_self.find(".smallPic_li").on("click", function() {
							var img = $(this).find("img").attr("src");
							_self.find(".bigPic").find("img").attr("src", img);
						});
					}
				});
				$(".zhaopin_nav_li").removeClass("active");
				_this.addClass("active");
			});
		})(i);
	}
	
	$(".zhaopin_nav_ul").on("click", function(event) {
		event.stopPropagation()
		$(".zhaopin_nav_li_details").slideUp(1000);
		$(".zhaopin_nav_li").removeClass("active");
		$(".zhaopin_nav_li").children(".mask").show();
	});

	$(".zhaopin_nav_li_details").on("click", function(event) {
		event.stopPropagation()
		if($(this).is(":hidden")) {
			$(".zhaopin_nav_li_details").slideUp(1000);
		}
	});
	$(window).resize(function() {
		resizeW();
	});
	resizeW();

	function resizeW() {
		var windowWidth = $("body").width();
		var width = (windowWidth - 1200) / 2;
		$(".after,.before").width(width);
		$(".before").css({
			"left": -width + "px"
		});
		$(".after").css({
			"right": -width + "px"
		});
	}
})