document.title = 'changed title'
console.log(document.getElementById('idone').innerText)

const myElement = document.querySelectorAll('#idone')
console.log(myElement)
console.log(myElement[0])

const myPElement = document.querySelector('p')
myPElement.textContent = 'Sumit Changed this paragraph content'

const myPElements = document.querySelectorAll('p')
myPElements.forEach((p) => p.textContent = "changing everything using query selector")

/* Create new DOM element */
const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'
document.querySelector('body').appendChild(myNewPara)

/* add event listeners */
document.querySelector('button').addEventListener('click', (event) => {
    //    console.log(`Button was pressed ${event}`);
    event.target.textContent = 'I was clicked'
})

/* Track Input form */
document.querySelector('#myform').addEventListener('input', () => { console.log(event.target.value) })

/* Input Validation */
function myValidation(params) {
    let myValue = document.querySelector('#myform').value
    if (isNaN(myValue) || myValue < 1 || myValue > 20)
        document.querySelector('#idone').textContent = 'Not a valid number'
    else
        document.querySelector('#idone').textContent = 'This input is OK!'

}

/* Advanced form Validation */
document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = '';
    event.target.realname.value = '';
})