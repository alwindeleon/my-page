$(function(){
	
	$('.inspire-button').click(function(){
		
		var url = "http://www.quotesondesign.com/api/3.0/api-3.0.json"
		
		
		$.ajax({
		    url: url,
			p:"12",
		    type: 'GET',
		    crossDomain: true, // enable this
		    dataType: 'jsonp',
		    success: function(data) {
		    	showQuote(data);
		    },
		    error: function(data) { alert('Failed!'); },

		});
	});
	var scrollDist = $(window).scrollTop();
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if(scrollDist > $(window).scrollTop()){
			console.log("UP");
			$(".nav-bar").slideDown(500);
			scrollDist = $(window).scrollTop();
		}else {
			console.log("DOWN");
			$(".nav-bar").slideUp(500);
			scrollDist = $(window).scrollTop();
		}
	})

	$("#back-to-top-button").click(function(){
		$(window).scrollTop(0);
	});
});

function showQuote(data){
	var quote = "<strong>'"+data.quote+"'<strong>";
	var author = "<strong>-"+data.author+"<strong>";
	$(".inspire-line").fadeIn(500);
	$(".inspire-author").fadeIn(500);
	$(".inspire-line").html(quote);
	$(".inspire-author").html(author);
	
}

