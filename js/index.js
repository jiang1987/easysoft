
//主体swiper
	var swiperV = new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination-v',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        mousewheelControl: true,
        simulateTouch: false,
        onSlideChangeEnd:function(swiper){
        	swiperAnimate(swiper); 		   	
        },
         onInit: function(swiper){ 
		    swiperAnimateCache(swiper); 
		    swiperAnimate(swiper); 
		 }
    });	
    //banner
	var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        mousewheelControl: true,
        mousewheelForceToAxis:true,
        paginationClickable: true,
        loop: true,
		autoplay: 3000,
		speed: 1000        
    });
    //行业资讯
    var Swiper1 = new Swiper('.swiper-container1', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 600,
            modifier: 1
        },
        initialSlide:1,
        loop:true,
        autoplay: 3000,
		speed: 1000,
		autoplayDisableOnInteraction:false,
        onInit:function(swiper){
			var oninitImg = $(swiper.slides[swiper.activeIndex]).find("img").attr("src");
        	$(".bg_mohu").css({"background-image":"url( "+ oninitImg+")"});
        }
    });
	var Swiper2 = new Swiper('.swiper-container2',{
        	centeredSlides: true,
        	slidesPerView: 'auto',
		initialSlide:1,
		loop:true,
		simulateTouch: false
	});
    Swiper1.params.control = Swiper2;
    //鼠标hover事件
	$(".swiper-container1 .swiper-slide").on("mouseover",function(){
		var index = $(".swiper-container1 .swiper-slide").index($(this));
	    Swiper1.slideTo(index,1000,false);  
	    var srcImg = $(this).find("img").attr("src");
	 	$(".bg_mohu").css({"background-image":"url("+srcImg+")"});
	}).on("click",function(){
		alert(1);
	});
	$(".top").click(function(){
		swiperV.slideTo(0, 1000, false);
	});   
//项目展示
	$(".content_ul li").on("mousemove",function(){
		$(this).find("img").css("transform","scale(1.2)");
		$(this).find(".mask_text").removeClass("zoomIn").addClass("zoomOut");
		$(this).find(".mask_div").css("opacity",1);
	});
	$(".content_ul li").on("mouseout",function(){
		$(this).removeClass("activeBg");
		$(this).find("img").css("transform","scale(1)");
		$(this).find(".mask_text").removeClass("zoomOut").addClass("zoomIn");
		$(this).find(".mask_div").css("opacity",0);
	});
