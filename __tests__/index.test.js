describe('Index', () => {
  test('should be able to resolve the same dependencies', () => {
    expect(require('../')).toMatchSnapshot();
  });
  test('it should fail', () => {
    expect(false).toBe(true);
  });
});
