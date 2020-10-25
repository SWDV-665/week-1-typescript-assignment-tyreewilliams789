var grocery = /** @class */ (function () {
    function grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return grocery;
}());
var groceries = [
    new grocery("bacon", 5, 6),
    new grocery("eggs", 2, 3),
    new grocery("coffee", 2, 3),
    new grocery("cheese", 4, 6),
    new grocery("ham", 3, 4),
    new grocery("milk", 2, 4)
];
var list = document.getElementById("list");
groceries.forEach(function (e) {
    var create = document.createElement("p");
    create.textContent = "name: " + e.name + " Quantity: " + e.quantity + " Price: " + e.price;
    list.appendChild(create);
});
