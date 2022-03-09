// immediate invoked function expression

(function () {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  //select both left and right button. Add event listeners
  const btns = document.querySelectorAll('.btn')
  const imageDIV = document.querySelector('.img-container')
  let i = 0

  btns.forEach(function (button) {
    button.addEventListener('click', function (e) {
      if (button.classList.contains('btn-left')) {
        i--
        if (i < 0) {
          i = pictures.length - 1
        }
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
