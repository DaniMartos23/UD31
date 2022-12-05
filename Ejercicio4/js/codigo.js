
window.onload=function(){
    panelnum=document.getElementById("panel");
}
num="0";
coma=false;
numaux=0;
op="";
reset=true;
function clickboton(numero){
    if(panelnum.innerHTML=="" || reset==true){
        if(numero=="."){
            num+=numero;
            panelnum.innerHTML=num;
            coma=true;
        }
        else{
            num=numero;
            panelnum.innerHTML=num;
        }
    }else{
        if(numero=="." && coma==false){
            num+=numero;
            panelnum.innerHTML=num;
            coma=true;
        }
        else if(numero=="." && coma==true){
            //nada porque no puede haber varias comas
        }
        else{
            num+=numero;
            panelnum.innerHTML=num;
        }
    }
    reset=false;
}

function clickbotonsuma(){
    if(op==""){
        numaux=Number(num);
        op="suma";
        num="0";
        panelnum.innerHTML=String(numaux);
    }
    else{
        numaux=opera();
        op="suma";
        panelnum.innerHTML=String(numaux);
    }
    reset=true;
}

function clickbotonresta(){
    if(op==""){
        numaux=Number(num);
        op="resta";
        num="0";
        panelnum.innerHTML=String(numaux);
    }
    else{
        numaux=opera();
        op="resta";
        panelnum.innerHTML=String(numaux);
    }
    reset=true;
}

function clickbotonmult(){
    if(op==""){
        numaux=Number(num);
        op="mult";
        num="0";
        panelnum.innerHTML=String(numaux);
    }
    else{
        numaux=opera();
        op="mult";
        panelnum.innerHTML=String(numaux);
    }
    reset=true;
}

function clickbotondividir(){
    if(op==""){
        numaux=Number(num);
        op="dividir";
        num="0";
        panelnum.innerHTML=String(numaux);
    }
    else{
        numaux=opera();
        op="dividir";
        panelnum.innerHTML=String(numaux);
    }
    reset=true;
}

function clickbotonraiz(){
    Math.sqrt(num);
    panelnum.innerHTML=num;
    op="";
    reset=true;
}

function clickbotonporcent(){
    num=num/100;
    panelnum.innerHTML=num;
    numaux=opera();
    op="";
    reset=true;
}

function clickbotoninverso(){
    num2=Number(num);
    num2=1/num2;
    num=String(num2);
    panelnum.innerHTML=num;
    op="";
    reset=true;
}
function clickbotonsigno(){
    num2=Number(num);
    num2=-num2;
    num=String(num2);
    panelnum.innerHTML=num;
}

function clickbotonresultado(){
    if(op==""){
        panelnum.innerHTML=num;
    }
    else{
        numaux=opera();
        num=String(numaux);
        panelnum.innerHTML=num;
        op="";
        reset=true;
        
    }
}
function opera(){
    resultado=0;
    switch (op) {
        case "suma":
            resultado=numaux+Number(num);
            break;
        case "resta":
            resultado=numaux-Number(num);
            break;
        case "mult":
            resultado=numaux*Number(num);
            break;
        case "dividir":
            resultado=numaux/Number(num);
            break;
        default:
            break;
    }
    return resultado;
}
function clickbotonborrar(){
    if(num!="0"){
        num=num.substring(0, num.length - 1);
        panelnum.innerHTML=num;
    }
}
function clickbotonborrarahora(){
    num="0";
    panelnum.innerHTML=num;
    coma=false;
    reset=true;
}
function clickbotonborrartotal(){
    num="0";
    panelnum.innerHTML=num;
    numaux=0;
    op="";
    coma=false;
    reset=true;

}

