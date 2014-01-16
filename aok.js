$(document).ready(function(){
	$('#page').css({'background': 'rgb(200, 200 ,200)', 'height': $(window).height()});

	var xPageCenter = Math.floor($(window).width() / 2);
	var yPageCenter = Math.floor($(window).height() / 2);


	$('html').mousemove(function(e){

		var leftDist = Math.floor(e.clientX);
		var topDist = Math.floor(e.clientY);
		console.log(xPageCenter);

		if (leftDist > xPageCenter) {
			var xPosFromCenter = Math.floor((leftDist - xPageCenter) / 10);
			$('.ay').css({
				'margin-left': xPosFromCenter
			});
		} else {
			var xPosFromCenter = Math.floor((xPageCenter - leftDist) / 10);
			$('.ay').css({
				'margin-left': -(xPosFromCenter)
			});
		}

		if (topDist > yPageCenter) {
			var yPosFromCenter = Math.floor((topDist - yPageCenter) / 5);
			$('.ay').css({
				'margin-top': yPosFromCenter
			});
		} else {
			var yPosFromCenter = Math.floor((yPageCenter - topDist) / 5);
			$('.ay').css({
				'margin-top': -(yPosFromCenter)
			});
		}

		// $('.dash').css({'top': x,'left': y, '-webkit-transform': 'rotate(' + y + 'deg)'});
		// $('.o').css({'top': x,'left': y, '-webkit-transform': 'rotate(' + y + 'deg)'});
		// $('.k').css({'top': x,'left': y, '-webkit-transform': 'rotate(' + y + 'deg)'});

		var one = Math.floor(Math.random() * 255);
		var first = Math.floor((e.pageX / $(window).width()) * 256);
		var second = Math.floor((e.pageY / $(window).height()) * 256);

		$('#page').css({

			'background': 'rgb(200, '+first+' ,200)', /* Old browsers */
			//'background': -moz-linear-gradient(top, rgb(30,87,153) 0%, rgb(41,137,216) 50%, rgb(32,124,202) 51%, rgb(125,185,232) 100%); /* FF3.6+ */
			//'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgb(30,87,153)), color-stop(100%,rgb(125,185,232)))' /* Chrome,Safari4+ */
			'background': '-webkit-linear-gradient(top, rgb(200,240,200) 0%,rgb('+second+',200, 200) 100%)' /* Chrome10+,Safari5.1+ */
			// 'background': -o-linear-gradient(top, rgb(30,87,153) 0%,rgb(41,137,216) 50%,rgb(32,124,202) 51%,rgb(125,185,232) 100%); /* Opera 11.10+ */
			// 'background': -ms-linear-gradient(top, rgb(30,87,153) 0%,rgb(41,137,216) 50%,rgb(32,124,202) 51%,rgb(125,185,232) 100%); /* IE10+ */
			// 'background': linear-gradient(to bottom, rgb(30,87,153) 0%,rgb(41,137,216) 50%,rgb(32,124,202) 51%,rgb(125,185,232) 100%); /* W3C */

		});


	});

	setTimeout(function(){

		blink();

	}, 3000);


	var blink = function(){
		$('div.ay').animate({'height' : '0px'}, 25, function(){
			$(this).delay(200).animate({'height' : '50px'}, 25);
		});
	};


	$('div.ay').mouseover(function(){
		$(this).css({
			'height' : '100px',
			'width' : '100px',
			'-webkit-transform' : 'translate(-50px, -20px)',
			'border-radius' : '0px',
			'cursor' : 'move'
		});
	});

	$('div.ay').mouseout(function(){
		$(this).css({
			'height' : '50px',
			'width' : '50px',
			'-webkit-transform' : 'translate(-25px, 0px)',
			'border-radius' : '25px',
			'top': '50%',
			'left' : '50%',
			'background' : 'black'
		}, 300);
	});

	$('div.ay').click(function(){
		$(this).css({
			'height' : '80%',
			'width' : '90%',
			'top': '10%',
			'left' : '5%',
			'-webkit-transform' : 'translate(0, 0)',
			'border-radius' : '0px',
			'cursor' : 'auto',
			'background' : 'white'
		}, 300);
		console.log('-' + xPageCenter)
	});


});
