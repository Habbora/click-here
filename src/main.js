// Objetivo: Aparecer varios textos 'Bom dia' em locais, tamanhos e cores aleatorias na tela. Removendo ele com um tempo baseado em um Array;

function buttonClick() {
  document.getElementsByTagName("button").item(0).remove();
  spawnTextBomDia();
  setInterval(() => {
    spawnTextBomDia();
  }, 10);
}

function spawnTextBomDia() {
  const bodyElement = document.getElementsByTagName("body").item(0);

  const spanElement = document.createElement("span");
  spanElement.textContent = "Bom dia";
  spanElement.style.position = "absolute";
  spanElement.style.left = Math.random() * window.innerWidth + "px";
  spanElement.style.top = Math.random() * window.innerHeight + "px";
  spanElement.style.fontSize = Math.random() * 100 + "px";
  spanElement.style.color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";

  bodyElement.appendChild(spanElement);

  setTimeout(() => {
    spanElement.remove();
  }, 2000);
}
