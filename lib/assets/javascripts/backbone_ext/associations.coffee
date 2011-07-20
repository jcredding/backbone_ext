onAssociations = (method, names, associations) ->
  if not _.isEmpty(names)
    _.each names, (name) =>
      associations.config[name][method]()
  else
    _.each associations.config, (association, name) =>
      association[method]()
  this

class BackboneExt.Associations
  constructor: (@model) ->
    _.bindAll(this, "store", "load", "associationLoaded")
    @config = {}
    @loaded = []
    @allLoaded = false

  store: (type, name, options) ->
    options.on = @model
    @config[name] = switch(type)
      when "belongsTo"  then (new BackboneExt.Associations.BelongsTo(name, options))
      when "hasMany"    then (new BackboneExt.Associations.HasMany(name, options))
      when "hasOne"     then (new BackboneExt.Associations.HasOne(name, options))
    @config[name].bind("loaded", this.associationLoaded)
    this

  load: (names...) ->
    @allLoaded = false
    onAssociations("load", names, this)

  refresh: (names...) ->
    onAssociations("refresh", names, this)

  associationLoaded: (association) ->
    name = association.name
    @loaded.push(name)
    @loaded = _.uniq(@loaded)
    @model.trigger("association:#{name}:loaded", @model[name], name)
    @allLoaded = (@loaded.length == _.values(@config).length)
    @model.trigger("associations:loaded", @model) if @allLoaded

_.extend BackboneExt.Associations.prototype, Backbone.Events
