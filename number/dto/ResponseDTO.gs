package com.hastings.edgev10.capabilities.number.dto

uses edgev10.jsonmapper.JsonProperty

class ResponseDTO {

  @JsonProperty
  private var _isPrime: Boolean as IsPrime

  @JsonProperty
  private var _formattedNumber: String as FormattedNumber
}