const CaesarCipher = require('../scripts/caesarCipher')

it('Caesar Cipher: every letter', () => {
    expect(CaesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza')
})

it('Caesar Cipher: Sentence', () => {
    expect(CaesarCipher('defend the east wall of the castle')).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

it('Punctuation', () => {
    expect(CaesarCipher('Hello, World!')).toBe('Ifmmp, Xpsme!')
})