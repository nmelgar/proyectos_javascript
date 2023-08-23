function generate_quotes(callback) {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://raw.githubusercontent.com/nmelgar/citas_inspiradoras_lds/gh-pages/citas_inspiradoras.json`
  );
  request.onload = function () {
    let response = request.response;
    let parsedData = JSON.parse(response);
    callback(parsedData);
  };
  request.send();
}

function chooseQuote(parsedData) {
  let max = parsedData.citas.length;
  let number = Math.floor(Math.random() * max);
  let chosenQuote = parsedData.citas[number].cita;
  let chosenAuthor = parsedData.citas[number].autor;
  let quoteText = document.getElementById("quote-text");
  quoteText.textContent = chosenQuote;
  let author = document.getElementById("author-info");
  author.textContent = chosenAuthor;
}

generate_quotes(chooseQuote);

document
  .getElementById("new-quote-button")
  .addEventListener("click", function () {
    generate_quotes(chooseQuote);
  });
