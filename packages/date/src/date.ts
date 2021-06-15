import {DateTime, Duration} from 'luxon'

declare global {
 
  interface Date {
    toDateTime(): DateTime
    beginningOfDay(): Date
    beginningOfHour(): Date
    midnight(): Date
    endOfDay(): Date
    endOfHour(): Date
    ago(input: Duration): Date
    fromNow(input: Duration): Date
    since(seconds: number): Date
    in(seconds: number): Date
    utc(): Date
    secondsSinceMidnight (): number
    advance(option: object): Date
    change(option: object): Date
  }
}
Date.prototype.toDateTime = function() {
  return DateTime.fromJSDate(this)
}

Date.prototype.beginningOfDay = function() {
  return this.toDateTime().set({hour: 0, minute: 0, second: 0, millisecond: 0}).toJSDate()
}

Date.prototype.beginningOfHour = function() {
  return this.toDateTime().set({minute: 0, second: 0, millisecond: 0}).toJSDate()
}

Date.prototype.midnight = function() {
  return this.toDateTime().set({hour: 24, minute: 0, second: 0, millisecond: 0}).toJSDate()
}

Date.prototype.endOfDay = function() {
  return this.toDateTime().set({hour: 23, minute: 59, second: 59, millisecond: 999}).toJSDate()
}

Date.prototype.endOfHour = function() {
  return this.toDateTime().set({minute: 59, second: 59, millisecond: 999}).toJSDate()
}

Date.prototype.fromNow = function(input) {
  return this.toDateTime().plus(input).toJSDate()
}

Date.prototype.ago = function(input) {
  return this.toDateTime().minus(input).toJSDate()
}
