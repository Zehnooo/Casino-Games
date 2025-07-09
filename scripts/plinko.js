export function PlinkoBoundary(container) {
  const header = document.createElement("h2");
  header.textContent = "Plinko";
  container.append(header);

  const gameArea = document.createElement("div");
  gameArea.id = "game-area";

  const pegs = [];
  const ball = { x: 200, y: 0, radius: 6, vx: 0, vy: 0};
  const gravity = 0.2;
  const pegRadius = 5;
  
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 8; col++) {
      const offset = row % 2 === 0 ? 0 : 25;
      const x = col * 50 + offset;
      const y = row * 50 + 25;

      const peg = document.createElement("div");
      peg.classList.add("peg");
      peg.style.left = `${x}px`;
      peg.style.top = `${y}px`;

      gameArea.appendChild(peg);
    }
  }

  container.append(gameArea);
}