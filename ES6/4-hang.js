// Esta funcion congelara la pagina si se corre desde la consola
// hang(300)
function hang(seconds = 100000) {
  const doneAt = Date.now() + seconds * 1000
  while(Date.now() < doneAt) {}
}
