const button = document.getElementById('play');
const wrapper = document.getElementById('my-wrapper')

button.addEventListener('click', function(){
    for  (let i = 1 ; i<=100  ; i++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.innerText = i;
    wrapper.append(newDiv);
    }
})