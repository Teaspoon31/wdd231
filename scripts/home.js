// ----- FOOTER YEAR -----
document.querySelector("#year").textContent = new Date().getFullYear();

// ----- WEATHER -----
const weatherTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#current-desc");
const forecastDiv = document.querySelector("#forecast");

// Replace with your actual OpenWeatherMap API key
const apiKey = "YOUR_API_KEY_HERE";

// Accra coordinates (change if needed)
const lat = 5.6037;
const lon = -0.1870;

const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    const current = data.list[0];
    weatherTemp.textContent = `Current Temperature: ${Math.round(current.main.temp)}°F`;
    weatherDesc.textContent = `Conditions: ${current.weather[0].description}`;

    forecastDiv.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const item = data.list[i * 8];
      const date = new Date(item.dt * 1000);
      const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

      const p = document.createElement("p");
      p.textContent = `${dayName}: ${Math.round(item.main.temp)}°F`;
      forecastDiv.appendChild(p);
    }
  } catch (error) {
    weatherTemp.textContent = "Weather unavailable.";
  }
}

getWeather();

// ----- MEMBER SPOTLIGHTS -----
const spotlightContainer = document.querySelector("#spotlight-container");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();

    const filtered = members.filter(m => m.membership === "Gold" || m.membership === "Silver");

    const shuffled = filtered.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("article");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p>Membership: ${member.membership}</p>
      `;

      spotlightContainer.appendChild(card);
    });
  } catch (error) {
    spotlightContainer.textContent = "Unable to load member spotlights.";
  }
}

loadSpotlights();
