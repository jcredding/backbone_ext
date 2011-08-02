class BackboneExt.Associations.BelongsTo extends BackboneExt.Associations.Base
  constructor: (@name, @options) ->
    @type = "BelongsTo"
    super(@name, @options)

    id = @getID()
    @model[@name] = new @options.model
      id: id

    if @model.attributes[@name]?
      @fromAttrs()

  refresh: ->
    if @model.attributes[@name]?
      @fromAttrs()
    else if @model.attributes[@options.key]
      @fetch()
    else
      @afterRefresh()

  fromAttrs: ->
    attrs = _.clone(@model.attributes[@name])
    @model[@name].set(attrs)
    super()

  fetch: ->
    @model[@name].fetch
      success: @afterRefresh
      error: @afterFail
    this

  getID: ->
    @model.attributes[@options.key]
