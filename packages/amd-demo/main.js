require.config({
  baseUrl: '.',
  paths: {
    app: 'modules/app',
    todo: 'modules/todo',
    dom: 'modules/dom',
    jquery: 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min'
    // jquery: 'lib/jquery'
  }
});

require(['jquery'], function($) {
  window.$ = $;
  require(['app'], function(app) {
    app.init();
  });
}); 