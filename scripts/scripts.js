// Add focus state on rating buttons
const btnList = document.querySelectorAll('.circle__focus')

btnList.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.focus').classList.remove('focus')
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

// Add result to 2nd container
const resultText = document.querySelector('.result')

btnSubmit.addEventListener('click', () => {
  const current = document.querySelector('.focus')
  resultText.innerHTML = `You selected ${current.value} out of 5`
})
