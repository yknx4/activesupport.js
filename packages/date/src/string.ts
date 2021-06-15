import { DateTime } from 'luxon'

declare global {
  interface String {
    toDate(): Date
    toTime(): DateTime
    toDateTime(): DateTime
  }
}

String.prototype.toDate = function () {
  return DateTime.fromISO(this.toString()).toJSDate()
}

String.prototype.toTime = function () {
  return DateTime.fromISO(this.toString())
}

String.prototype.toDateTime = String.prototype.toTime

export type StringHelpers = String
