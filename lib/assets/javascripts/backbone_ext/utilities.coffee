# Check that the backbone-rails model has been configured properly.
checkName = (model) ->
  throw("A 'railsName' property must be specified.") unless model.railsName?
  model

BackboneExt.Utilities =
  # Performs the common 'wrapping' done in rails, where a model's attributes are wrapped by
  # the model's name, i.e. User => user[<attr>].
  wrapAttributes: (model, attrs) ->
    checkName(model)
    data = {}
    data[model.railsName] = attrs
    data

  # Performs 'unwrapping' attributes, the opposite of the above.
  unwrapAttributes: (model, attrs) ->
    checkName(model)
    attrs[model.railsName]
