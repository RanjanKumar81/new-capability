package com.hastings.edgev10.capabilities.number

uses java.lang.Integer
uses edgev10.di.annotations.ForAllNodes


class DecimalFormatConverter implements INumberFormatConverter {

  @ForAllNodes
  construct()   {}
  override function convert(number: Integer): String {
    return number.toString()
  }
}