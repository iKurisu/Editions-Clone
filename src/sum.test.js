const add = (x, y) => x + y;

test('1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})
test('5 + 2 to equal 7', () => {
  expect(add(5, 2)).toBe(7)
})
test("6 + 2 to equal 3", () => {
  expect(add(6, 2)).toBe(8);
});
test('1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})
test('2 + 2 to equal 3', () => {
  expect(add(2, 2)).toBe(4)
})
test('8 + 2 to equal 3', () => {
  expect(add(8, 2)).toBe(10)
})
test('7 + 2 to equal 3', () => {
  expect(add(7, 2)).toBe(9)
})
