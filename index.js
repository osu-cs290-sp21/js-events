window.addEventListener('click', function (event) {
  console.log("== The window was clicked")
  console.log("  -- event.target:", event.target)
})

var firstBox = document.querySelector('.box');
firstBox.addEventListener('click', function (event) {
  console.log("== The first box was clicked")
  console.log("  -- event.target:", event.target)
  console.log("  -- event.currentTarget:", event.currentTarget)
  // event.stopPropagation()
})

function buttonClickListener(event) {
  console.log("== A button was clicked, event:", event)
  console.log("  -- event.currentTarget:", event.currentTarget)
  var box = event.currentTarget.parentNode
  box.classList.toggle('highlighted')
  // return function () {
  //   console.log("== The function returned by buttonClickListener()!!")
  // }
}

var buttons = document.getElementsByClassName('in-box-button')
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClickListener)
}

function foo() {
  console.log("== inside foo")
  return "foo's return value"
}

console.log("== foo():", foo())
console.log("== foo:", foo)

document.getElementById('website-link').addEventListener('click', function (event) {
  console.log("== The link was clicked")
  event.preventDefault()
})
