function getDomNodesBySelector(selector) {
    let priceValue = document.querySelectorAll('.price-value')
    let mass = []
    priceValue.forEach(element => {
      mass.push(element)
      console.log(mass);
    });
    return mass
  }
  
console.log(getDomNodesBySelector('.price-value'));