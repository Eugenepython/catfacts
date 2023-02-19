

const createFactButton = document.getElementById("createFact");
createFactButton.addEventListener("click", function() {
  fetch(`https://catfact.ninja/facts/`)
  .then(res => res.json())
  .then(data => {
    const randomFact = data.data[Math.floor(Math.random() * data.data.length)];
    fact.innerText = randomFact.fact
  });
});
