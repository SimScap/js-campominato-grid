const button = document.getElementById('play');
const wrapper = document.getElementById('my-wrapper');
const scelta = document.getElementById('difficolta');
let sceltaUtente = scelta.value;
let nBox = 0;

button.addEventListener('click', function(){
    if ( scelta.value == 'easy'){
        nBox=100;   
        console.log('easy')
    } else if (scelta.value =='medium'){
        nBox=81;
        console.log('medium')
    }else{
        nBox=49;
        console.log('high');   
    }
    console.log(nBox);

    boxSize = Math.sqrt(nBox);
    wrapper.innerHTML = "";

    for (let i = 1; i<=nBox; i++){
        let newDiv = document.createElement('div');
        newDiv.addEventListener('click', function(){
            newDiv.classList.add('clicked')
        })
        
        /** stai creando un elemento nuovo che poi aggiungerai (r34) al suo parent */
        // creare un sistema di ascolto sul singolo elemento che ne colori il contenuto
        // "colorare il contenuto" => aggiungere una classe

        newDiv.classList.add('box');
        newDiv.style.width = `calc(100% / ${boxSize})`
        newDiv.style.height = newDiv.style.width;
        newDiv.innerText = i;

        // qui devi implementare il sistema di "aggiunta" della classe quando avviene uno specifico evento di click

        wrapper.append(newDiv);
    }
})

/*
A implemento la funzionalita del singolo quadrato che si colora al click

B realizzare la lista delle bombe in base alla difficoltà 

C cambio la classe che gli devo attribuire con l'eventListener vedi punto A in base a se sia una bomba o no
*/


