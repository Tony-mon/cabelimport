$(function(){

	$('select').styler();

	topSl();

	$( window ).resize(function() {
	  	// $("#pageHTML").removeClass("openMenu");
	  	// topSl();
	});

	$("#menuButton").click(function(){
		$("#pageHTML").toggleClass("openMenu");
	});
	

	function topSl(){
		var littleW = $(".sliderOnMain .little").width();

		$(".sliderOnMain .little").css("height", littleW + "px");
		$(".sliderOnMain .big").css("height", littleW*2 + 10 + "px"); 

		/*var squerEl = $(".squerEl");

		var squerElW = squerEl.width();
		squerEl.height(squerElW);*/
		$(".squerEl").each(function(){
			$(this).height($(this).width());
		});

		$(".prodRowsOnMain .squerEl").height($(".prodRowsOnMain .squerEl").width());

		if($(window).width() < 481){
			$(".newsRows .squerEl").height($(".newsRows .squerEl").width()/2);
			//$(".newsRows .text").height($(".newsRows .squerEl").width()/2);
		}

		$(".prodRowsOnMain.partCont .squerEl").height("auto"); 
		$(".prodRowsOnMain.partCont .squerEl .wrap").height($(".prodRowsOnMain .squerEl").width()); 
		
	}

	//dropdown
	$('.acc > li').click(function(){

		event.preventDefault();

		if ($(this).hasClass('active'))
		{
			$(this).children('ul').slideUp(200);
			$(this).removeClass('active');
		}
		else
		{
			$('.acc ul').slideUp(200);
			$('.acc>li.active').removeClass('active');
			$(this).children('ul').slideToggle(200);
			$(this).addClass('active');
		}
		
	});

	$('.tabs').each(function(){
	var tabs=$(this),
		btTabs=tabs.children('.btTabs'),
		contents=tabs.children('.contentTabs');
		btTabs.children('.bt').click(function(){
			btTabs.children('.bt').removeClass('active');
			contents.children('.contentTab').removeClass('active');	
			$(this).addClass('active');
			contents.children('.contentTab:eq('+$(this).index()+')').addClass('active');
		});
		btTabs.children('.bt:first').trigger('click');
	});
	

});