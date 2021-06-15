import './number'
import { Duration } from 'luxon'

describe('Number Helpers', () => {
  test('seconds should return duration of number of seconds', () => expect(Number(2).seconds()).toEqual(Duration.fromObject({ seconds: 2 })))
  test('minutes should return duration of number of minutes', () => expect(Number(2).minutes()).toEqual(Duration.fromObject({ minutes: 2 })))
  test('hours should return duration of number of hours', () => expect(Number(2).hours()).toEqual(Duration.fromObject({ hours: 2 })))
  test('days should return duration of number of days', () => expect(Number(2).days()).toEqual(Duration.fromObject({ days: 2 })))
  test('weeks should return duration of number of weeks', () => expect(Number(2).weeks()).toEqual(Duration.fromObject({ weeks: 2 })))
  test('fortnights should return duration of number of fortnights', () => expect(Number(2).fortnights()).toEqual(Duration.fromObject({ weeks: 4 })))
})
