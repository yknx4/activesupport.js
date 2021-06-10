import { detectIndentation } from './string.util'

describe('detectIndentation', () => {
  it('should detect space indentation', () => expect(detectIndentation('  \t\tfoo')).toEqual(' '))
  it('should detect tab indentation', () => expect(detectIndentation('\t\t  foo')).toEqual('\t'))
  it('should detect tab indentation #2', () => expect(detectIndentation('foo\n\t\tbar')).toEqual('\t'))
})
