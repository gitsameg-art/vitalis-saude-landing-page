        // VARIAVEIS
// var. constante
const botao_teste_gratis = document.getElementById("botao-teste");
const botao_digitalizar_clinica = document.getElementById("botao-clinica");
const botao_entendi_aviso = document.getElementById("entindi-aviso");

let primeira_vez_no_site = true;

        // FUNÇÕES
// 
function mudar_outro_html(url_html){
    window.location.href = url_html;
}


        // AÇÕES
// 

botao_teste_gratis.addEventListener("click",(evento)=>{
    mudar_outro_html("certo.html");
});

botao_digitalizar_clinica.addEventListener("click", (evento)=>{
        mudar_outro_html("certo.html");
});

botao_entendi_aviso.addEventListener("click", (evento)=>{
        document.querySelector(".explicar").remove();
});