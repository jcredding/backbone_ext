if window.ko?

  subscribeAttr = (model, key) ->
    (newValue) ->
      updates = {}
      updates[key] = newValue
      model.set(updates)

  collectObservables = (collection) ->
    collection.map (model) ->
      model.makeObservable()

  BackboneExt.Helpers ||= {}
  BackboneExt.Helpers.Knockout ||= {}
  BackboneExt.Helpers.Knockout.Model =

    makeObservable: ->
      if !@observable?
        @observable = {}
        observedAttrs = {}
        _.each @attributes, (value, key) =>

          if _.isArray(value)
            observedAttrs[key] = ko.observableArray(value)
          else
            observedAttrs[key] = ko.observable(value)

          observedAttrs[key].subscribe(subscribeAttr(this, key))

          @bind "change:#{key}", (model, value) =>
            @observable[@railsName][key](value)

        if @associations
          _.each @associations.config, (value, key) =>
            observedAttrs[key] = this[value.name].makeObservable()
            
        observedAttrs.errors = ko.observable(@errors)
        @bind "errors:set", (model, value) =>
          @observable[@railsName].errors(value)

        @observable[@railsName] = observedAttrs
        @observable.model = this
      @observable

  BackboneExt.Helpers.Knockout.Collection =

    makeObservable: ->
      if !@observable?
        @observable = ko.observableArray(collectObservables(this))

        @bind "reset", (collection) =>
          @observable(collectObservables(this))

        @bind "add", (model, collection) =>
          @observable.push(model.makeObservable())
          @observable.sort (a, b) ->
            a.position() - b.position()

        @bind "remove", (model, collection) =>
          @observable.remove(model.makeObservable())

        @observable.collection = this
      @observable

  _.extend BackboneExt.Model.prototype, BackboneExt.Helpers.Knockout.Model
  _.extend BackboneExt.Collection.prototype, BackboneExt.Helpers.Knockout.Collection
