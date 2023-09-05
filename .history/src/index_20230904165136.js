import './less/index.less'

// Your code goes here!

// 1- Load
window.onload = function (evt) {
  console.log(`event ${evt.type} Launched! Time to go`)
  const heading = document.querySelector('h1')
  heading.textContent = 'Here we are NOW!!!'

  // 2- Copy
  window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
      heading.textContent += text
    })
  })

  // 3-Click
  document.body.addEventListener('click', evt => {
  evt.target
  })
}