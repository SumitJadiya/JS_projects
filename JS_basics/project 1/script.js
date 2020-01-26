var counter = 1
var myheading = document.querySelector("#my-heading")
var myList = document.querySelector("#my-list")
var listItems = document.querySelectorAll("li")
var myButton = document.querySelector("#my-button")

activateItem = function (e) {
    if (e.target.nodeName == "LI") {
        myheading.innerHTML = e.target.innerHTML
        for (let index = 0; index < e.target.parentNode.children.length; index++) {
            e.target.parentNode.children[index].classList.remove("active")
        }
        e.target.classList.add("active")
    }
}

addItems = function () {
    myList.innerHTML += "<li> New List Item " + (counter++) + " </li>"
}

myList.addEventListener("click", activateItem)

myButton.addEventListener("click", addItems)