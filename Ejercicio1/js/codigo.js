function aleatorio(){
    var resultado=[0,0,0,0,0,0,0,0,0,0,0];
    let a,b;

    for (let i=0;i<36000;i++){
        a=Math.floor(Math.random()*(6)+1);
        b=Math.floor(Math.random()*(6)+1);
        resultado[a+b-2]+=1;
    }

    document.getElementById("resultado").innerHTML="["+resultado+"]";
}