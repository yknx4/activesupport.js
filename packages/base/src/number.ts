declare global {
  interface Number {
    /**
     * They return the corresponding amount of bytes, using a conversion factor of 1024:
     */
    bytes(): number
    /**
     * They return the corresponding amount of bytes, using a conversion factor of 1024:
     */
    kilobytes(): number
    /**
    * They return the corresponding amount of bytes, using a conversion factor of 1024:
    */
    megabytes(): number
    /**
     * They return the corresponding amount of bytes, using a conversion factor of 1024:
     */
    gigabytes(): number
    /**
    * They return the corresponding amount of bytes, using a conversion factor of 1024:
    */
    terabytes(): number
    /**
     * They return the corresponding amount of bytes, using a conversion factor of 1024:
     */
    petabytes(): number
    /**
    * They return the corresponding amount of bytes, using a conversion factor of 1024:
    */
    exabytes(): number
  }
}

Number.prototype.bytes = function () {
  return this.valueOf()
}

Number.prototype.kilobytes = function () {
  return this.bytes() * 1024
}

Number.prototype.megabytes = function () {
  return this.kilobytes() * 1024
}

Number.prototype.gigabytes = function () {
  return this.megabytes() * 1024
}

Number.prototype.terabytes = function () {
  return this.gigabytes() * 1024
}

Number.prototype.petabytes = function () {
  return this.terabytes() * 1024
}

Number.prototype.exabytes = function () {
  return this.petabytes() * 1024
}

export type NumberHelpers = Number
