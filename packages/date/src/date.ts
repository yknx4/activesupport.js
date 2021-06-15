import { DateTime, Duration, DurationInput, DateObjectUnits } from 'luxon'

declare global {

  interface DateConstructor {
    yesterday(): Date
    tomorrow(): Date
  }

  interface Date {
    /**
     * Converts JSDate to Luxon's DateTime
     */
    toDateTime(): DateTime
    /**
     * The methods beginning_of_year and end_of_year return the dates for the beginning and end of the year
     */
    beginningOfYear(): Date
    /**
     * The methods beginning_of_quarter and end_of_quarter return the dates for the beginning and end of the quarter of the receiver's calendar year
     */
    beginningOfQuarter(): Date
    /**
     * The methods beginning_of_month and end_of_month return the dates for the beginning and end of the month
     */
    beginningOfMonth(): Date
    /**
     * The methods beginning_of_week and end_of_week return the dates for the beginning and end of the week, respectively.
     */
    beginningOfWeek(): Date
    /**
     * The method beginning_of_day returns a timestamp at the beginning of the day (00:00:00)
     */
    beginningOfDay(): Date
    /**
     * The method beginning_of_hour returns a timestamp at the beginning of the hour (hh:00:00)
     */
    beginningOfHour(): Date
    /**
     * The method beginning_of_minute returns a timestamp at the beginning of the minute (hh:mm:00)
     */
    beginningOfMinute(): Date
    /**
     * is aliased to beginningOfDay
     */
    midnight(): Date
    /**
     * The method end_of_minute returns a timestamp at the end of the minute (hh:mm:59)
     */
    endOfMinute(): Date
    /**
     * The method end_of_hour returns a timestamp at the end of the hour (hh:59:59)
     */
    endOfHour(): Date
    /**
     * The method end_of_day returns a timestamp at the end of the day (23:59:59)
     */
    endOfDay(): Date
    /**
     * The methods beginning_of_week and end_of_week return the dates for the beginning and end of the week, respectively.
     */
    endOfWeek(): Date
    /**
     * The methods beginning_of_month and end_of_month return the dates for the beginning and end of the month
     */
    endOfMonth(): Date
    /**
     * The methods beginning_of_quarter and end_of_quarter return the dates for the beginning and end of the quarter of the receiver's calendar year
     */
    endOfQuarter(): Date
    /**
     * The methods beginning_of_year and end_of_year return the dates for the beginning and end of the year
     */
    endOfYear(): Date
    /**
     * The method ago receives a number of seconds as argument and returns a timestamp those many seconds ago from midnight
     * @param input 
     */
    ago(input: Duration): Date
    /**
     * The method years_ago receives a number of years and returns the same date those many years ago
     * @param years 
     */
    yearsAgo(years: number): Date
    /**
     * The method monthsAgo receives a number of months and returns the same date those many months ago
     * @param months 
     */
    monthsAgo(months: number): Date
    /**
     * The method monthsSince receives a number of months and returns the same date those many months in the future
     * @param months 
     */
    monthsSince(months: number): Date
    /**
     * years_since moves forward in time
     * @param years 
     */
    yearsSince(years: number): Date
    /**
     * last_year is short-hand for #years_ago(1)
     */
    lastYear(): Date
    /**
     * last_month is short-hand for #months_ago(1)
     */
    lastMonth(): Date
    /**
     * The method weeksAgo receives a number of weeks and returns the same date those many weeks ago
     * @param weeks 
     */
    weeksAgo(weeks: number): Date
    /**
     * The method weeksSince receives a number of weeks and returns the same date those many weeks in the future
     * @param weeks 
     */
    weeksSince(weeks: number): Date
    /**
    * lastMonth is short-hand for #monthsAgo(1)
    */
    lastMonth(): Date
    /**
     * since moves forward. see ago
     * @param seconds 
     */
    since(seconds: number): Date
    in(seconds: number): Date
    utc(): Date
    /**
     * Returns the number of seconds since 00:00:00.
     */
    secondsSinceMidnight(): number
    /**
     * Returns the number of seconds until 23:59:59.
     */
    secondsUntilEndOfDay(): number
    /**
     * The most generic way to jump to other days is advance.
     * @param option 
     */
    advance(option: DurationInput): Date
    /**
     * The method change allows you to get a new date which is the same as the receiver except for the given year, month, or day
     * @param option 
     */
    change(option: DateObjectUnits): Date
    /**
    * nextWeek is short-hand for #monthsSince(1)
    */
    nextWeek(): Date
    /**
     * prev_week is aliased to last_week
     */
    prevWeek(): Date
    lastWeek(): Date
    isPast(): boolean
    isToday(): boolean
    isTomorrow(): boolean
    isNextDay(): boolean
    isYesterday(): boolean
    isPrevDay(): boolean
    isFuture(): boolean
    isOnWeekday(): boolean
    isOnWeekend(): boolean
  }
}

Date.yesterday = function () {
  return DateTime.now().minus({ day: 1 }).toJSDate()
}

Date.tomorrow = function () {
  return DateTime.now().plus({ day: 1 }).toJSDate()
}

Date.prototype.toDateTime = function () {
  return DateTime.fromJSDate(this)
}

Date.prototype.beginningOfDay = function () {
  return this.toDateTime().startOf("day").toJSDate()
}

Date.prototype.beginningOfYear = function () {
  return this.toDateTime().startOf("year").toJSDate()
}

Date.prototype.beginningOfMonth = function () {
  return this.toDateTime().startOf("quarter").toJSDate()
}

Date.prototype.beginningOfMonth = function () {
  return this.toDateTime().startOf("month").toJSDate()
}

Date.prototype.beginningOfWeek = function () {
  return this.toDateTime().startOf("week").toJSDate()
}

Date.prototype.beginningOfDay = function () {
  return this.toDateTime().startOf("day").toJSDate()
}


Date.prototype.beginningOfHour = function () {
  return this.toDateTime().startOf("hour").toJSDate()
}

Date.prototype.beginningOfMinute = function () {
  return this.toDateTime().startOf("minute").toJSDate()
}

Date.prototype.midnight = Date.prototype.beginningOfDay

Date.prototype.endOfMinute = function () {
  return this.toDateTime().endOf("minute").toJSDate()
}
Date.prototype.endOfHour = function () {
  return this.toDateTime().endOf("hour").toJSDate()
}
Date.prototype.endOfDay = function () {
  return this.toDateTime().endOf("day").toJSDate()
}
Date.prototype.endOfWeek = function () {
  return this.toDateTime().endOf("week").toJSDate()
}
Date.prototype.endOfMonth = function () {
  return this.toDateTime().endOf("month").toJSDate()
}
Date.prototype.endOfQuarter = function () {
  return this.toDateTime().endOf("quarter").toJSDate()
}
Date.prototype.endOfYear = function () {
  return this.toDateTime().endOf("year").toJSDate()
}

Date.prototype.advance = function (input) {
  return this.toDateTime().plus(input).toJSDate()
}

Date.prototype.ago = function (input) {
  return this.toDateTime().minus(input).toJSDate()
}

Date.prototype.yearsAgo = function (years) {
  return this.ago(Duration.fromObject({ years }))
}

Date.prototype.monthsAgo = function (months) {
  return this.ago(Duration.fromObject({ months }))
}

Date.prototype.since = function (seconds) {
  return this.toDateTime().plus({ seconds }).toJSDate()
}

Date.prototype.yearsSince = function (years) {
  return this.ago(Duration.fromObject({ years }))
}

Date.prototype.monthsAgo = function (months) {
  return this.ago(Duration.fromObject({ months }))
}

Date.prototype.weeksAgo = function (weeks) {
  return this.ago(Duration.fromObject({ weeks }))
}

Date.prototype.weeksSince = function (weeks) {
  return this.ago(Duration.fromObject({ weeks }))
}

Date.prototype.lastYear = function() {
  return this.yearsAgo(1)
}

Date.prototype.lastMonth = function() {
  return this.monthsAgo(1)
}

Date.prototype.in = Date.prototype.since

Date.prototype.utc = function() {
  return this.toDateTime().toUTC().toJSDate()
}

Date.prototype.secondsSinceMidnight = function() {
  return this.toDateTime().diff(DateTime.fromJSDate(this.midnight()), 'seconds').seconds
}

Date.prototype.secondsUntilEndOfDay = function() {
  return this.toDateTime().diff(DateTime.fromJSDate(this.endOfDay()), 'seconds').negate().seconds
}

Date.prototype.change = function(input) {
  return this.toDateTime().set(input).toJSDate()
}

Date.prototype.nextWeek = function() {
  return this.weeksSince(1)
}

Date.prototype.prevWeek = function() {
  return this.weeksAgo(1)
}

Date.prototype.lastWeek = Date.prototype.prevWeek

Date.prototype.isPast = function() {
  return this.toDateTime() < DateTime.now()
}

Date.prototype.isToday = function() {
  return this.toDateTime().hasSame(DateTime.now(), 'day')
}

Date.prototype.isTomorrow = function() {
  return this.toDateTime().hasSame(Date.tomorrow().toDateTime(), 'day')
}

Date.prototype.isNextDay = Date.prototype.isTomorrow

Date.prototype.isYesterday = function() {
  return this.toDateTime().hasSame(Date.yesterday().toDateTime(), 'day')
}

Date.prototype.isPrevDay = Date.prototype.isYesterday

Date.prototype.isFuture = function() {
  return this.toDateTime() > DateTime.now()
}

Date.prototype.isOnWeekday = function() {
  return this.toDateTime().weekday < 6
}

Date.prototype.isOnWeekend = function() {
  return !this.isOnWeekday()
}