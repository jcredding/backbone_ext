# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "backbone_ext/version"

Gem::Specification.new do |s|
  s.name        = "backbone_ext"
  s.version     = BackboneExt::VERSION
  s.authors     = ["jcredding"]
  s.email       = ["TempestTTU@gmail.com"]
  s.homepage    = ""
  s.summary     = %q{Javascript extensions for Backbone.}
  s.description = %q{Javascript extensions for Backbone.}

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]

  s.add_development_dependency "sprockets",       "~>2.0.0.beta.10"
  s.add_development_dependency "coffee-script",   "~>2.2.0"
end
