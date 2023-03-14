console.log('second js added file');


// Create HTML


const secondlist = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = 'My dynamic Item'

secondlist.appendChild(li);