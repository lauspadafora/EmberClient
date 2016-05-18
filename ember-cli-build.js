/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  //Styles
  app.import('bower_components/AdminLTE/bootstrap/css/bootstrap.min.css');
  app.import('bower_components/AdminLTE/dist/css/AdminLTE.min.css');
  app.import('bower_components/AdminLTE/dist/css/skins/_all-skins.min.css');
  app.import('bower_components/AdminLTE/plugins/iCheck/flat/blue.css');
  app.import('bower_components/AdminLTE/plugins/morris/morris.css');
  app.import('bower_components/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.css');
  app.import('bower_components/AdminLTE/plugins/datepicker/datepicker3.css');
  app.import('bower_components/AdminLTE/plugins/daterangepicker/daterangepicker-bs3.css');
  app.import('bower_components/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css');
  app.import('bower_components/AdminLTE/plugins/datatables/dataTables.bootstrap.css');  
  //Scripts
  app.import('bower_components/AdminLTE/plugins/jQuery/jQuery-2.2.0.min.js');
  app.import('bower_components/AdminLTE/bootstrap/js/bootstrap.min.js');
  app.import('bower_components/AdminLTE/plugins/morris/morris.min.js');
  app.import('bower_components/AdminLTE/plugins/sparkline/jquery.sparkline.min.js');
  app.import('bower_components/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js');
  app.import('bower_components/AdminLTE/plugins/jvectormap/jquery-jvectormap-world-mill-en.js');
  app.import('bower_components/AdminLTE/plugins/knob/jquery.knob.js');
  app.import('bower_components/AdminLTE/plugins/daterangepicker/daterangepicker.js');
  app.import('bower_components/AdminLTE/plugins/datepicker/bootstrap-datepicker.js');
  app.import('bower_components/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js');
  app.import('bower_components/AdminLTE/plugins/slimScroll/jquery.slimscroll.min.js');
  app.import('bower_components/AdminLTE/plugins/fastclick/fastclick.min.js');
  app.import('bower_components/AdminLTE/plugins/datatables/jquery.dataTables.min.js');
  app.import('bower_components/AdminLTE/plugins/datatables/dataTables.bootstrap.min.js');
  app.import('bower_components/AdminLTE/dist/js/app.min.js');  
  app.import('bower_components/AdminLTE/dist/js/demo.js');
  //Fonts
  app.import('bower_components/AdminLTE/bootstrap/fonts/glyphicons-halflings-regular.ttf', {
    destDir: 'fonts'
  }); 
  app.import('bower_components/AdminLTE/bootstrap/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  });
  app.import('bower_components/AdminLTE/bootstrap/fonts/glyphicons-halflings-regular.woff2', {
    destDir: 'fonts'
  });

  return app.toTree();
};
