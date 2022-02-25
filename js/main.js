var botao = document.querySelector("#btn");
var saibaMais = document.querySelector("#saiba-mais");

botao.addEventListener('click', function (event){
    
    if( saibaMais.style.display === 'block'){
       setTimeout(function(){
        saibaMais.style.display = 'none';
       },500);
    }else{
       setTimeout (function(){
        saibaMais.style.display = 'block';
       },500);
    }
});

