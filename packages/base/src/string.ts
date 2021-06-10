import { detectIndentation } from './string.util'

declare global {
  interface OmissionOptions {
  /**
   * Ellipsis can be customized with the :omission option
   */
    omission?: string
    /**
   * Pass a :separator to truncate the string at a natural break
   * The option :separator can be a regexp
   */
    separator?: string | RegExp
  }

  interface String {
  /**
   * The method remove will remove all occurrences of the pattern
   * @param pattern
   */
    remove: (pattern: RegExp) => string
    /**
   * The method squish strips leading and trailing whitespace, and substitutes runs of whitespace with a single space each
   */
    squish: () => string
    /**
   * The method truncate returns a copy of its receiver truncated after a given length
   * @param length
   * @param options
   */
    truncate: (length: number, options?: OmissionOptions) => string
    /**
   * The method truncate_words returns a copy of its receiver truncated after a given number of words
   * @param words
   * @param options
   */
    truncateWords: (words: number, options?: OmissionOptions) => string
    /**
   * The indent method indents the lines in the receiver
   * @param length
   * @param indentString The second argument, indent_string, specifies which indent string to use. The default is nil, which tells the method to make an educated guess peeking at the first indented line, and fallback to a space if there is none
   * @param indentEmptyLines The third argument, indent_empty_lines, is a flag that says whether empty lines should be indented. Default is false.
   */
    indent(length: number, indentString?: string, indentEmptyLines?: boolean): string
    /**
   * The at method returns the character of the string at position position
   * @param position
   */
    at(position: number): string | undefined
    /**
   * The from method returns the substring of the string starting at position position
   * @param position
   */
    from(position: number): string
    /**
   * The to method returns the substring of the string up to position position
   * @param position
   */
    to(position: number): string
    /**
   * The first method returns a substring containing the first limit characters of the string.
   * @param position
   */
    first(limit?: number): string
  }
}

String.prototype.remove = function (pattern: RegExp) {
  return this.replace(pattern, '')
}

String.prototype.squish = function () {
  return this.replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/, ' ')
}

String.prototype.truncate = function (length: number, options?: OmissionOptions) {
  const { omission = '...', separator } = options ?? {}
  if (length > this.length) {
    return this.toString()
  }
  if (separator === undefined) {
    return this.slice(0, length - omission.length) + omission
  }
  const maxString = this.slice(0, length - omission.length)
  if (typeof separator === 'string') {
    const lastPosition = maxString.lastIndexOf(separator)
    return maxString.slice(0, lastPosition) + omission
  } else {
    const newRegex = new RegExp(`${separator.source}[^${separator.source}]*?$`, separator.flags)
    return maxString.replace(newRegex, omission)
  }
}

String.prototype.truncateWords = function (words: number, options?: OmissionOptions) {
  const { omission = '...', separator = ' ' } = options ?? {}
  const wordsList = this.split(separator)
  if (words > wordsList.length) {
    return this.toString()
  }
  if (typeof separator === 'string') {
    return wordsList.slice(0, words).join(separator) + omission
  } else {
    return wordsList.slice(0, words).join(' ') + omission
  }
}

String.prototype.indent = function (length: number, indentString?: string, indentEmptyLines: boolean = false) {
  const finalIndentString = indentString ?? detectIndentation(this.toString())
  const lines = this.split('\n')
  return lines.map(l => l === '' && !indentEmptyLines ? '' : l.padStart(l.length + length, finalIndentString)).join('\n')
}

String.prototype.at = function (position: number) {
  if (position > this.length) {
    return undefined
  }
  if (position < 0) {
    return this[this.length + position]
  }
  return this[position]
}
String.prototype.from = function (position: number) { return this[position] }
String.prototype.to = function (position: number) { return this[position] }
