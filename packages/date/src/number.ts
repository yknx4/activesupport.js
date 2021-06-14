import {Duration} from 'luxon'

declare global {
  interface Number {
    seconds(): Duration
    minutes(): Duration
    hours(): Duration
    days(): Duration
    weeks(): Duration
    fortnights(): Duration
  }
}

Number.prototype.seconds = function() {
  throw new Error('Not Implemented')
}


Number.prototype.minutes = function() {
  throw new Error('Not Implemented')
}


Number.prototype.hours = function() {
  throw new Error('Not Implemented')
}


Number.prototype.days = function() {
  throw new Error('Not Implemented')
}


Number.prototype.weeks = function() {
  throw new Error('Not Implemented')
}


Number.prototype.fortnights = function() {
  throw new Error('Not Implemented')
}