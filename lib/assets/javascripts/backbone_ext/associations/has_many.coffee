class BackboneExt.Associations.HasMany extends BackboneExt.Associations.Base
  constructor: (@name, @options) ->
    @type = "HasMany"
    super(@name, @options)

    @model[@name] = new @options['collection']

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
    @model[@name].add(attrs)
    super()

  fetch: ->
    args = @argsForCollection()
    _.each args, (value, key) =>
      @model[@name][key] = value
    @model[@name].fetch
      success: @afterRefresh
      error: @afterFail
    this
