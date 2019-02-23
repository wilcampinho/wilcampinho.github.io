function fat(num) {
  var x = 1;
  var fat = 1;
  for (x=1;x<=num;x++){
    fat = fat*x;
  }
  return fat;
}

var num = prompt('Digite um numero: ');
alert(fat(num));
console.log(fat(num));

function impar(num2) {
  if (num2%2 == 0) {
    return 1;
  } else {
    return 0;
  }
}

var num2 = prompt ('Digite um numero: ');
if (impar(num2) == 1) {
  alert('O numero e par');
  console.log('Par');
} else {
  alert('O numero e impar');
  console.log('Impar');
}

function validaEmail(str) {
  var valida = new RegExp(/^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/);

  if (valida.test(str)) {
    return 1;
  } else {
    return 0;
  }

}

var email = prompt ('Digite um email: ');
if (validaEmail(email) == 1) {
  alert('Email valido');
  console.log('Valido');
} else {
  alert('Email invalido');
  console.log('Invalido');
}
