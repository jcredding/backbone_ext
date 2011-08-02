BackboneExt.Router = Backbone.Router.extend
  initialize: (options) ->
    routeMethods = _.uniq(_.values(@routes))
    methods = _.flatten(routeMethods)
    _.each methods, (method) =>
      _.bindAll(this, method)

    _.each @routes, (method, path) =>
      if !path.match(/\?\*params$/)
        @route("#{path}?*params", method, this[method])
      if path.match(/\/$/)
        @route(path.gsub(/\/$/, ""), method, this[method])
      else
        @route("#{path}/", method, this[method])

    @app = options.app
    @manager = options.manager

    @setup() if @setup?

  _parseParams: (params) ->
    if params
      iterator = (object, keyvalue) ->
        parts = keyvalue.split("=")
        object[parts[0]] = parts[1]
        object
      _.inject(params.split("&"), iterator, {}, this)
    else
      []
