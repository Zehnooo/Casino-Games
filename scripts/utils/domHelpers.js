/*
Dom creation, manipulation, removal, etc.
*/
function createButton(id, text) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = text;
    return btn;
}


function createCardElement(card) {
    const img = document.createElement("img");
    img.src = card.image;
    img.alt = `${card.value} of ${card.suit}`;
    img.classList.add("card");
    return img;
}

export { createButton, createCardElement };