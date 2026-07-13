async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function displayMembers(members) {
  const container = document.querySelector(".members");
  container.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership: ${member.membership}</p>
    `;
    container.appendChild(card);
  });
}

// Toggle views
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const container = document.querySelector(".members");

gridBtn.addEventListener("click", () => container.classList.add("grid"));
listBtn.addEventListener("click", () => container.classList.remove("grid"));

// Footer info
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

loadMembers();
