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
})
