# method map from backbone
methodMap = { create: 'POST', update: 'PUT', delete: 'DELETE', read: 'GET' }

# Method to handle a successful response when a model is saved.
# Clears any errors and then sets attributes from the response.
onSaveSuccess = (onSuccess, model, options) ->
  (response) ->
    model.errors = {}
    if model.set(model.parse(response), options)
      onSuccess(model, response) if onSuccess
    else
      false

# Method for handling a failed response when a model is saved.
# If there is a response, this will parse the errors as JSON and
# set them on the model. Then just calls the onError method or
# triggers the event.
onSaveError = (onError, model, options) ->
  (response) ->
    if (response.status == 422) and response.responseText? and not _.isEmpty(response.responseText)
      model.errors = JSON.parse(response.responseText)
    if onError?
      onError(model, response)
    else
      model.trigger('error', model, response, options)

# Pull out only the attributes that were listed with attrSaveable
onlySaveable = (model) ->
  if model.attrSaveable? and not _.isEmpty(model.attrSaveable)
    iterator = (hash, v, k) =>
      hash[k] = v if _.include(model.attrSaveable, k)
      hash
    attrs = _.inject(model.attributes, iterator, {})
    BackboneExt.Utilities.wrapAttributes(model, attrs)
  else
    model.toJSON()

BackboneExt.Model = Backbone.Model.extend
  _railsModel:   true

  attrSaveable: []
  errors:       {}
  routes:       {}

  parse: (response) ->
    BackboneExt.Utilities.unwrapAttributes(this, response)
  toJSON: ->
    BackboneExt.Utilities.wrapAttributes(this, _.clone(@attributes))
  # backbone's default toJSON method
  toBackboneJSON: ->
    _.clone(@attributes)

  save: (attrs, options) ->
    options ||= {}
    if attrs? and this.set(attrs, options)
      model = this
      method = if this.isNew() then 'create' else 'update'
      syncOptions =
        success: onSaveSuccess(options.success, model, options)
        error: onSaveError(options.error, model, options)
      (this.sync || Backbone.sync)(method, this, syncOptions)
      this
    else
      false

  sync: (method, model, options) ->
    type = methodMap[method]
    urlMethod = (if method is 'read' and model.isNew() then 'newURL' else 'url')
    modelJSON = if method in [ 'create', 'update' ]
      JSON.stringify onlySaveable(model)
    modelJSON.authenticity_token = model.authenticity_token if model.authenticity_token?
    requestURL = if _.isFunction(model[urlMethod]) then model[urlMethod]() else model[urlMethod]
    if requestURL?
      params =
        url:          requestURL
        type:         type
        contentType:  'application/json'
        data:         modelJSON
        dataType:     'json'
        processData:  false
        global:       false
        success:      options.success
        error:        options.error
      $.ajax(params)
    else
      throw("A url could not be determined")

  isRails: ->
    @_railsModel
