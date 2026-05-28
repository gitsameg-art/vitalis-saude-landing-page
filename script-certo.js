const botao_voltar_principal = document.getElementById("voltar");

function mudar_outro_html(url_html){
    window.location.href = url_html;
}

botao_voltar_principal.addEventListener("click", (evento)=>{
    mudar_outro_html("index.html")
});