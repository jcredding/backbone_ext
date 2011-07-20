BackboneExt.Utilities.RouteParser =
  load: (options) ->
    _.bindAll(this, "parse")
    options ||= {}
    @onSuccess = options['success']
    $.ajax({
      url: "/routes.json",
      method: "GET",
      dataType: "json"
      success: @parse
    })
    true

  parse: (data) ->
    @routes = new BackboneExt.Utilities.RoutesCollection()
    _.each data, (route) =>
      @routes.add(route)
    @onSuccess(@routes) if @onSuccess
    @routes
