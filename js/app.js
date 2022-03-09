// immediate invoked function expression

(function () {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  //Hacemos una seleccion de los 2 botones
  //Una del contenedor de la imagen
  //Hacemos una variable para usar como acceso al Array

  let btns = document.querySelectorAll('.btn')
  let imageDIV = document.querySelector('.img-container')
  let i = 0

  //Ejecuta la función en cada elemento (de 1 a 3)
  //Si clicko el boton izquierdo la variable "i" disminuye cambiando a cual variable del array accedemos
  //El i no puede ser mas grande que el valor del Array
  btns.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.classList.contains('btn-left')) {
        i--
        if (i < 0) {
          i = pictures.length - 1
        }
        // !!!!!!!!!!!!!!! PARA ACCEDER A LA IMAGEN TIENES QUE CONCATENAR EL PRIMER ARRAY QUE TIENE TODOS LAS VARIABLES CORRESPONDIENTES A LAS IMAGENES !!!!!!!!!!!!!!!!!!!!!!!!!
        imageDIV.style.backgroundImage = `url('./img/${pictures[i]}.jpeg')`
      }
      if (button.classList.contains('btn-right')) {
        i++
        if (i > pictures.length - 1) {
          i = 0
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[i]}.jpeg')`
      }
    })
  })
})();