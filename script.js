function toggleMode() {
  const html =
    document.documentElement /* document.documentElement serve para manipular todo o HTML */
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver Light mode, Adiciona a imagem nova
    img.setAttribute("src", "./assets/Avatar-2.png")
  } else {
    //Se não tiver light mode, manter a imagem
    img.setAttribute("src", "/assets/Avatar-1.png")
  }
}

//Se tiver Light mode, Adiciona a imagem nova
//
//  html.classList.remove("light")
//
//   html.classList.add("light")
