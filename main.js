#!/usr/bin/env node

var chokidar = require('chokidar');
var argv = require('minimist')(process.argv.slice(2));
var p = argv.p || "*";
var watcher = chokidar.watch(p, { persistent: true });
var log = console.log.bind(console);

watcher
  .on('add', path => log(path))
  .on('change', path => log(path))