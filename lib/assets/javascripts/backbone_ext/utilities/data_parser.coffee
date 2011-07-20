BackboneExt.Utilities.DataParser =
  parse: ->
    dataScripts = $('SCRIPT[data-name][type="application/json"]')
    _.each dataScripts, (dataScript) =>
      dataScript = $(dataScript)
      @object = {} if !object?
      if dataScript.attr('data-merge')
        @object = $.extend(true, @object, $.parseJSON(dataScript.html()))
      else
        @object[dataScript.attr('data-name')] = $.parseJSON(dataScript.html())
    @object || {}
