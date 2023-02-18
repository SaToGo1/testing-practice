const Capitalize = require('../scripts/Capitalize');

it('First Letter Capitalized', () => {
    expect(Capitalize('hello World')).toBe('Hello World');
})