'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log('Chisel generator doesn\'t do anything yet. To learn about planned features visit https://github.com/xfiveco/generator-chisel');
  }

});
