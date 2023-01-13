$('.btn').click(function(){
    let name = $(this).text();
    $("#titulo").html(name);
});

function trocarImagem1(){
    document.querySelector('body').style.background = "url('../src/img/umbrella.jpg') center center / cover";
}

function trocarImagem2(){
    document.querySelector('body').style.background = "url('../src/img/capa.jpg') center center / cover"

}

function trocarImagem3(){
    document.querySelector('body').style.background = "url('../src/img/naruto.webp') center center / cover"
}

