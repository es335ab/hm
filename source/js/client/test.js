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

