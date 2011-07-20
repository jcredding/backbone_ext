BackboneExt.Router = Backbone.Router.extend
  initialize: (options) ->
    routeMethods = _.uniq(_.values(@routes))
    methods = _.flatten([ routeMethods, 'currentlyAt', 'navigateTo' ])
    _.each methods, (method) =>
      _.bindAll(this, method)
    @app = options.app
    @setup() if @setup?

  setCurrentView: (view) ->
    @view = view
    @view.bind("navigate", @navigateTo)
    @view.bind("at", @currentlyAt)
    @view

  currentlyAt: (path, trigger) ->
    @app.navigate(path, trigger)

  navigateTo: (path) ->
    @app.navigateTo(path)
