checkOptions = (name, options, type) ->
  throw("Association has no type") unless type?
  needed = switch(type)
    when "belongsTo"          then "model"
    when "hasMany", "hasOne"  then "collection"
  if needed? and not options[needed]?
    throw("The #{type} association #{name} requires a '#{needed}' option.")
  options.type = type
  options

getValue = (object, model) ->
  value = if _.isFunction(object)
    object(model)
  else
    object
  _.clone(value)

class BackboneExt.Associations.Base
  constructor: (@name, @options) ->
    _.bindAll(this, "load", "refresh", "afterRefresh", "afterFail")

    @options = checkOptions(@name, @options, @type)

    @loaded = false
    @failed = false
    @model = @options.on

    if @type != "belongsTo"
      @options.key ||= "#{@model.railsName}_id"
      if !@options.where and !@options.params
        @options.where = {}
        @options.where[@options.key] = @model.id
    else
      @options.key ||= "#{@name}_id"

  load: ->
    @loaded = false
    @refresh()

  fromAttrs: ->
    @model.unset(@name, { silent: true })
    @afterRefresh()
    this

  afterRefresh: ->
    @loaded = true
    @trigger("loaded", this)
    false

  afterFail: (object, response) ->
    @failed = true
    @afterRefresh()
    false

  argsForCollection: ->
    args = {}
    if @options.where
      args.where = getValue(@options.where, @model)
    if @options.params
      args.params = getValue(@options.params, @model)
    args

_.extend BackboneExt.Associations.Base.prototype, Backbone.Events
