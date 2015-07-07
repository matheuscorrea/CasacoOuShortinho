$(function () {
	//window.alert("sometext");
	var TEMP_CASACO = 15;
	var TEMP_SHORTINHO = 25;
	var Temp = 10;

//CASACO É EXAGERO MAS SHORTINHO É OUSADIA
	function update() {
	window.alert("sometext");
	$.get ('http://sensor-api.localdata.com/api/v1/sources/ci4vjer3i000e02s7r2cj23gs/entries.json?count=1&sort=desc').done(function (response) {
		var atualTemp = response.data[0].data.temperature;
		window.alert(atualTemp);
		if (atualTemp >= TEMP_SHORTINHO) {
			var imagem = 'img/shortinho.gif';//SHORTINHO
			var texto = 'HOJE É DIA DE MOSTRAR AS COXAS';
		}
		else if (atualTemp <= TEMP_CASACO) {
			var imagem = 'img/casaco.gif'; //CASACO
			var texto = 'SE CONTROLA PIRIGUETE';
		}
		else {
			var imagem = 'img/ousadia.jpg';//OUSADIA
			var texto = 'CASACO É EXAGERO MAS SHORTINHO É OUSADIA';
		}

		$('.img-responsive img').attr('src', imagem);
		$("#estado").text(texto);
		$('.roupa').css({
			top: '50%'
		}).removeClass('rodar');
		
	});
	}
	update();

	setInterval(update, 10000);
});
