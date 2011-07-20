require 'bundler/gem_tasks'

include Rake::DSL
Bundler::GemHelper.install_tasks

desc "compile"
task :compile, :which do |t, args|
  require 'sprockets'
  sprockets = Sprockets::Environment.new(".")
  sprockets.append_path("lib/assets/javascripts")
  sprockets.append_path("vendor/assets/javascripts")
  sprockets.static_root = "compiled"
  sprockets.precompile("#{args[:which] || "backbone_ext"}.js")
end