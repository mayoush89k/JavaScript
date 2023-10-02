const start_here = document.querySelector('.start-here')

//1
start_here.innerHTML = "main Title"

//2
const ul = document.querySelectorAll('ul')
const subtitle4 = document.createElement('li')
subtitle4.innerHTML = "sub title 4"
ul[1].appendChild(subtitle4)

//3
const li = document.querySelectorAll('li')
li[li.length - 1].remove()

//4
const title = document.querySelector('title')
title.innerHTML = 'Master Of The Dom'

//5
let newTitle = document.querySelector('p')
newTitle.innerText = "Exercise 19 - 1"