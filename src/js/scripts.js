$(function () {
	//window.alert("sometext");
	var TEMP_CASACO = 15;
	var TEMP_SHORTINHO = 25;
	var Temp = 10;

//CASACO É EXAGERO MAS SHORTINHO É OUSADIA
	function update() {

	$.get ('http://sensor-api.localdata.com/api/v1/sources/ci4vye225000n02s7rxjdfxa1/entries.json?count=1&sort=desc').done(function (response) {
		var atualTemp = response.data[0].data.temperature;
		if (atualTemp >= TEMP_SHORTINHO) {
			var imagem = 'img/shortinho.png';//SHORTINHO
			var texto = 'HOJE É DIA DE MOSTRAR AS COXAS';
		}
		else if (atualTemp <= TEMP_CASACO) {
			var imagem = 'img/casaco.png'; //CASACO
			var texto = 'SE CONTROLA PIRIGUETE';
		}
		else {
			var imagem = 'img/ouse.png';//OUSADIA
			var texto = 'CASACO É EXAGERO MAS SHORTINHO É OUSADIA';
		}
		
		setTimeout(function(){
			$('.img-responsive img').attr('src', imagem).fadeIn( );
			$("#estado").text(texto);
		}, 5000);
		$('.roupa').css({
			top: '50%'
		});
		$('#temp').text(atualTemp+"ºC")
	});
	}
	update(); 

	setInterval(update, 10000);
});
