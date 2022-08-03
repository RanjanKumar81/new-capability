package com.user.edgev10.capabilities.number.dto

uses java.lang.Integer
uses edgev10.jsonmapper.JsonProperty
uses edgev10.aspects.validation.annotations.Required
uses edgev10.aspects.validation.annotations.Range

class InputReqDTO {

  @JsonProperty
  @Required
  @Range(2, 99)
  private var _number: Integer as Number
}
