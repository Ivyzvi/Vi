document.addEventListener("DOMContentLoaded", () => {
  const imagePaths = [
    "Store/Images/artworks//intro1.png",
    "Store/Images/artworks/intro2.png",
    "Store/Images/artworks/intro3.png",
    "Store/Images/artworks/intro4.png"
  ];

  // Shuffle imagePaths randomly
  const shuffled = imagePaths.sort(() => 0.5 - Math.random());

  const track = document.getElementById("scroll-track");

  // Add shuffled images to the track
  shuffled.forEach(path => {
    const img = document.createElement("img");
    img.src = path;
    img.alt = "Intro image";
    track.appendChild(img);
  });

  // Optionally, duplicate images for seamless scroll
  shuffled.forEach(path => {
    const img = document.createElement("img");
    img.src = path;
    img.alt = "Intro image";
    track.appendChild(img);
  });
});