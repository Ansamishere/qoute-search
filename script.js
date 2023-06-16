const quoteList = document.getElementById("quoteList");
const searchInput = document.getElementById("searchInput");
let quotes = []; //fetched quotes


function fetchquotes() {
  fetch("https://dummyjson.com/quotes")
    .then(response => response.json())
    .then(data => {
      quotes = JSON.parse(data);
      displayQuotes(quotes); 
    })
    .catch(error => {
      console.log("Error fetching quotes:", error);
      quoteList.innerHTML = "Failed to fetch quotes.";
    });
}


function displayQuotes(quotes) {
  quoteList.innerHTML = ""; // Clear 

  if (quotes.length > 0) {
    quotes.forEach(quote => {
      const listItem = document.createElement("li");
      listItem.textContent = quote.text;
      quoteList.appendChild(listItem);
    });
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = "No quotes found.";
    quoteList.appendChild(listItem);
  }
}

function filterquotes() {
  const searchString = searchInput.value.toLowerCase();
  const filteredQuotes = quotes.filter(quote => quote.text.toLowerCase().includes(searchString));
  displayQuotes(filteredQuotes);
}


searchInput.addEventListener("input", filterQuotes);


fetchquotes();
