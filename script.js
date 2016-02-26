window.onload = function() {
	var canvas = document.getElementById("myCanvas");

	var lip = {
		yLine : 150,
		xMargin : 20,

		lowerLipBottom_y : 100,
		lowerLipUpper_y : 5,

		upperLipLine_y : 15,
		indentWidth_x : 30,
		indentDepth_y : 5,

		happyFactor : 0

	};
	
	function drawBottomLip() {
		var my_gradient = ctx.createRadialGradient(canvas.width / 2, 0, yLine + lowerLipBottom_y / 2, canvas.width / 2, -100 - Math.abs(happyFactor > 0 ? 0.5 * happyFactor : (happyFactor > -5 ? 1.5 * happyFactor : 3 * happyFactor)), yLine + 100);
		my_gradient.addColorStop(0, '#bf7991');
		my_gradient.addColorStop('0.5', '#e8afc0');
		my_gradient.addColorStop(1, '#dc95a5');
		// my_gradient.addColorStop(0,"FF0000");
		ctx.fillStyle = my_gradient;

		ctx.beginPath();

		//Bottom Lip Line
		ctx.moveTo(xMargin - Math.abs(happyFactor * 0.8), yLine - happyFactor);
		ctx.quadraticCurveTo(canvas.width / 2, yLine + lowerLipBottom_y - Math.abs(happyFactor > 0 ? 0.2 * happyFactor : (happyFactor > -5 ? 1.5 * happyFactor : 3 * happyFactor)), canvas.width - xMargin + Math.abs(happyFactor * 0.8), yLine - happyFactor);

		//Right Middle Line
		ctx.quadraticCurveTo(canvas.width / 2 + (canvas.width / 2 - xMargin) / 2, yLine - lowerLipUpper_y + happyFactor * 0.4, canvas.width / 2, yLine + lowerLipUpper_y);

		//Left Middle Line
		ctx.quadraticCurveTo(canvas.width / 4 - xMargin / 2, yLine - lowerLipUpper_y + happyFactor * 0.4, xMargin - Math.abs(happyFactor * 0.8), yLine - happyFactor);

		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
	
	function drawUpperLip() {
		var my_gradient2 = ctx.createLinearGradient(0, yLine - upperLipLine_y, 0, yLine + lowerLipUpper_y);
		my_gradient2.addColorStop(0, '#cf9ba8');
		my_gradient2.addColorStop(1, '#bf708d');
		ctx.fillStyle = my_gradient2;

		ctx.beginPath();

		//Left Upper Line
		ctx.moveTo(xMargin - Math.abs(happyFactor * 0.8), yLine - happyFactor);
		ctx.quadraticCurveTo(canvas.width / 2 - (canvas.width / 2 - xMargin) / 2, yLine - upperLipLine_y, canvas.width / 2 - indentWidth_x / 2 - Math.abs(happyFactor * 0.4), yLine - upperLipLine_y);

		//Indent Line
		ctx.quadraticCurveTo(canvas.width / 2, yLine - upperLipLine_y + indentDepth_y, canvas.width / 2 + indentWidth_x / 2 + Math.abs(happyFactor * 0.5), yLine - upperLipLine_y);

		//Right Upper Line
		ctx.quadraticCurveTo(canvas.width / 2 + (canvas.width / 2 - xMargin) / 2, yLine - upperLipLine_y, canvas.width - xMargin + Math.abs(happyFactor * 0.8), yLine - happyFactor);

		//Right Middle Line

		ctx.quadraticCurveTo(canvas.width / 2 + (canvas.width / 2 - xMargin) / 2, yLine - lowerLipUpper_y + happyFactor * 0.4, canvas.width / 2, yLine + lowerLipUpper_y);

		//Left Middle Line

		ctx.quadraticCurveTo(canvas.width / 4 - xMargin / 2, yLine - lowerLipUpper_y + happyFactor * 0.4, xMargin - Math.abs(happyFactor * 0.8), yLine - happyFactor);

		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}

	function drawMouth(lip) {
		xMargin = lip.xMargin;
		yLine = lip.yLine;
		lowerLipBottom_y = lip.lowerLipBottom_y;
		lowerLipUpper_y = lip.lowerLipUpper_y;
		upperLipLine_y = lip.upperLipLine_y;
		indentDepth_y = lip.indentDepth_y;
		indentWidth_x = lip.indentWidth_x;
		happyFactor = lip.happyFactor;

		ctx.strokeStyle = '#bf7991';

		/**
		 * BOTTOM LIP
		 **/
		
		drawBottomLip();
		
		/**
		 * UPPER LIP
		 **/

		drawUpperLip();

	}


	$("#slider1").slider({
		range : "min",
		value : lip.xMargin,
		min : 20,
		max : 50,
		slide : function(event, ui) {

			lip.xMargin = ui.value;
			$('#slider1-value').html('xMargin: ' + lip.xMargin);

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawMouth(lip);

		}
	});

	$("#slider2").slider({
		range : "min",
		value : lip.lowerLipBottom_y,
		min : 45,
		max : 200,
		//orientation: "vertical",
		slide : function(event, ui) {

			lip.lowerLipBottom_y = ui.value;
			$('#slider2-value').html('lowerLipBottom_y: ' + lip.lowerLipBottom_y);

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawMouth(lip);

		}
	});

	$("#slider3").slider({
		range : "min",
		value : lip.lowerLipUpper_y,
		min : 3,
		max : 7,
		slide : function(event, ui) {

			lip.lowerLipUpper_y = ui.value;
			$('#slider3-value').html('lowerLipUpper_y: ' + lip.lowerLipUpper_y);

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawMouth(lip);

		}
	});

	$("#slider4").slider({
		range : "min",
		value : lip.upperLipLine_y,
		min : 15,
		max : 70,
		slide : function(event, ui) {

			lip.upperLipLine_y = ui.value;
			$('#slider4-value').html('upperLipLine_y: ' + lip.upperLipLine_y);

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawMouth(lip);

		}
	});

	$("#slider5").slider({
		range : "min",
		value : lip.indentDepth_y,
		min : 3,
		max : 13,
		slide : function(event, ui) {

			lip.indentDepth_y = ui.value;
			$('#slider5-value').html('indentDepth_y: ' + lip.indentDepth_y);

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawMouth(lip);

		}
	});

	$("#slider6").slider({
		range : "min",
		value : lip.indentWidth_x,
		min : 25,
		max : 50,
		slide : function(event, ui) {

			lip.indentWidth_x = ui.value;
			$('#slider6-value').html('indentWidth_x: ' + lip.indentWidth_x);

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawMouth(lip);

		}
	});
	$("#slider7").slider({
		range : "min",
		value : lip.corner_y,
		min : 0,
		max : 20,
		slide : function(event, ui) {

			lip.happyFactor = ui.value;
			$('#slider7-value').html('<b>Happy</b> Factor: ' + lip.happyFactor);

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawMouth(lip);

		}
	});

	if (canvas.getContext) {

		var ctx = canvas.getContext('2d');
		$('#slider1-value').html('xMargin: ' + lip.xMargin);
		$('#slider2-value').html('lowerLipBottom_y: ' + lip.lowerLipBottom_y);
		$('#slider3-value').html('lowerLipUpper_y: ' + lip.lowerLipUpper_y);
		$('#slider4-value').html('upperLipLine_y: ' + lip.upperLipLine_y);
		$('#slider5-value').html('indentDepth_y: ' + lip.indentDepth_y);
		$('#slider6-value').html('indentWidth_x: ' + lip.indentWidth_x);
		$('#slider7-value').html('<b>Happy</b> Factor: ' + lip.happyFactor);
		drawMouth(lip);

	}
}
