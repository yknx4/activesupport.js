import casejs from 'case'
import plural from 'pluralize'
declare global {
  interface ParameterizeOptions {
    preserveCase?: boolean
    separator?: string
  }
  interface String {
    /**
     * The method pluralize returns the plural of its receiver
     * @param count If count == 1 the singular form will be returned. For any other value of count the plural form will be returned
     */
    pluralize(count?: number): string
    /**
     * The singularize method is the inverse of pluralize
     */
    singularize(): string
    /**
     * The method camelize returns its receiver in camel case
     * @param type it can be :upper (default), or :lower. With the latter the first letter becomes lowercase
     */
    camelize(type: "upper" | "lower"): string
    /**
     * Alias of camelize
     * @param type 
     */
    camelcase(type: "upper" | "lower"): string
    /**
     * The method underscore goes the other way around, from camel case to paths
     */
    underscore(): string
    /**
     * The method titleize capitalizes the words in the receiver
     */
    titleize(): string
    /**
     * Alias of titleize
     */
    titlecase(): string
    /**
     * The method dasherize replaces the underscores in the receiver with dashes
     */
    dasherize(): string
    /**
     * The method parameterize normalizes its receiver in a way that can be used in pretty URLs
     * @param options To preserve the case of the string, set the preserve_case argument to true. By default, preserve_case is set to false. To use a custom separator, override the separator argument.
     */
    parameterize(options: ParameterizeOptions): string
    /**
     * The method humanize tweaks an attribute name for display to end users.
     * 
     * Specifically, it performs these transformations:
     *
     * Applies human inflection rules to the argument.
     * Deletes leading underscores, if any.
     * Removes a "_id" suffix if present.
     * Replaces underscores with spaces, if any.
     * Downcases all words except acronyms.
     * Capitalizes the first word.
     * @param capitalize The capitalization of the first word can be turned off by setting the :capitalize option to false (default is true)
     */
    humanize(capitalize: boolean): string
    /**
     * The method tableize is underscore followed by pluralize.
     */
    tableize(): string
    /**
     * The method foreign_key gives a foreign key column name from a class name. To do so it underscores, and adds "_id"
     * @param underscore Pass a false argument if you do not want the underscore in "_id"
     */
    foreignKey(underscore?: boolean): string
    capitalize(): string
    headerize(): string
  }
}

String.prototype.pluralize = function(count = 2) {
  return plural(this.toString(), count)
}

String.prototype.singularize = function() {
  return plural(this.toString(), 1)
}

String.prototype.camelize = function(type: "upper" | "lower") {
  return type === "upper" ? casejs.pascal(this.toString()) : casejs.camel(this.toString())
}
String.prototype.camelize = String.prototype.camelcase

String.prototype.underscore = function() {
  return casejs.snake(this.toString())
}

String.prototype.titleize = function() {
  return casejs.title(this.toString())
}
String.prototype.titlecase = String.prototype.titleize

String.prototype.dasherize = function() {
  return casejs.kebab(this.toString())
}

String.prototype.parameterize = function(options: ParameterizeOptions) {
  throw new Error('not implemented')
}

String.prototype.humanize = function(capitalize: boolean) {
  throw new Error('not implemented')
}

String.prototype.tableize = function() {
  return this.underscore().pluralize()
}

String.prototype.foreignKey = function(underscore = true) {
  const toAppend = underscore ? '_id' : 'id'
  return `${this.underscore()}${toAppend}`
}

String.prototype.capitalize = function() {
  return casejs.capital(this.toString())
}

String.prototype.headerize = function() {
  return casejs.header(this.toString())
}