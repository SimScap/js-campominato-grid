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

    for (let i = 1; i<=nBox; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.style.width = `calc(100% / ${boxSize})`
        newDiv.style.height = newDiv.style.width;
        newDiv.innerText = i;
        wrapper.append(newDiv);
    }
})




