export function War(container) {
    const header = document.createElement("h2");
    header.textContent = "War";

    const img = document.createElement("img");
    img.src = "./assets/images/8lluk3.png";
    img.style.maxWidth = "400px";
  img.style.marginTop = "20px";

  container.append(header, img);
}