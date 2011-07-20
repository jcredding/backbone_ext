checkOptions = (name, options, type) ->
  throw("Association has no type") unless type?
  needed = switch(type)
    when "belongsTo"          then "model"
    when "hasMany", "hasOne"  then "collection"
  if needed? and not options[needed]?
    throw("The #{type} association #{name} requires a '#{needed}' option.")
  options.type = type
  options

class BackboneExt.Associations.Base
  constructor: (@name, @options) ->
    _.bindAll(this, "load", "refresh", "afterRefresh")

    @options = checkOptions(@name, @options, @type)

    @loaded = false
    @model = @options.on

  load: ->
    @loaded = false
    this.refresh()

  afterRefresh: ->
    @loaded = true
    this.trigger("loaded", this)
    false

  _buildFromAttributes: (attrs) ->
    @model.unset(@name, { silent: true })
    this.afterRefresh()
    this

_.extend BackboneExt.Associations.Base.prototype, Backbone.Events
