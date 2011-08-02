BackboneExt.Helpers ||= {}
BackboneExt.Helpers.Activation =

  active: ->
    @trigger("active", this)

  activate: ->
    @el.addClass("active")
    this

  deactivate: ->
    @el.removeClass("active")
    this

# TODO should be BackboneExt.View
_.extend Backbone.View.prototype, BackboneExt.Helpers.Activation