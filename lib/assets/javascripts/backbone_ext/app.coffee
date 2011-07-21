cleanPath = (path) ->
  path.replace(/^\//, '')

class BackboneExt.App
  config:
    dataParser: BackboneExt.Utilities.DataParser
    routeParser: BackboneExt.Utilities.RouteParser
    routersNamespace: window.App.Routers

  constructor: (config) ->
    _.bindAll(this, "setup", "start", "navigateTo", "navigate")
    config ||= {}
    @config = _.extend(@config, config)
    @page = cleanPath(window.location.pathname)
    if !_.isEmpty(@config.routersNamespace)
      # parse data script tags and store
      @data = @config.dataParser.parse() if @config.dataParser?
      # fetch and parse routes from the app
      if @config.routeParser?
        @delayStart = true
        onRouteParseSuccess = (routes) =>
          @routes = routes
          @start() if @delayStart
          true
        @config.routeParser.load
          success: onRouteParseSuccess
    @start()

  start: ->
    if !@delayStart || @routes
      @routers = {}
      _.each _.keys(@config.routersNamespace), (routerName) =>
        options =
          app: this
        @routers[routerName] = new @config.routersNamespace[routerName](options)
      @setup()
      @hasRouters = !_.isEmpty(@routers);
      @hasHistory = (window.history and window.history.pushState)
      if @hasRouters and @hasHistory
        Backbone.history.start({ pushState: true })
      else if @hasRouters
        handler = _.detect Backbone.history.handlers, (handler) =>
          handler.route.test(@page)
        handler.callback(@page)
      @routers
    else
      false

  setup: ->
    # define in inherited class and perform any one-time setup actions needed

  navigateTo: (path) ->
    path = cleanPath(path)
    if @hasHistory
      @navigate(path)
      path = Backbone.history.getFragment()
      @navigate(path, true)
    else
      @navigate(path, true)

  navigate: (path, trigger) ->
    path = cleanPath(path)
    if @hasHistory
      Backbone.history.navigate(path, trigger)
    else
      window.location = path if trigger
