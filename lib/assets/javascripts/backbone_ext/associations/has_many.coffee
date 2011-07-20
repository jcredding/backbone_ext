class BackboneExt.Associations.HasMany extends BackboneExt.Associations.Base
  constructor: (@name, @options) ->
    @type = "HasMany"
    super(@name, @options)

  refresh: ->
    if (attrs = _.clone(@model.attributes[@name]))? and not _.isEmpty(attrs)
      this._buildFromAttributes(attrs)
    else if (id = @model.id)
      this._fetchModel(id)
    else
      this.afterRefresh()

  _fetchModel: (id) ->
    if !@options.where
      @options.where = {}
      @options.where["#{@model.railsName}_id"] = id
    args =
      where: (if _.isFunction(@options.where) then @options.where(@model) else @options.where)
    @model[@name] = new @options['collection']([], args)
    @model[@name].fetch({ success: this.afterRefresh })
    this

  _buildFromAttributes: (attrs) ->
    @model[@name] = new @options['collection'](attrs)
    super(attrs)
