/* Local Storage in JS */

localStorage.setItem('hero', 'thor')
localStorage.setItem('todo', 'buy tea')
console.log(localStorage.getItem('hero'));

localStorage.setItem('todo', 'buy bread')
console.log(localStorage.getItem('todo'));

// delete from local storage
localStorage.removeItem('hero')

// cleanup entire storage
localStorage.clear()