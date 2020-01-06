/* Create Text Node */
var h = document.createElement('h6')
var myValue = document.createTextNode('Sumit Jadiya')

h.appendChild(myValue);
document.querySelector('h1').appendChild(h)

/* while Loop in JS */
let value = 5;
while (value > 0) {
    console.log(value--);
}

/* Code for TODO application */
/* My version */
/*
function addTodo() {
    let elem = document.createElement('li')
    elem.setAttribute('class', 'mycheck');

    let inp = document.createElement('input')
    inp.setAttribute('type', 'checkbox')
    inp.setAttribute('id', 'check')

    var lab = document.createElement('label')
    var val = document.createTextNode(document.querySelector('#input').value)
    lab.appendChild(val)

    elem.appendChild(inp)
    elem.appendChild(lab)

    var mainDoc = document.querySelector('.list')
    mainDoc.appendChild(elem)
    document.querySelector('#input').value = ''
}
*/

/* Author version */
var ul = document.querySelector('.list')
var li

var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

function addItem() {

    var input = document.getElementById('input')
    var item = input.value
    var textNode = document.createTextNode(item)
    if (item === '')
        return false
    else {
        // create li
        li = document.createElement('li')

        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        // create label
        var label = document.createElement('label')

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        li.className = 'visual'

        setTimeout(() => {
            li.className = 'visual'
        }, 2)

    }
    input.value = ''

}

function removeItem() {
    li = ul.children;
    //    console.log(li);

    for (let index = 0; index < li.length; index++) {
        console.log(li[index].children[0].checked);

        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }

}