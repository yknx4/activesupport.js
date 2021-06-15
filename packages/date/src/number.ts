import { Duration } from 'luxon'

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

Number.prototype.seconds = function () {
  return Duration.fromObject({ seconds: this.valueOf() })
}

Number.prototype.minutes = function () {
  return Duration.fromObject({ minutes: this.valueOf() })
}

Number.prototype.hours = function () {
  return Duration.fromObject({ hours: this.valueOf() })
}

Number.prototype.days = function () {
  return Duration.fromObject({ days: this.valueOf() })
}

Number.prototype.weeks = function () {
  return Duration.fromObject({ weeks: this.valueOf() })
}

Number.prototype.fortnights = function () {
  return Duration.fromObject({ weeks: this.valueOf() * 2 })
}
