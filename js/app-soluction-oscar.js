const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

var img_path = 'img/'
var position = 0;

const container = document.querySelector('.img-container')

// Recupero un array de 'btns', concretamente HTMLbtns
const btns = document.querySelectorAll('.btn')

btns.forEach(attachClick)

function attachClick(boton) {
  console.log("Vamos asociar evento al boton:", boton)
  boton.addEventListener('click', (event) => {
    // incrementar/decremantar el contador position
    console.log(event.target)
    if (event.target.classList.contains("btn-right")) {
      position++
      if (position == pictures.length) {
        position = 0
      }
    }
    else if (event.target.classList.contains("btn-left")) {
      position--
      if (position == -1) {
        position = pictures.length - 1
      }
    }

    else {
      console.log("Algo ha ido mal")
    }

    console.log(position)
    // Construir la URL de la imagen a mostrar
    let urlImagen = "url('" + img_path + pictures[position] + ".jpeg')";
    // actualizar el elemento del DOM adecuado para mostrar la imagen
    container.style.backgroundImage = urlImagen
  })
}