const add = (a, b) => a+b;

const users = [
  'roman', 'fava', 'jozef', 'basia',
]

it('Adds two values', () => {
  expect(users).toContain('roman');
  expect(users).not.toContain('apples');
});
