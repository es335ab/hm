var $ = jQuery = require('jquery');
require('jquery-mockjax');

// apiをたたくmockサンプル
$.mockjax({
  url: '/api/hoge',
  proxy: '/api/hoge.json'
});
