const shoppingList = require('./file').default
class shoppin{
  constructor(){
    this.calc()
  }

  calc() {
    shoppingList
    let calcProducts = v => v.Quantidade * v.valorUnico
    let somaArray = (acc, item) => acc += item
    console.log(`R$ ${ parseFloat(
      (shoppingList.map(calcProducts).reduce(somaArray, 0).toFixed(2))
    )}`)
  }
}

new shoppin()
  


