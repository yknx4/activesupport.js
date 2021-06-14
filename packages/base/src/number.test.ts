import './number'
describe('bytes', () => {
  it('gets bytes', () => expect(Number(2).kilobytes()).toEqual(2048))
  it('gets bytes', () => expect(Number(3).megabytes()).toEqual(3145728))
  it('gets bytes', () => expect(Number(3.5).gigabytes()).toEqual(3758096384))
  it('gets bytes', () => expect(Number(-4).exabytes()).toEqual(-4611686018427387904))
})
