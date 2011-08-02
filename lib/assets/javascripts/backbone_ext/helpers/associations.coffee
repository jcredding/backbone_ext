defineAssociation = (object, type, name, options) ->
  object._buildAssociations();
  object.associations.store(type, name, options)
  object

BackboneExt.Helpers ||= {}
BackboneExt.Helpers.Associations =
  _buildAssociations: ->
    this.associations ||= new BackboneExt.Associations(this);

  belongsTo: (name, options) ->
    defineAssociation(this, "belongsTo", name, options)
  hasMany: (name, options) ->
    defineAssociation(this, "hasMany", name, options)
  hasOne: (name, options) ->
    defineAssociation(this, "hasOne", name, options)

  toJSON: ->
    iterator = (attrs, association, name) ->

      if this[name]?
        associationToJSON = (model) ->
          BackboneExt.Utilities.unwrapAttributes(model, model.toJSON())
        attrs[name] = if association.type != "HasMany"
          associationToJSON(this[name])
        else
          _.map(this[name].models, associationToJSON)
        attrs
      else
        attrs

    attrs = _.clone(this.attributes)
    attrs = _.inject(this.associations.config, iterator, attrs, this) if this.associations?
    BackboneExt.Utilities.wrapAttributes(this, attrs)

_.extend BackboneExt.Model.prototype, BackboneExt.Helpers.Associations
