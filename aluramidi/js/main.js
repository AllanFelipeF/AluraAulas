const tocaSom = (seletorAudio) => {
    const elemento = document.querySelector(seletorAudio);
    
    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento ou seletor não encontrado');
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaTeclas.length; i++) {

    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){ tocaSom(idAudio) };

    tecla.onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() { 
        tecla.classList.remove('ativa');
    }

}