const formData = {};

const form = document.querySelector("form");

form.addEventListener("input", (e) => {
  if (e.target.name == "fullName") {
    formData["fullName"] = e.target.value;
  }
  if (e.target.name == "age") {
    formData["Age"] = e.target.value;
  }
  if (e.target.name == "email") {
    formData["Email"] = e.target.value;
  }
});

// after submit open a text window that writes all the information
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputs = document.getElementsByTagName('input')
    Array.from(inputs).forEach(input => {
        input.setAttribute('disabled' , true)
        
    });
    const dataSection = document.createElement('section')
    dataSection.style.border = "1px solid black"
    dataSection.style.padding = '10px'
    dataSection.innerText = ''
    for (const key in formData) {
        if (Object.hasOwnProperty.call(formData, key)) {
            dataSection.innerText = dataSection.innerText +  '\n' + key + ": " + formData[key] ;
        }
    }
    form.appendChild(dataSection)
    const confirmationBtn = document.createElement('button')
    confirmationBtn.innerText = "confirm Data"
    confirmationBtn.setAttribute('name' , "confirm")
    form.appendChild(confirmationBtn)
    const change = document.createElement('button')
    change.innerText = "change Data"
    confirmationBtn.setAttribute('name' , "change")
    form.appendChild(change)
    
    confirmationBtn.addEventListener('click' , (e) => {
        e.preventDefault()
        const confirmationText = document.createElement('p')
        confirmationText.innerText = "congratulations you successfully sent this form"
        form.appendChild(confirmationText)
        form.reset()
    })
    
    change.addEventListener('click' , (e) => {
        e.preventDefault()
    Array.from(inputs).forEach(input => {
        input.removeAttribute('disabled')
        input.addEventListener('input' , (e) => {
            formData[e.target.name] = e.target.value;})
    });
    console.log(formData);
    })
});
