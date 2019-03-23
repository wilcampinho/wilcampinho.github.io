var enlace1 = document.getElementById('enlace_1');

function tira1(clica){
    if(clica.target.textContent == 'Ocultar Conteúdo'){
        conteudo = document.getElementById('conteudo_1');
        conteudo.style.display = 'none';
        clica.target.textContent = 'Mostrar Conteúdo';
    } else {
        conteudo = document.getElementById('conteudo_1');
        conteudo.style.display = 'block';
        clica.target.textContent = 'Ocultar Conteúdo';
    }
}

enlace1.addEventListener('click', tira1, false);

var en2 = document.getElementById('enlace_2');

function tira2(link){
    if(link.target.textContent == 'Ocultar Conteúdo'){
        conteudo = document.getElementById('conteudo_2');
        conteudo.style.display = 'none';
        link.target.textContent = 'Mostrar Conteúdo';
    } else {
        conteudo = document.getElementById('conteudo_2');
        conteudo.style.display = 'block';
        link.target.textContent = 'Ocultar Conteúdo';
    }
}

en2.addEventListener('click', tira2, false);

var en3 = document.getElementById('enlace_3');

function tira3(link){
    if(link.target.textContent == 'Ocultar Conteúdo'){
        conteudo = document.getElementById('conteudo_3');
        conteudo.style.display = 'none';
        link.target.textContent = 'Mostrar Conteúdo';
    } else {
        conteudo = document.getElementById('conteudo_3');
        conteudo.style.display = 'block';
        link.target.textContent = 'Ocultar Conteúdo';
    }
}

en3.addEventListener('click', tira3, false);