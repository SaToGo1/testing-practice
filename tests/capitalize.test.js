const Capitalize = require('../scripts/capitalize');

it('First Letter Capitalized', () => {
    expect(Capitalize('hello, World!')).toBe('Hello, World!');
})