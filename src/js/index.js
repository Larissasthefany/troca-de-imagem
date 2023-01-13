$('.btn').click(function(){
    let name = $(this).text();
    $("#titulo").html(name);
});

function trocarImagem1(){
    document.querySelector('body').style.background = "url('bleach.jpg') center center / cover";
}

function trocarImagem2(){
    document.querySelector('body').style.background = "url('one-piece.png') center center / cover"

}

function trocarImagem3(){
    document.querySelector('body').style.background = "url('itachi.webp') center center / cover"
}

