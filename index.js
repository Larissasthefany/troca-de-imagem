$('.btn').click(function(){
    let name = $(this).text();
    $("#titulo").html(name);
});

function trocarImagem1(){
    document.querySelector('body').style.background = "url('umbrella.jpg') center center / cover";
}

function trocarImagem2(){
    document.querySelector('body').style.background = "url('capa.jpg') center center / cover"

}

function trocarImagem3(){
    document.querySelector('body').style.background = "url('naruto.webp') center center / cover"
}

