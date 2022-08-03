package com.user.edgev10.capabilities.number

uses java.lang.Integer
uses edgev10.di.annotations.ForAllNodes
uses edgev10.di.annotations.InjectableNode

class HexadecimalConverter implements INumberFormatConverter {
  @InjectableNode
  construct(){}
  override function convert(number: Integer): String {
    return Integer.toHexString(number)
  }
}
