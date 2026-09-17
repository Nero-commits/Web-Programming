const refreshBtn = document.getElementById('refresh-btn');
const jokeContainer = document.getElementById('joke-container');

// 1. Define the async function to fetch data from the API
async function getJoke() {
  try {
    jokeContainer.innerText = "Loading new joke...";

    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    // Update the DOM without reloading the page
    jokeContainer.innerHTML = `<strong>${data.setup}</strong> <br> <em>${data.punchline}</em>`;

  } catch (error) {
    jokeContainer.innerText = "Failed to load joke. Please try again.";
    console.error("API Error:", error);
  }
}

// 2. Load a joke automatically when the page first opens
getJoke();

// 3. Attach the SAME function to the Refresh button
refreshBtn.addEventListener('click', getJoke);


