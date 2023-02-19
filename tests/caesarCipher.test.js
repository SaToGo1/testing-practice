const CaesarCipher = require('../scripts/caesarCipher')

it('Caesar Cipher: every letter', () => {
    expect(CaesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza')
})

it('Caesar Cipher: Sentence', () => {
    expect(CaesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza')
})

it('Punctuation', () => {
    expect(CaesarCipher('Hello, World!')).toBe('Ifmmp, Xpsme!')
})