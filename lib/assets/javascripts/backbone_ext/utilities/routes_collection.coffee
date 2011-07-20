addFormat = (path, options) ->
  format = if options['format'] then ".#{options['format']}" else ""
  delete options['format']
  path.replace(/\(\.\:format\)/g, format)

namedSegmentsRegExp = /(\:[a-z_]+)/g
subNamedSegments = (path, options) ->
  matches = path.match(namedSegmentsRegExp)
  _.each matches, (key) =>
    name = key.split(':')[1]
    regexp = new RegExp(key, 'g')
    path = path.replace(regexp, (options[name] || key))
    delete options[name]
    path
  path

generatorMethod = (route) ->
  (options) ->
    options = _.clone(options || {})
    path = route.path
    path = addFormat(path, options)
    path = subNamedSegments(path, options)
    parts = [ path, $.param(options) ]
    parts = _.reject parts, (str) ->
      !str
    parts.join("?")

class BackboneExt.Utilities.RoutesCollection
  constructor: (routes) ->
    routes ||= []

    _.each routes, (route) =>
      @add(route)

  add: (route) ->
    methodName = "#{route.name}_path"
    this[methodName] = generatorMethod(route)
