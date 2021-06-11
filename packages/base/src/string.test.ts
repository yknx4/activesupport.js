import './string'
describe('String Helpers', () => {
  describe('remove', () => {
    it('should remove pattern', () => expect('Hello World'.remove(/Hello /)).toEqual('World'))
  })
  describe('squish', () => {
    it('should remove spaces and trails', () => expect(' \n  foo\n\r \t bar \n'.squish()).toEqual('foo bar'))
  })

  describe('truncate', () => {
    it('should return string if lenght is greater', () => expect('foo'.truncate(4)).toEqual('foo'))
    it('should truncate with only lenght', () => expect('Oh dear! Oh dear! I shall be late!'.truncate(20)).toEqual('Oh dear! Oh dear!...'))
    it('should truncate with ommision', () => expect('Oh dear! Oh dear! I shall be late!'.truncate(20, { omission: '&hellip;' })).toEqual('Oh dear! Oh &hellip;'))
    it('should truncate with string separator', () => expect('Oh dear! Oh dear! I shall be late!'.truncate(18, { separator: ' ' })).toEqual('Oh dear! Oh...'))
    it('should truncate with regex separator', () => expect('Oh dear! Oh dear! I shall be late!'.truncate(18, { separator: /\s/ })).toEqual('Oh dear! Oh...'))
  })

  describe('truncateWords', () => {
    it('should return string if word count is greater', () => expect('foo'.truncateWords(2)).toEqual('foo'))
    it('should truncate words with only lenght', () => expect('Oh dear! Oh dear! I shall be late!'.truncateWords(4)).toEqual('Oh dear! Oh dear!...'))
    it('should truncate words with ommision', () => expect('Oh dear! Oh dear! I shall be late!'.truncateWords(4, { omission: '&hellip;' })).toEqual('Oh dear! Oh dear!&hellip;'))
    it('should truncate words with string separator', () => expect('Oh dear! Oh dear! I shall be late!'.truncateWords(3, { separator: '!' })).toEqual('Oh dear! Oh dear! I shall be late...'))
    it('should truncate words with regex separator', () => expect('Oh dear! Oh dear! I shall be late!'.truncateWords(4, { separator: /\s/ })).toEqual('Oh dear! Oh dear!...'))
  })

  describe('indent', () => {
    it('should indent', () => expect('  foo'.indent(2)).toEqual('    foo'))
    it('should indent with detected indent string', () => expect('foo\n\t\tbar'.indent(2)).toEqual('\t\tfoo\n\t\t\t\tbar'))
    it('should indent with given indent string', () => expect('foo'.indent(2, '\t')).toEqual('\t\tfoo'))
    it('should not indent empty lines', () => expect('foo\n\nbar'.indent(2)).toEqual('  foo\n\n  bar'))
    it('should indent empty lines if specified', () => expect('foo\n\nbar'.indent(2, undefined, true)).toEqual('  foo\n  \n  bar'))
  })

  describe('at', () => {
    const expectFrom = (input: string, position: number, expectation: string | undefined): void => it(`Should get ${expectation ?? '<undefined>'} at position ${position} from <${input}>`, () => expect(input.at(position)).toEqual(expectation))

    expectFrom('hello', 0, 'h')
    expectFrom('hello', 4, 'o')
    expectFrom('hello', -1, 'o')
    expectFrom('hello', 10, undefined)
  })

  describe('from', () => {
    const expectFrom = (input: string, position: number, expectation: string | undefined): void => it(`Should get ${expectation ?? '<undefined>'} from position ${position} from <${input}>`, () => expect(input.from(position)).toEqual(expectation))

    expectFrom('hello', 0, 'hello')
    expectFrom('hello', 2, 'llo')
    expectFrom('hello', -2, 'lo')
    expectFrom('hello', 10, undefined)
  })

  describe('to', () => {
    const expectFrom = (input: string, position: number, expectation: string | undefined): void => it(`Should get ${expectation ?? '<undefined>'} from position ${position} from <${input}>`, () => expect(input.to(position)).toEqual(expectation))

    expectFrom('hello', 0, 'h')
    expectFrom('hello', 2, 'hel')
    expectFrom('hello', -2, 'hell')
    expectFrom('hello', 10, 'hello')
  })

  describe('first', () => {
    const expectFrom = (input: string, limit: number | undefined, expectation: string | undefined): void => it(`Should get ${expectation ?? '<undefined>'} from limit ${limit ?? 1} from <${input}>`, () => expect(input.first(limit)).toEqual(expectation))

    expectFrom('hello', undefined, 'h')
    expectFrom('hello', 1, 'h')
    expectFrom('hello', 2, 'he')
    expectFrom('hello', 0, '')
    expectFrom('hello', 6, 'hello')
  })

  describe('last', () => {
    const expectFrom = (input: string, limit: number | undefined, expectation: string | undefined): void => it(`Should get ${expectation ?? '<undefined>'} from limit ${limit ?? 1} from <${input}>`, () => expect(input.last(limit)).toEqual(expectation))

    expectFrom('hello', undefined, 'o')
    expectFrom('hello', 1, 'o')
    expectFrom('hello', 2, 'lo')
    expectFrom('hello', 0, '')
    expectFrom('hello', 6, 'hello')
  })

  describe('chomp', () => {
    const testChomp = (input: string, expectation: string, separator?: string): void => it(`chomps ${input} to ${expectation}`, () => expect(input.chomp(separator)).toEqual(expectation))
    testChomp('hello', 'hello')
    testChomp('hello\n', 'hello')
    testChomp('hello\r\n', 'hello')
    testChomp('hello\n\r', 'hello\n')
    testChomp('hello\r', 'hello')
    testChomp('hello \n there', 'hello \n there')
    testChomp('hello', 'he', 'llo')
    testChomp('hello\r\n\r\n', 'hello', '')
    testChomp('hello\r\n\r\r\n', 'hello\r\n\r', '')
  })

  describe('center', () => {
    it('does nothing when width is shorter than input', () => expect('hello'.center(4)).toEqual('hello'))
    it('does center', () => expect('hello'.center(20)).toEqual('       hello        '))
    it('does center with padstr', () => expect('hello'.center(20, '123')).toEqual('1231231hello12312312'))
  })

  describe('hex', () => {
    const testHex = (input: string, expectation: number): void => it(`gets hext from ${input} to ${expectation}`, () => expect(input.hex()).toEqual(expectation))
    testHex('0x0a', 10)
    testHex('-1234', -4660)
    testHex('0', 0)
    testHex('wombat', 0)
  })
})
