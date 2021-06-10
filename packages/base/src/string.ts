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
}

String.prototype.remove = function (pattern: RegExp) {
  return this.replace(pattern, '')
}

String.prototype.squish = function () {
  return this.replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/, ' ')
}

String.prototype.truncate = function (length: number, options?: OmissionOptions) {
  const { omission = '...', separator } = options ?? {}
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
