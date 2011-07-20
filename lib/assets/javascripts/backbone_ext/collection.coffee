BackboneExt.Collection = Backbone.Collection.extend
  _railsModel: true

  routes: {}

  parse: (response) ->
    json = if !_.isArray(response)
      name = if _.isFunction(@pluralRailsName) then @pluralRailsName() else @pluralRailsName
      if _.isArray(response[name])
        @parsePagination(response)
        response[name]
      else
        response
    else
      response
    _.map json, (data) =>
      BackboneExt.Utilities.unwrapAttributes(this, data)

  parsePagination: (response) ->
    @pagination = {
      current: response.current,
      per_page: response.per_page,
      total: response.total_pages
      entries: response.total_entries
    }
    @pagination

  pluralRailsName: ->
    "#{@railsName}s"

  isRails: ->
    @_railsModel
