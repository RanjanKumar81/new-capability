package com.user.edgev10.capabilities.number

uses java.lang.Integer
uses edgev10.di.annotations.ForAllNodes

class PrimeNumberPluginImpl implements IPrimeNumberPlugin {
  @ForAllNodes
  construct() {
  }

  override function isPrime(number: Integer): Boolean {
    var index = 2
    var isPrime = true
    while (index <= number / 2) {
      var rem = number % index
      if (rem == 0){
        isPrime = false
      }
      index = index + 1
    }
    return isPrime
  }
}
