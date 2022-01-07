package com.hastings.edgev10.capabilities.number

uses java.lang.Integer

interface INumberFormatConverter {

  public function convert(number: Integer): String
}