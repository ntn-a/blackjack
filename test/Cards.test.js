import Card from "../src/services/Cards";

test("Get a valid value", () => {
  expect(Card().getCard()).toBeValid();
})