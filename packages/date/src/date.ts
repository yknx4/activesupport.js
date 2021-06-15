import { DateTime, Duration, DurationInput } from 'luxon'

declare global {

  interface DateConstructor {
    yesterday(): Date
    tomorrow(): Date
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
    * last_week is short-hand for #weeks_ago(1)
    */
    lastMonth(): Date
    fromNow(input: Duration): Date
    /**
     * since moves forward. see ago
     * @param seconds 
     */
    since(seconds: number): Date
    in(seconds: number): Date
    utc(): Date
    secondsSinceMidnight(): number
    /**
     * The most generic way to jump to other days is advance.
     * @param option 
     */
    advance(option: DurationInput): Date
    /**
     * The method change allows you to get a new date which is the same as the receiver except for the given year, month, or day
     * @param option 
     */
    change(option: DurationInput): Date
    nextWeek(): Date
    /**
     * prev_week is aliased to last_week
     */
    prevWeek(): Date
    lastWeek(): Date
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
  return this.toDateTime().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toJSDate()
}

Date.prototype.beginningOfHour = function () {
  return this.toDateTime().set({ minute: 0, second: 0, millisecond: 0 }).toJSDate()
}

Date.prototype.midnight = Date.prototype.beginningOfDay

Date.prototype.endOfDay = function () {
  return this.toDateTime().set({ hour: 23, minute: 59, second: 59, millisecond: 999 }).toJSDate()
}

Date.prototype.endOfHour = function () {
  return this.toDateTime().set({ minute: 59, second: 59, millisecond: 999 }).toJSDate()
}

Date.prototype.fromNow = function (input) {
  return this.toDateTime().plus(input).toJSDate()
}

Date.prototype.ago = function (input) {
  return this.toDateTime().minus(input).toJSDate()
}

Date.prototype.since = function (seconds) {
  return this.toDateTime().minus({ seconds }).toJSDate()
}

Date.prototype.in = function (seconds) {
  return this.toDateTime().plus({ seconds }).toJSDate()
}
