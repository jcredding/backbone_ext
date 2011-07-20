defineAssociation = (object, type, name, options) ->
  object._buildAssociations();
  object.associations.store(type, name, options)
  object[name] = null
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
    iterator = (attrs, options, name) ->
      if this[name]?
        associationJSON = {}
        assocAttrs = BackboneExt.Utilities.unwrapAttributes(this[name], this[name].toJSON());
        attrs[name] = assocAttrs
        attrs
      else
        attrs

    attrs = _.clone(this.attributes)
    attrs = _.inject(this.associations.config, iterator, attrs, this) if this.associations?
    BackboneExt.Utilities.wrapAttributes(this, attrs)

_.extend BackboneExt.Model.prototype, BackboneExt.Helpers.Associations
