class BackboneExt.Associations.HasOne extends BackboneExt.Associations.Base
  constructor: (@name, @options) ->
    @type = "HasOne"
    super(@name, @options)

  refresh: ->
    if (attrs = _.clone(@model.attributes[@name]))? and not _.isEmpty(attrs)
      this._buildFromAttributes(attrs)
    else if (id = @model.id)
      this._fetchModel(id)
    else
      this.afterRefresh()

  afterRefresh: (collection, response) ->
    @model[@name] = if collection? && !collection.isEmpty()
      collection.models[0]
    else
      null
    super()

  _fetchModel: (id) ->
    if !@options.where
      @options.where = {}
      @options.where["#{@model.railsName}_id"] = id
    args =
      limit: 1
      where: (if _.isFunction(@options.where) then @options.where(@model) else @options.where)
    collection = new @options['collection']([], args)
    collection["#{@model.railsName}_id"] = id
    @model[@name] = new collection['model']()
    collection.fetch({ success: this.afterRefresh })

  _buildFromAttributes: (attrs) ->
    collection = new @options['collection']()
    @model[@name] = new collection['model'](attrs)
    super(attrs)
