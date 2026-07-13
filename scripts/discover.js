const images = [
  { src: "../images/market.jpg", alt: "Accra Market" },
  { src: "../images/beach.jpg", alt: "Labadi Beach" },
  { src: "../images/independence.jpg", alt: "Independence Arch" },
  { src: "../images/art.jpg", alt: "Art Center" }
];

const gallery = document.getElementById("gallery");

function loadGallery(list) {
  gallery.innerHTML = "";
  list.forEach(img => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.alt;
    image.loading = "lazy"; // performance boost
    figure.appendChild(image);

    const caption = document.createElement("figcaption");
    caption.textContent = img.alt;
    figure.appendChild(caption);

    gallery.appendChild(figure);
  });
}

loadGallery(images);
