package com.user.edgev10.capabilities.number

uses edgev10.jsonrpc.AbstractRpcHandler
uses edgev10.di.annotations.InjectableNode
uses edgev10.jsonrpc.annotation.JsonRpcUnauthenticatedMethod
uses com.user.edgev10.capabilities.number.dto.InputReqDTO
uses com.user.edgev10.capabilities.number.dto.ResponseDTO

class NumberHandler extends AbstractRpcHandler {
  private var _primePlugin: IPrimeNumberPlugin
  private var _converterPlugin: INumberFormatConverter
  @InjectableNode
  construct(primePlugin: IPrimeNumberPlugin,
            converterPlugin: INumberFormatConverter) {
    _primePlugin = primePlugin
    _converterPlugin = converterPlugin
  }

  @JsonRpcUnauthenticatedMethod
  public function checkIsPrime(dto: InputReqDTO): ResponseDTO {
    var result = _primePlugin.isPrime(dto.Number)
    var resp = new ResponseDTO(){
     : IsPrime = result

    }
    return resp
  }


  @JsonRpcUnauthenticatedMethod
  public function convert(dto: InputReqDTO): ResponseDTO {
    var result = _converterPlugin.convert(dto.Number)
    var resp = new ResponseDTO(){
        :  FormattedNumber =  result
    }
    return resp
  }
}
