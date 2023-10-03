const textarea = document.querySelector('textarea')
const submit = document.querySelector('button')

submit.addEventListener('click' , () => {
    if(textarea.value.length < 100){
        alert("Please write more words")
    }
})