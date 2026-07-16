// ----- FOOTER YEAR -----
const yearSpan = document.querySelector("#year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ----- WEATHER -----
const weatherTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#current-desc");
const forecastDiv = document.querySelector("#forecast");

// Replace with your actual OpenWeatherMap API key
const apiKey = "YOUR_API_KEY_HERE";

// Example coordinates (Accra, Ghana) – change if needed
const lat = 5.6037;
const lon = -0.1870;

const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error("Weather API error");
    }

    const data = await response.json();

    // Current weather (first item)
    const current = data.list[0];
    const temp = current.main.temp;
    const desc = current.weather[0].description;

    if (weatherTemp) {
      weatherTemp.textContent = `Current Temperature: ${Math.round(temp)}°F`;
    }

    if (weatherDesc) {
      weatherDesc.textContent = `Conditions: ${desc}`;
    }

    // 3-day forecast (approx every 24 hours: 8 * 3-hour steps)
    forecastDiv.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const index = i * 8;
      if (data.list[index]) {
        const item = data.list[index];
        const date = new Date(item.dt * 1000);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const dayTemp = Math.round(item.main.temp);

        const p = document.createElement("p");
        p.textContent = `${dayName}: ${dayTemp}°F`;
        forecastDiv.appendChild(p);
      }
    }
  } catch (error) {
    console.error("Weather error:", error);
    if (weatherTemp) {
      weatherTemp.textContent = "Weather data unavailable.";
    }
  }
}

getWeather();

// ----- MEMBER SPOTLIGHTS -----
const spotlightContainer = document.querySelector("#spotlight-container");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) {
      throw new Error("Members JSON error");
    }

    const members = await response.json();

    // Filter Gold and Silver
    const filtered = members.filter(member =>
      member.membership === "Gold" || member.membership === "Silver"
    );

    // Shuffle and pick 2–3
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    const count = Math.min(3, shuffled.length);
    const selected = shuffled.slice(0, count);

    spotlightContainer.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("article");
      card.classList.add("spotlight-card");

      const img = document.createElement("img");
      img.src = `images/${member.image}`;
      img.alt = `${member.name} logo`;

      const name = document.createElement("h3");
      name.textContent = member.name;

      const phone = document.createElement("p");
      phone.textContent = `Phone: ${member.phone}`;

      const address = document.createElement("p");
      address.textContent = member.address;

      const website = document.createElement("a");
      website.href = member.website;
      website.target = "_blank";
      website.rel = "noopener";
      website.textContent = "Visit Website";

      const level = document.createElement("p");
      level.textContent = `Membership: ${member.membership}`;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(phone);
      card.appendChild(address);
      card.appendChild(website);
      card.appendChild(level);

      spotlightContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Spotlight error:", error);
    spotlightContainer.textContent = "Unable to load member spotlights.";
  }
}

loadSpotlights();
