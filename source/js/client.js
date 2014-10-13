(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $ = require('jquery');
var _ = require('underscore');
var array = [5, 10, 15];

module.exports = (function(){
  console.log($('body').html());
  _.each(array, function(element, index, array) {
    console.log(element + ' : ' + index);
  });

  $.ajax({
    type: 'GET',
    url: '/api/hoge',
    dataType: 'json',
    success: function(res){
      console.log(res);
    }
  })
})();


},{"jquery":"HlZQrA","underscore":"ZKusGn"}],2:[function(require,module,exports){
var $ = require('jquery');
var _ = require('underscore');
var array = [5, 10, 15];

module.exports = {
  aa: 'testtest'
}
},{"jquery":"HlZQrA","underscore":"ZKusGn"}]},{},[1,2]);