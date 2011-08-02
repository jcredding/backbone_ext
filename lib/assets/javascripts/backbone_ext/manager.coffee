###
// DD: original taken from Spine: https://github.com/maccman/spine/blob/master/lib/spine.manager.js
////
// A Manager is basically a state machine that controls a set of controller's 'active' state.
// In other words, you feed a manager controllers, and it'll make sure that only controller has an 'active' state at any one time.
// This is useful whenever you're implementing tabs or separate views inside an application.
//
// By default, whenever a controller is activated, it's element receives a 'active' class.
// You can use this class to show/hide views and tabs via CSS.
// For example:
//
// var users = Users.init();
// var groups = Groups.init();
// Manager.init(users, groups);
//
// users.active();
// assert( users.isActive() );
// assert( users.el.hasClass("active") );
// assert( ! groups.el.hasClass("active") );
//
// groups.active();
// assert( groups.el.hasClass("active") );
// assert( ! users.el.hasClass("active") );
###

class BackboneExt.Manager
  constructor: ->
    _.bindAll(this, "add", "activateView")
    @views = []
    @current = null

  add: (views...) ->
    _.each views, (view) =>
      view.bind("active", this.activateView);
      @views.push(view)
    @views = _.uniq(@views)

  activateView: (view) ->
    if @current?
      @current.deactivate()
    @current = view
    @current.activate()