import { DateTime, Duration } from 'luxon'
import './date'

describe('Date Helpers', () => {
  describe('beginningOfDay', () => {
    it('should get beginning of day', () => {
      const date = new Date().beginningOfDay()
      expect(date.getSeconds()).toEqual(0)
      expect(date.getHours()).toEqual(0)
      expect(date.getMinutes()).toEqual(0)
      expect(date.getMilliseconds()).toEqual(0)
    });
  })

  describe('beginningOfHour', () => {
    it('should get beginning of hour', () => {
      const date = new Date().beginningOfHour()
      expect(date.getHours()).not.toEqual(0)
      expect(date.getSeconds()).toEqual(0)
      expect(date.getMinutes()).toEqual(0)
      expect(date.getMilliseconds()).toEqual(0)
    });
  })

  describe('midnight', () => {
    it('should get midnight', () => {
      const date = new Date().midnight()
      expect(date.getSeconds()).toEqual(0)
      expect(date.getHours()).toEqual(0)
      expect(date.getMinutes()).toEqual(0)
      expect(date.getMilliseconds()).toEqual(0)
    });
  })

  describe('endOfDay', () => {
    it('should get end of day', () => {
      const date = new Date().endOfDay()
      expect(date.getSeconds()).toEqual(59)
      expect(date.getHours()).toEqual(23)
      expect(date.getMinutes()).toEqual(59)
      expect(date.getMilliseconds()).toEqual(999)
    });
  })

  describe('endOfHour', () => {
    it('should get end of hour', () => {
      const date = new Date().endOfHour()
      expect(date.getHours()).not.toEqual(0)
      expect(date.getSeconds()).toEqual(59)
      expect(date.getMinutes()).toEqual(59)
      expect(date.getMilliseconds()).toEqual(999)
    });
  })

  describe('fromNow', () => {
    it('should get 5 hours from beginning of day', () => {
      const date = new Date().beginningOfDay()
      const newDate = date.advance(Duration.fromObject({ hours: 5 }))
      expect(newDate.getHours()).toEqual(5)
    });
  })

  describe('ago', () => {
    it('should get 5 hours before midnight', () => {
      const date = new Date().midnight()
      const newDate = date.ago(Duration.fromObject({ hours: 5 }))
      expect(newDate.getHours()).toEqual(19)
    });
  })

  describe('since', () => {
    it('should get 5 seconds since beginning of day', () => {
      const date = new Date().beginningOfDay()
      const newDate = date.advance(Duration.fromObject({ hours: 5 }))
      expect(newDate.getHours()).toEqual(5)
    });
  })

  test('is future', () => expect(Date.tomorrow().isFuture()).toBeTruthy());
  test('is tomorrow', () => expect(Date.tomorrow().isTomorrow()).toBeTruthy());
  test('is past', () => expect(Date.yesterday().isPast()).toBeTruthy());
  test('is yesterday', () => expect(Date.yesterday().isYesterday()).toBeTruthy());
  test('is today', () => expect(new Date().isToday()).toBeTruthy());

  test('seconds since midnigth', () => expect(DateTime.fromObject({ year: new Date().getFullYear(), month: 8, day: 29, hour: 12, minute: 34, second: 56 }).toJSDate().secondsSinceMidnight()).toEqual(45296));
  test('seconds until endofday', () => expect(DateTime.fromObject({ year: new Date().getFullYear(), month: 8, day: 29, hour: 12, minute: 34, second: 56 }).toJSDate().secondsUntilEndOfDay()).toEqual(41103.999));

  test('11/12/94 is on weekday', () => expect(DateTime.fromObject({ year: 1994, month: 12, day: 11 }).toJSDate().isOnWeekday()).toBeFalsy())
  test('11/12/94 is on weekend', () => expect(DateTime.fromObject({ year: 1994, month: 12, day: 11 }).toJSDate().isOnWeekend()).toBeTruthy())

  test('prevWeek is proper week', () => expect(new Date().prevWeek().toDateTime().hasSame(DateTime.now().minus({ week: 1 }), 'week')).toBeTruthy())
  test('nextWeek is proper week', () => expect(new Date().nextWeek().toDateTime().hasSame(DateTime.now().plus({ week: 1 }), 'week')).toBeTruthy())
  test('change changes year', () => expect(new Date().change({year: 1994}).getFullYear()).toEqual(1994));
})