// @ts-check

(() => {
  const headers = document.querySelectorAll("h2, h3, h4, h5, h6");
  const glossary = document.getElementById("glossary");
  headers.forEach(element => {
    const idString = element.innerText.toLowerCase().replaceAll(" ", "-");
    element.id = idString;
    glossary.innerHTML += `<li><a href="#${idString}">${element.innerText}</a></li>`
  })
})()
