
const { addItem, removeItem, getTotalItems } = require('./cart');



describe("addItem", () => {
    beforeEach(() => {
        myCart = [];
    });

    test("should add an object to an array of objects", () => {
        addItem(myCart, "watermelon", 2);
        expect(myCart).toEqual([{ item: "watermelon", quantity: 2 }]);
    });

    test("should return message when negative number entered for quantity", () => {
        addItem(myCart, "watermelon", -3);
        expect(addItem(myCart)).toEqual(console.log());
    });

    test("should return message when 0 entered", () => {
        addItem(myCart, "watermelon", 0);
        expect(addItem(myCart)).toEqual(console.log());
    });
});

describe("removeItem", () => {
    beforeEach(() => {
        myCart = [
            { item: "watermelon", quantity: 2 }, 
            { item: "banana", quantity: 4 }
        ];
    });
    test("should remove an object from an array of objects", () => {
        expect(removeItem(myCart, "watermelon")).toEqual([{ item: "banana", quantity: 4 }]);
    });

    test("should return null if something other than a string is entered", () => {
        expect(removeItem(myCart, 34)).toEqual(null);
    });
});

describe("getTotalItems", () => {
    beforeEach(() => {
        myCart = [
            { item: "watermelon", quantity: 2 }, 
            { item: "banana", quantity: 4 }
        ];
        emptyCart = [];
    });
    test("should show to total number of items in the cart", () => {
        expect(getTotalItems(myCart)).toEqual(6);
    });

    test("should show total of 0 items in the cart for an empty cart", () => {
        expect(getTotalItems(emptyCart)).toEqual(0);
    });
});