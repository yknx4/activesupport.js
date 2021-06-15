import './string'

describe('String Helpers', () => {
  describe('pluralize', () => {
    const testPlural = (input: string, count: number, expectation: string): void => it(`outputs ${expectation} for ${count} ${input}`, () => expect(input.pluralize(count)).toEqual(expectation))
    testPlural('table', 2, 'tables')
    testPlural('dude', 0, 'dudes')
  })

  describe('singularize', () => {
    it('singularizes tables', () => expect('tables'.singularize()).toEqual('table'))
  })

  describe('camelize', () => {
    const testCamelize = (input: string, expectation: string, type?: 'upper' | 'lower'): void => it(`camelizes ${input} to ${expectation}`, () => expect(input.camelize(type)).toEqual(expectation))
    testCamelize('product', 'Product')
    testCamelize('admin_user', 'AdminUser')
    testCamelize('visual_effect', 'visualEffect', 'lower')
  })

  describe('underscore', () => {
    it('underscore product', () => expect('Product'.underscore()).toEqual('product'))
    it('underscore AdminUser', () => expect('AdminUser'.underscore()).toEqual('admin_user'))
  })

  describe('titleize ', () => {
    it('titleize alice in wonderland', () => expect('alice in wonderland'.titleize()).toEqual('Alice in Wonderland'))
    it('titleize fermat\'s enigma', () => expect("fermat's enigma".titleize()).toEqual("Fermat's Enigma"))
  })

  describe('dasherize ', () => {
    it('dasherize name', () => expect('name'.dasherize()).toEqual('name'))
    it('dasherize contact_data', () => expect('contact_data'.dasherize()).toEqual('contact-data'))
  })

  describe('parameterize', () => {
    const testParameterize = (input: string, expectation: string): void => test(`it parameterizes "${input}" into "${expectation}"`, () => expect(input.parameterize()).toEqual(expectation))
    testParameterize('John Smith', 'john-smith')
    testParameterize('Kurt Gödel', 'kurt-godel')
    it('parameterize with preserved case', () => expect('Kurt Gödel'.parameterize({ preserveCase: true })).toEqual('Kurt-Godel'))
    it('parameterize with separator', () => expect('Kurt Gödel'.parameterize({ separator: '_' })).toEqual('kurt_godel'))
  })

  describe('humanize', () => {
    const testHumanize = (input: string, expectation: string, type?: boolean): void => it(`foreign_keys ${input} to ${expectation}`, () => expect(input.humanize(type)).toEqual(expectation))
    testHumanize('name', 'Name')
    testHumanize('author_id', 'Author')
    testHumanize('author_id', 'author', false)
    testHumanize('comments_count', 'Comments count')
    testHumanize('_id', 'Id')
  })

  describe('tableize', () => {
    const testTableize = (input: string, expectation: string): void => it(`tableizes ${input} to ${expectation}`, () => expect(input.tableize()).toEqual(expectation))
    testTableize('Person', 'people')
    testTableize('Invoice', 'invoices')
    testTableize('InvoiceLine', 'invoice_lines')
  })

  describe('foreignKey', () => {
    const testCamelize = (input: string, expectation: string, type?: boolean): void => it(`foreign_keys ${input} to ${expectation}`, () => expect(input.foreignKey(type)).toEqual(expectation))
    testCamelize('User', 'user_id')
    testCamelize('InvoiceLine', 'invoice_line_id')
    testCamelize('Session', 'sessionid', false)
  })

  describe('capitalize', () => {
    const testCapitalize = (input: string, expectation: string): void => it(`capitalizes ${input} to ${expectation}`, () => expect(input.capitalize()).toEqual(expectation))
    testCapitalize('person', 'Person')
    testCapitalize('invoice', 'Invoice')
    testCapitalize('a sentence', 'A Sentence')
  })

  describe('headerize', () => {
    const testHeaderize = (input: string, expectation: string): void => it(`headerizes ${input} to ${expectation}`, () => expect(input.headerize()).toEqual(expectation))
    testHeaderize('person', 'Person')
    testHeaderize('ApiToken', 'Api-Token')
    testHeaderize('UserAgent', 'User-Agent')
  })

  describe('transliterates', () => {
    it('transliterates 你好, world!', () => expect('你好, world!'.transliterate()).toEqual('Ni Hao, world!'))
  })
  describe('slugify', () => {
    it('slugify 你好, world!', () => expect('你好, world!'.slugify()).toEqual('ni-hao-world'))
  })
})
