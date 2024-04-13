const { sayHello } = require('../script');

test('says hello world', () => {
    expect(sayHello()).toBe('Hello World');
});