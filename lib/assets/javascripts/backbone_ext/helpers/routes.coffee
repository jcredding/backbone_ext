BackboneExt.Helpers ||= {}
BackboneExt.Helpers.Routes ||= {}
BackboneExt.Helpers.Routes.Model =
  url: (options) ->
    options ||= {}
    options.format = 'json' unless options.format?
    if not this.isNew()
      if @routes.show?
        options.id = @id
        if _.isFunction(@routes.show) then @routes.show(this, options) else @routes.show
      else
        null
    else
      if @routes.index?
        if _.isFunction(@routes.index) then @routes.index(this, options) else @routes.index
      else
        null

  newURL: (options) ->
    options ||= {}
    options.format = 'json' unless options.format?
    options[@railsName] ||= this.toBackboneJSON()
    if @routes.new?
      if _.isFunction(@routes.new) then @routes.new(this, options) else @routes.new
    else
      null

_.extend BackboneExt.Model.prototype, BackboneExt.Helpers.Routes.Model

BackboneExt.Helpers.Routes.Collection =
  url: (options) ->
    options ||= {}
    options.format = 'json' unless options.format?
    if @routes.index?
      if _.isFunction(@routes.index)
        if @routes.belongsTo?
          iterator = (hash, name) ->
            idMethod = "#{name}_id"
            hash[idMethod] = this[idMethod]
            hash
          routeOptions = _.inject(@routes.belongsTo, iterator, {}, this)
          options = _.extend(routeOptions, (options || {}))
        scopeOptions = {}
        scopeOptions.where ||= @where if @where?
        scopeOptions.limit ||= @limit if @limit?
        scopeOptions.order ||= @order if @order?
        scopeOptions.group ||= @group if @group?
        urlOptions = _.extend({}, (@params || {}), scopeOptions, options)
        @routes.index(urlOptions)
      else
        @routes.index
    else
      null

_.extend BackboneExt.Collection.prototype, BackboneExt.Helpers.Routes.Collection
