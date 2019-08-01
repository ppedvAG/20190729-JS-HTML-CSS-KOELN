function makeBigger() {
    h1ID.style.fontSize = '40px';
}
function makeDefault() {
    h1ID.style.fontSize = '20px';
}
/* alle CSS-Eigenschaften haben unter anderem den Wert initial. Der bedeutet Default-Wert. */
/* inherit bedeutet 'übernimm den Wert für die aktuelle Eigenschaft vom Elternelement' */

h1ID.addEventListener("mouseover", makeBigger, true);
h1ID.addEventListener("mouseleave", makeDefault, true);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))