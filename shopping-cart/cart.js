
myCart = [];

//addItem(cart, item, quantity): Adds an item to the cart.
function addItem(cart, item, quantity) {
    if (typeof item !== 'string' || item.trim() === '') {
        console.log("The 'item' argument must be a non-empty string.");
    }
    if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity <= 0) {
        console.log("The 'quantity' argument must be a positive integer.");
    } else {
        const newItem = { item: item, quantity: quantity };
        console.log(`Added ${quantity} of ${item} to the cart.`);
        return cart.push(newItem);
    }
}
//addItem(myCart, "tomato", 2);
//console.log(myCart);
//addItem(myCart, "banana", 5);

//removeItem(cart, item): Removes an item from the cart.
function removeItem(cart, item) {
    if (typeof item !== 'string' || item.trim() === '') {
        console.log("Please enter a word or words in item.\n")
    } else {
        console.log(`${item}(s) have been removed from the cart.\n`);
        return cart.filter(cartItem => cartItem.item !== item);
    }
}
//updatedCart = removeItem(myCart, "tomato");

//getTotalItems(cart): Returns the total number of items in the cart.
function getTotalItems(cart) {
    let totalItems = 0;
    for (const item of cart) {
        totalItems += item.quantity;
    }
    console.log(`${totalItems} items in cart.\n`);
}

//getTotalItems(myCart);

//console.log(updatedCart);

module.exports = { addItem, removeItem, getTotalItems };