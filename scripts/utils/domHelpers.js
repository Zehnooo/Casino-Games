/*
Dom creation, manipulation, removal, etc.
*/
function createButton(id, text) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = text;
    return btn;
}

export { createButton }