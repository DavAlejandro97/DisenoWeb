$(document).ready(function(){
	// $("#irArticulo1").offset().top;
	$("#irArticulo1").click(function(){
		var posicion = $("#articulo2").offset().top;
		$("html,body").animate({
			scrollTop : posicion;
		},800)
	})
})