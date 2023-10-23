const buttons = document.querySelectorAll('.rating__item')
const btnSubmit = document.querySelector('.btn')
const ratingCard = document.querySelector('.rating-card')
const thankYouCard = document.querySelector('.thank-you-card')
const thankYouCardScore = document.querySelector('.thank-you-card__score')
let scoreValue = 0

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('rating__item--selected')
    scoreValue = Number(btn.innerText)
  })
})

btnSubmit.addEventListener('click', () => {
  thankYouCardScore.innerText = scoreValue

  ratingCard.classList.add('rating-card--hide')
  thankYouCard.classList.remove('thank-you-card--hide')
})