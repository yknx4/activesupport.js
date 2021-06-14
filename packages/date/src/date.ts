import {DateTime} from 'luxon'

declare global {
  interface Date {
    beginningOfDay(): Date
    beginningOfHour(): Date
    midnight(): Date
    endOfDay(): Date
    endOfHour(): Date
    since(seconds: number): Date
    in(seconds: number): Date
  }
}

Date.prototype.beginningOfDay = function() {
  throw new Error('Not Implemented')
}

Date.prototype.beginningOfHour = function() {
  throw new Error('Not Implemented')
}

Date.prototype.midnight = function() {
  throw new Error('Not Implemented')
}

Date.prototype.endOfDay = function() {
  throw new Error('Not Implemented')
}

Date.prototype.endOfHour = function() {
  throw new Error('Not Implemented')
}