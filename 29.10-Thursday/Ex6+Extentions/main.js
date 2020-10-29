const coffeeShop = {
  beans: 40,

  money: 3000,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 10},
    americano: {beanRequirement: 5, price: 7},
    doubleShot: {beanRequirement: 15, price: 12},
    frenchPress: {beanRequirement: 12, price: 10}
  },

  makeDrink: function (drinkType) {
    this.beans -= this.drinkRequirements[drinkType].beanRequirement
  },

  buyBeans: function (numBeans){
    if ((numBeans * 3) <= this.money){
      this.money -= (numBeans * 0.5)
      this.beans += numBeans
    } else {
      alert("You don't have enough money for beans... maybe this business isn't for you mate")
    }
  },

  buyDrink: function (drinkType){ //I have transfered most of the makeDrink function here (the if statements) for the last extention
    if (this.drinkRequirements[drinkType] == undefined){
      alert(`Sorry, we don't make ${drinkType}`)
    }else if (this.beans < this.drinkRequirements[drinkType].beanRequirement) {
      alert("Sorry, we're all out of beans!")
    } else {
      this.money += this.drinkRequirements[drinkType].price
      this.makeDrink(drinkType)
    } 
  }
}

coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(50)