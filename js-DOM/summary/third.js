console.log('third js file added');

const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1> My Dynamic Section</h1>
    <p> Extra text added inside paragraph </p>
    <ul>
        <li>Dynamic list item</li>
        <li>Dynamic list item</li>
        <li>Dynamic list item</li>
        <li>Dynamic list item</li>
    </ul>
`

main.appendChild(section);