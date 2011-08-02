class BackboneExt.Associations.HasOne extends BackboneExt.Associations.Base
  constructor: (@name, @options) ->
    @type = "HasOne"    
    super(@name, @options)

    @collection = new @options['collection']()
    @model[@name] = new @collection['model']()

    if @model.attributes[@name]?
      @fromAttrs()

  refresh: ->
    if @model.attributes[@name]?
      @fromAttrs()
    else if @model.id?
      @fetch()
    else
      @afterRefresh()

  fromAttrs: ->
    attrs = _.clone(@model.attributes[@name])
    @model[@name].set(attrs)
    super()

  fetch: ->
    args = @argsForCollection()
    args.limit = 1
    _.each args, (value, key) =>
      @model[@name][key] = value
    @model[@name].fetch
      success: @afterRefresh
      error: @afterFail
    this

  afterRefresh: () ->
    (@model[@name] = @collection.models[0]) if !@collection.isEmpty()
    super()
