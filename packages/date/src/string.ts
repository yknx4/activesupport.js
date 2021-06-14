import {DateTime} from 'luxon'

declare global {
  interface String {
    toDate(): Date
    toTime(): DateTime
    toDateTime(): DateTime
  }
}

String.prototype.toDate = function() {
  throw new Error('Not Implemented')
}

String.prototype.toTime = function() {
  throw new Error('Not Implemented')
}

String.prototype.toDateTime = function() {
  throw new Error('Not Implemented')
}