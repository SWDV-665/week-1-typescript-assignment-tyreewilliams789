interface grocerylist {
    name: string;
    quantity: number;
    price: number;
  }
  
  class grocery {
    name: string;
    quantity: number;
    price: number;
  
    constructor(name: string, quantity: number, price: number) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  }

  let groceries = [
    new grocery("bacon", 5, 6),
    new grocery("eggs", 2, 3),
    new grocery("coffee", 2, 3),
    new grocery("cheese", 4, 6),
    new grocery("ham", 3, 4),
    new grocery("milk", 2, 4)
  ]

const list = document.getElementById("list");

groceries.forEach(e => {
    const create = document.createElement("p");
    create.textContent = `name: ${e.name} Quantity: ${e.quantity} Price: ${e.price}`;
    list.appendChild(create);
});