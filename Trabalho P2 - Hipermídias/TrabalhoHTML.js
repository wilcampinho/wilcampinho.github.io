window.addEventListener("load", function () {
	var enviar = document.getElementById('enviar').addEventListener("click",Enviar);
});

function Enviar(){
  var embranco = '';
  var verifica = '';
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
      if(inputs[i].type === 'text' || inputs[i].type === 'password'){
        if(inputs[i].value === ''){
          embranco += (" O campo " + inputs[i].name + " está em branco \n");
        } else {
          if(inputs[i].id === 'nome' || inputs[i].id === 'sobrenome' || inputs[i].id === 'bairro' || inputs[i].id === 'cidade'){
            if (inputs[i].value.search(/^([a-zA-Zà-úÀ-Ú]|\s+)+$/) == -1){
              verifica += (" O campo " + inputs[i].name + " só aceita letra \n" );
            }
          }

          if( inputs[i].id === 'rg' || inputs[i].id === 'numero'){
            if(isNaN(inputs[i].value)){
              verifica += (" O campo " + inputs[i].name + " só aceita numero \n" );
            }
          }

          if( inputs[i].id === 'cep1' || inputs[i].id === 'cep2'){
            if(isNaN(inputs[i].value)){
              verifica += (" O campo CPF só aceita numero \n" );
            }
          }

          if( inputs[i].id === 'cpf1' || inputs[i].id === 'cpf2'){
            if(isNaN(inputs[i].value)){
              verifica += (" O campo CPF só aceita numero \n" );
            }
          }

          if(inputs[i].id === 'email'){
            verifica += email();
          }

          if(inputs[i].id === 'senha'){
            if(document.getElementById('senha').value !=
            document.getElementById('confirmsenha').value){
              verifica += ' As senhas não conferem.';
            }
          }
        }
      }
  }

  embranco += sexo();
	embranco += nasc();
	embranco += nouf();
  embranco += trabalhar();
  embranco += aprender();
	embranco += coment();

  if(embranco === '' & verifica === '' ){
      alert("Cadastro realizado com sucesso!");
  }else{
      if(embranco != ''){
        alert(embranco);
      }
      if(verifica != ''){
        alert(verifica);
      }
  }
}

function sexo(){
  var resposta = document.getElementsByName('Sexo');
  var aux = 0;
  for (var i = 0; i < resposta.length; i++) {
    if(resposta[i].checked == true){
      aux = 1;
    }
  }
  if(aux == 0){
    return (" O campo Sexo não foi selecionado. \n");
  }else{
    return ('');
  }
}

function nasc(){
	var data = document.getElementById('nascimento');
	if(data.value == ''){
		return (" O campo Nascimento está em branco. \n");
	}else{
		return ('');
	}
}

function nouf(){
	var nouf = document.getElementById('estado').selectedIndex;
	if(document.getElementsByTagName('option')[nouf].value === 'nouf'){
		return (" O campo Estado está em branco. \n");
	}else{
		return ('');
	}
}

function email(){
	var check = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
	var email = document.getElementById('email').value;
	var confirmemail = document.getElementById('confirmemail').value;
	var checkemail = '';

		if(email.search(check) == -1){
			checkemail += ' E-mail inválido. Por favor, digite um e-mail válido. \n'
		}
		if(email != confirmemail){
			checkemail += ' Os e-mails não coicidem. Por favor, corríja-os! \n';
		}
	return checkemail;
}

function trabalhar(){
  var resposta = document.getElementsByName('Trabalhar');
  var aux = 0;
  for (var i = 0; i < resposta.length; i++) {
    if(resposta[i].checked == true){
      aux = 1;
    }
  }
  if(aux == 0){
    return (" O campo Trabalhar como Webmaster está em branco. \n");
  }else{
    return ('');
  }
}

function aprender(){
  var resposta = document.getElementsByName('Aprender');
  var aux = 0;
  for (var i = 0; i < resposta.length; i++) {
    if(resposta[i].checked == true){
      aux = 1;
    }
  }
  if(aux == 0){
    return (" Marque pelo menos uma opção do que você deseja aprender. \n");
  }else{
    return ('');
  }
}

 function coment(){
	 var comentario = document.getElementById('comentario');
   if(comentario.value === ''){
     return (" O campo Comentário está em branco. \n");
	 }else{
		 return ('');
	 }
 }
