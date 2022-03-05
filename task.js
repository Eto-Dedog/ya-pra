function getDomNodesBySelector(selector) {
  let priceValue = document.querySelectorAll('.price-value')
  let mass = []
  priceValue.forEach(element => {
    mass.push(element)
  });
  return mass
}
  
// console.log(getDomNodesBySelector('.price-value'));

function applyDiscount() {
  let discountBtn = document.querySelector('.total__button')
  let totalSum = document.querySelector('.total-price-value')
  let gg = getDomNodesBySelector('.price-value')
  let totalPrice = document.querySelector('.total__prices')

  function endSum () {
    sum = totalSum.textContent * 0.15
    endSum = totalSum.textContent - sum
    totalSum.textContent = endSum.toFixed(0)
    gg.forEach(element => {
      sumProc = element.textContent * 0.15
      endSum = element.textContent - sumProc
      element.textContent = endSum.toFixed(0)
    });
    discountBtn.style.display = 'none'
    totalPrice.style.display = 'flex'
  }
  discountBtn.addEventListener('click', endSum)
}
applyDiscount()