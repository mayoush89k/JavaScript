const younger = "you’re too young"
const bigger = "you can drink"

const section = document.querySelector('section')
const age = document.querySelector('input')
const submit = document.querySelector('button')
const answer = document.createElement('p')
section.appendChild(answer)

submit.addEventListener('click' , ()=>{
    if(Number(age.value) >= 18){
        answer.innerText= bigger;
    }
    else{
        answer.innerText = younger
    }
})