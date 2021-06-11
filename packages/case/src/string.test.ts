import './string'

describe('String Helpers', () => {
  describe('pluralize', () => {
    const testPlural = (input: string, count: number, expectation: string): void => it(`outputs ${expectation} for ${count} ${input}`, () => expect(input.pluralize(count)).toEqual(expectation))
    testPlural("table", 2, "tables")
    testPlural("dude", 0, "dudes")
  });

  describe('singularize', () => {
    it('singularizes tables', () => expect("tables".singularize()).toEqual("table"));
  })

  describe('camelize', () => {
    const testCamelize = (input: string, expectation: string, type?: "upper" | "lower"): void => it(`camelizes ${input} to ${expectation}`, () => expect(input.camelize(type)).toEqual(expectation))
    testCamelize("product", "Product")
    testCamelize("admin_user", "AdminUser")
    testCamelize("visual_effect", "visualEffect", "lower")
  })

  describe('underscore', () => {
    it('underscore product', () => expect("Product".underscore()).toEqual("product"));
    it('underscore AdminUser', () => expect("AdminUser".underscore()).toEqual("admin_user"));
  })

  describe('titleize ', () => {
    it('titleize alice in wonderland', () => expect("alice in wonderland".titleize()).toEqual("Alice in Wonderland"));
    it('titleize fermat\'s enigma', () => expect("fermat's enigma".titleize()).toEqual("Fermat's Enigma"));
  })

  describe('dasherize ', () => {
    it('dasherize name', () => expect("name".dasherize()).toEqual("name"));
    it('dasherize contact_data', () => expect("contact_data".dasherize()).toEqual("contact-data"));
  })
})
