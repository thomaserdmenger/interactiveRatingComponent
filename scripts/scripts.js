// Add focus state on rating buttons
const btnList = document.querySelectorAll('.circle__focus')

btnList.forEach(btn => {
  btn.addEventListener('click', () => {
    // ?. Optional chaining:
    // If a reference is nullish (null or undefined), the expression
    // returns value of undefined instead of an error
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    document.querySelector('.focus')?.classList.remove('focus')
    btn.classList.add('focus')
  })
})

// Change container on submit
const btnSubmit = document.querySelector('.submit')
const containerOne = document.querySelector('.container-one')
const containerTwo = document.querySelector('.container-two')

btnSubmit.addEventListener('click', () => {
  containerOne.style.display = 'none'
  containerTwo.style.display = 'flex'
})
