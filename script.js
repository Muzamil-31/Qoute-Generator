let btn = document.getElementById("button");
let quoteEl = document.getElementById("quote");
let authorEl = document.getElementById("author");

btn.addEventListener("click", async () => {
    let { quote, author } = await getQuote();

    quoteEl.innerText = quote;
    authorEl.textContent = `- ${author}`;
});

async function getQuote() {
    let response = await fetch(
        "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom,life",
        {
            headers: {
                "X-Api-Key": "I1afvhLiFeWaFwSBN1qA0zHMcmc4ojN4JefDzsmF"
            }
        }
    );

    let data = await response.json();

    console.log(data);

    return {
        quote: data[0].quote,
        author: data[0].author
    };
}