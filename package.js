Package.describe({
  name: 'skt:morrisjs',
  version: '0.1.0',
  summary: 'Charting library Morris.js v0.5.1',
  git: 'https://github.com/sekmet/meteor-morrisjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use(['jquery', 'skt:raphael']);
  api.addFiles('morris.css', 'client');
  api.mainModule('morris.js', 'client');
});
