$(function () {
    var TEMP_CASACO = 15;
    var TEMP_SHORTINHO = 25;

//CASACO É EXAGERO MAS SHORTINHO É OUSADIA
    function update() {
	window.alert("sometext");
        $.get ('http://sensor-api.localdata.com/api/v1/sources/ci4vye225000n02s7rxjdfxa1/entries.json?count=1&sort=desc')
            .done(function (response) {
                var atualTemp = response.data[0].data.temperature;
		
                if (atualTemp >= TEMP_SHORTINHO) {
                    var imagem = 'img/shortinho.gif';//SHORTINHO

                } 
                else if (atualTemp <= TEMP_CASACO) {
                    var imagem = 'img/casaco.gif'; //CASACO

                    
                }
                else {
                    var imagem = 'img/ousadia.jpg';//OUSADIA
                }            

                $('.roupa img').attr('src', imagem);
		 
            });
    }
    update();

    setInterval(update, 10000);
});
