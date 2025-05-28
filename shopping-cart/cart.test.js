
const { addItem, removeItem, getTotalItems } = require('./cart');

const myCart = [];

describe("addItem", () => {
    test("should add an object to an array of objects", () => {
            expect(addItem(myCart, "watermelon", 2)).toEqual([ { item: 'watermelon', quantity: 2 } ]);
        });

    test("should return message when negative number entered for quantity", () => {
            expect(addItem(myCart, "watermelon", -3)).toEqual("The 'item' argument must be a non-empty string.");
        });

    test("should return message when 0 entered", () => {
            expect(addItem(myCart, "watermelon", 0)).toEqual("watermelon", undefined);
        });
});