function readText(){
    return document.getElementById('texto').value;
}


function compruebaDate(){
    var texto=readText();
    let correct = correctDate(texto);
    if(correct){
        resultado.innerHTML += '<p>> La cadena ingresada contiene una fecha (dd/mm/aaaa)</p>';
    }else{
        resultado.innerHTML += '<p>> La cadena ingresada <strong>NO</strong> contiene una fecha (dd/mm/aaaa)</p>';
    }
};

function correctDate(text){
    resultado.innerHTML += '<p>> Se ingresó: \"' + text + '\"</p>';
    let array_text = text.split(' ')
    for(i in array_text){
        if(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(array_text[i]))
        return true;
    }
    return false;
}


function compruebaCorreo(){
    let correo = readText();
    resultado.innerHTML += '<p>> Se ingresó: \"' + correo + '\"</p>';
    if(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo))
        resultado.innerHTML += '<p>> Se ingresó formato de correo correcto</p>';
    else
        resultado.innerHTML += '<p>> <strong>NO</strong> se ingresó formato de correo correcto</p>';
};

function cambiaOrden(){
    let input = readText();
    resultado.innerHTML += '<p>> Se ingresó: ' + input + '</p>';
    if(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(input)){
        let array = input.split(' ');
        let output = '';
        for(let i = array.length-1; i>=0; i--){
            if(i == array.length-1)
                output = array[i] + ', ';
            else
                output += array[i];
            }
        resultado.innerHTML += '<p>> ' + output + '</p>';
    }else{
        resultado.innerHTML += '<p>> No se ingreso \"Nombre Apellido\"</p>';
    }
};