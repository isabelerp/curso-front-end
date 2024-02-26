const form   = document.getElementById('formulario-02');
const campos = document.querySelectorAll('.obrigatorio');
const spans   = document.querySelectorAll('.required');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const cepRegex =  /^[0-9]{5}-[0-9]{3}$/;
const ufRegex = /^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/;
const telefoneRegex = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;


function setError(index){
    campos[index].style.border = '2px solid #f00';
    spans[index].style.display = 'block';

}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';

}


function nameValidate(){
    if(campos[0].value.length < 5){

        setError(0);
    }
    else {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);

    }
    else
    {
        removeError(1);
    }

}

function cepValidate(){
    if(!cepRegex.test(campos[3].value))
    {
        setError(3);
    }
    else
    {
        removeError(3);
    }
}
function cidadeValidate(){
    if(campos[4].value.length < 4){
        setError(4);
    }
    else
    {
        removeError(4);
    }
}

function ufValidate(){
    if(!ufRegex.test(campos[5].value))
    {
        setError(5);
    }
    else
    {
        removeError(5);
    }
}

function telefoneValidate(){
    if(!telefoneRegex.test(campos[2].value))
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}
