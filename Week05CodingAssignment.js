class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  describe() {
    console.log(`${this.name}, ${this.price}`);
  }
}

class Menu {
  constructor() {
    this.items = [];
  }

  createItem(item) {
    this.items.push(item);
  }

  viewMenu() {
    let menuInfo = "";

    for (let i = 0; i < this.items.length; i++) {
      menuInfo += `
            ${this.items[i].name}, ${this.items[i].price}}`;
    }
    return menuInfo;
  }

  deleteItem(_item) {
    this.items = this.items.filter((item) => item.name !== itemName);
  }
}

console.log("Appetizers:");
class Appetizers extends MenuItem {
  constructor(name, price) {
    super(name, price);
  }
}
let appetizer1 = new Appetizers("Crab Rangoons", 8.99);
let appetizer2 = new Appetizers("Pot Stickers", 7.5);
let appetizer3 = new Appetizers("Shrimp Skewers", 9.99);
let appetizer4 = new Appetizers("Crab Legs", 15.99);
let appetizer5 = new Appetizers("Bang Bang Chicken", 8.99);
let appetizer6 = new Appetizers("Lobster Tail", 20.0);
appetizer1.describe();
appetizer2.describe();
appetizer3.describe();
appetizer4.describe();
appetizer5.describe();
appetizer6.describe();

console.log("Entrees:");
console.log(
  "All Entrees are Served with Fried Rice, Fresh Vegetables, and Noodles"
);
class Entrees extends MenuItem {
  constructor(name, price) {
    super(name, price);
  }
}
let entree1 = new Entrees("Teryaki Chicken", 17.99);
let entree2 = new Entrees("Teryaki Steak", 19.99);
let entree3 = new Entrees("Hibachi Shrimp", 19.99);
let entree4 = new Entrees("Steak & Chicken", 24.99);
let entree5 = new Entrees("Steak & Shrimp", 27.99);
let entree6 = new Entrees("Chicken & Shrimp", 26.99);
let entree7 = new Entrees("Mahi Mahi", 26.5);
let entree8 = new Entrees("Ahi Tuna", 28.5);
let entree9 = new Entrees("Lobster", 36.99);
let entree10 = new Entrees("Steak Kabobs", 21.99);
let entree11 = new Entrees("Vegetable Plate", 16.99);
entree1.describe();
entree2.describe();
entree3.describe();
entree4.describe();
entree5.describe();
entree6.describe();
entree7.describe();
entree8.describe();
entree9.describe();
entree10.describe();
entree11.describe();

console.log("Desserts:");
class Desserts extends MenuItem {
  constructor(name, price) {
    super(name, price);
  }
}
let dessert1 = new Desserts("Grilled Pineapple Sundae", 6.79);
let dessert2 = new Desserts(
  "Grilled Apricots with Brioche and Vanilla Ice Cream",
  8.95
);
let dessert3 = new Desserts("Strawberry Cheesecake", 5.99);
let dessert4 = new Desserts("Hot Fudge Cake", 6.79);
dessert1.describe();
dessert2.describe();
dessert3.describe();
dessert4.describe();

console.log("Drinks:");
class Drinks extends MenuItem {
  constructor(name, price) {
    super(name, price);
  }
}
let drink1 = new Drinks("Sweet Tea/ Unsweet Tea/ Arnold Palmer", 1.99);
let drink2 = new Drinks("Coke", 1.99);
let drink3 = new Drinks("Dr. Pepper", 1.99);
let drink4 = new Drinks("Sprite", 1.99);
let drink5 = new Drinks("Diet Coke", 1.99);
let drink6 = new Drinks("Fanta", 1.99);
drink1.describe();
drink2.describe();
drink3.describe();
drink4.describe();
drink5.describe();
drink6.describe();

console.log("Cocktails:");
class Cocktails extends MenuItem {
  constructor(name, price) {
    super(name, price);
  }
}
let cocktail1 = new Cocktails("Pina Colada", 5.99);
let cocktail2 = new Cocktails("Strawberry Daquari", 5.99);
let cocktail3 = new Cocktails("Bushwacker", 6.99);
let cocktail4 = new Cocktails("Hurricane", 7.69);
let cocktail5 = new Cocktails("Chocolate Martini", 6.99);
let cocktail6 = new Cocktails("Tom Collins", 7.99);
let cocktail7 = new Cocktails("White Wine", 4.99);
let cocktail8 = new Cocktails("Flavored Sake", 4.99);
cocktail1.describe();
cocktail2.describe();
cocktail3.describe();
cocktail4.describe();
cocktail5.describe();
cocktail6.describe();
cocktail7.describe();
cocktail8.describe();

let menu = new Menu();

menu.deleteItem(cocktail4);
console.log(menu.viewMenu());
