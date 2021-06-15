import { DateTime, Duration } from 'luxon'
import './date'

describe('Date Helpers', () => {
  describe('beginningOfDay', () => {
    it('should get beginning of day', () =>  {
      const date = new Date().beginningOfDay()
      expect(date.getSeconds()).toEqual(0)
      expect(date.getHours()).toEqual(0)
      expect(date.getMinutes()).toEqual(0)
      expect(date.getMilliseconds()).toEqual(0)
    });
  })

  describe('beginningOfHour', () => {
    it('should get beginning of hour', () =>  {
      const date = new Date().beginningOfHour()
      expect(date.getHours()).not.toEqual(0)
      expect(date.getSeconds()).toEqual(0)
      expect(date.getMinutes()).toEqual(0)
      expect(date.getMilliseconds()).toEqual(0)
    });
  })

  describe('midnight', () => {
    it('should get midnight', () =>  {
      const tomorrow = DateTime.now().plus({day: 1})
      const date = new Date().midnight()
      expect(date.getSeconds()).toEqual(0)
      expect(date.getHours()).toEqual(0)
      expect(date.getMinutes()).toEqual(0)
      expect(date.getMilliseconds()).toEqual(0)
      expect(date.getDate()).toEqual(tomorrow.day)
    });
  })

  describe('endOfDay', () => {
    it('should get end of day', () =>  {
      const date = new Date().endOfDay()
      expect(date.getSeconds()).toEqual(59)
      expect(date.getHours()).toEqual(23)
      expect(date.getMinutes()).toEqual(59)
      expect(date.getMilliseconds()).toEqual(999)
    });
  })

  describe('endOfHour', () => {
    it('should get end of hour', () =>  {
      const date = new Date().endOfHour()
      expect(date.getHours()).not.toEqual(0)
      expect(date.getSeconds()).toEqual(59)
      expect(date.getMinutes()).toEqual(59)
      expect(date.getMilliseconds()).toEqual(999)
    });
  })

  describe('fromNow', () => {
    it('should get 5 hours from beginning of day', () =>  {
      const date = new Date().beginningOfDay()
      const newDate = date.fromNow(Duration.fromObject({hours: 5}))
      expect(newDate.getHours()).toEqual(5)
    });
  })

  describe('ago', () => {
    it('should get 5 hours before midnight', () =>  {
      const date = new Date().midnight()
      const newDate = date.ago(Duration.fromObject({hours: 5}))
      expect(newDate.getHours()).toEqual(19)
    });
  })
  
})