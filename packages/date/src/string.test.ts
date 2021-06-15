import { DateTime } from 'luxon'
import './string'

describe('string helpers for date', () => {
  test('toDate should parse with ISO', () => expect('1994-02-11'.toDate()).toEqual(new Date('1994-02-11T00:00:00-06:00')))
  test('toTime should parse with ISO', () => expect('1994-02-11T00:00:00-06:00'.toTime()).toEqual(DateTime.fromISO('1994-02-11T00:00:00-06:00')))
  test('toDateTime should parse with ISO', () => expect('1994-02-11T00:00:00-06:00'.toDateTime()).toEqual(DateTime.fromISO('1994-02-11T00:00:00-06:00')))
})
