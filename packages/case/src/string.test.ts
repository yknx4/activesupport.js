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
})
