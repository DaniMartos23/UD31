
window.onload = function() {
    vista=document.getElementById("vista");
    titulo=document.getElementById("titulo");
}
function foto(num) {
    fotos="./img/foto"+num+".jpg";
    document.images["fotovista"].src=fotos;
    texto=document.images["fotos"+num].alt;
    titulo.innerHTML=texto;
}