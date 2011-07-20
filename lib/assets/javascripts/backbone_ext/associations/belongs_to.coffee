class BackboneExt.Associations.BelongsTo extends BackboneExt.Associations.Base
  constructor: (@name, @options) ->
    @type = "BelongsTo"
    super(@name, @options)

    @options.key ||= "#{name}_id"

  # If there are attributes under the associations name, i.e.
  #
  #   belongsTo("user_type", ...)
  #   ...
  #   user.attributes["user_type"] = {...}
  #
  # then use those to build a new model, don't worry about requesting new attributes
  # from the server.
  # If not then see if a value can be found for the key from the attributes, if so
  # use this key to fetch the model from the server, i.e.
  #
  # user_type = new UserType({ id: 1 })
  # user_type.fetch()
  #
  # Otherwise, just run the afterRefresh.
  refresh: ->
    if (attrs = _.clone(@model.attributes[@name]))? and not _.isEmpty(attrs)
      this._buildFromAttributes(attrs)
    else if (id = @model.attributes[@options.key])
      this._fetchModel(id)
    else
      @model[@name] = null
      this.afterRefresh()

  _fetchModel: (id) ->
    @model[@name] = new @options['model']({ 'id': id })
    @model[@name].fetch({ success: this.afterRefresh })
    this

  _buildFromAttributes: (attrs) ->
    @model[@name] = new @options['model'](attrs)
    super(attrs)
