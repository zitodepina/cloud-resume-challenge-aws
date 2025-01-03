const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://xur7meyve567q6sezadcwyrurq0aozsa.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();