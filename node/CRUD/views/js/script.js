//Mascara nos campos CPF e Senha
$('#iCpf').mask('000.000.000-00');
$('#iSenha').mask('00000000');


//Validação de dados
var cpf = document.getElementById('iCpf');
var nome = document.getElementById('iNome');
var email = document.getElementById('iEmail');
var cadastrar = document.getElementById('iCadastrar');

iCpf.addEventListener('blur', validarCpf);
iNome.addEventListener('blur', validarNome);
iEmail.addEventListener('blur', validarEmail);
iReset.addEventListener('click', resetar);
validar.addEventListener('mouseover', habilitarCadastrar);
//validar.addEventListener('focus', habilitarCadastrar);

function validarCpf() {
    if(cpf.value.length < 14){
        iCpf.style.borderColor = 'red';
        iCpf.style.boxShadow = '0 0 0 0.2rem rgb(255 0 73 / 30%)';
        return 0;
    }
    else{
        //iCpf.style.borderColor = 'green';
        //iCpf.style.boxShadow = '0 0 0 0.2rem rgb(54 218 91 / 50%)';
        iCpf.style.border = '1px solid #ced4da';
        iCpf.style.boxShadow = '0 0 0 0.2rem rgb(256 256 256 / 0%)';
        return 1;
    }
}

function validarNome() {
    if(nome.value.length < 3){
        iNome.style.borderColor = 'red';
        iNome.style.boxShadow = '0 0 0 0.2rem rgb(255 0 73 / 30%)';
        return 0;
    }
    else{
        iNome.style.border = '1px solid #ced4da';
        iNome.style.boxShadow ='0 0 0 0.2rem rgb(256 256 256 / 0%)';
        return 1;
    }
}

function validarEmail() {
    var usuario = email.value.substring(0, email.value.indexOf("@"));
    var dominio = email.value.substring(email.value.indexOf("@")+1, email.value.length);
    var com = email.value.substring(email.value.indexOf("@")+1, email.value.indexOf(".com"));
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (email.value.search(",")==-1) &&
        (dominio.indexOf(".")>-1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1) &&
        (dominio.indexOf("..")==-1) &&
        (email.value.indexOf(";")==-1) &&
        (com.indexOf(".")==-1)
        )
    {
        iEmail.style.border = '1px solid #ced4da';
        iEmail.style.boxShadow ='0 0 0 0.2rem rgb(256 256 256 / 0%)';
        return 1;
    }
    else {
        iEmail.style.borderColor = 'red';
        iEmail.style.boxShadow = '0 0 0 0.2rem rgb(255 0 73 / 30%)'; //rgb(247 145 145) 0px 0px 0px 0.2rem
        return 0;
    }
    
}

function resetar() {
    iCpf.style.border = '1px solid #ced4da';
    iCpf.style.boxShadow = '0 0 0 0.2rem rgb(256 256 256 / 0%)';
    iNome.style.border = '1px solid #ced4da';
    iNome.style.boxShadow ='0 0 0 0.2rem rgb(256 256 256 / 0%)';
    iEmail.style.border = '1px solid #ced4da';
    iEmail.style.boxShadow ='0 0 0 0.2rem rgb(256 256 256 / 0%)';
    iSenha.style.border = '1px solid #ced4da';
    iSenha.style.boxShadow ='0 0 0 0.2rem rgb(256 256 256 / 0%)';
    cadastrar.disabled = false;
}

function habilitarCadastrar() {

    if(validarCpf() == 0 && validarNome() == 0 && validarEmail() == 0){
        cadastrar.disabled = true;
    }
    else{
        cadastrar.disabled = false;
    }
}
