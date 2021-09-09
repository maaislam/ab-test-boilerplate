var LiveReload = require('livereload');

const extensionsToWatch = ['js', 'css'];

const liveReloadServer = LiveReload.createServer({
  port: 35729,
  debug: true,
  exts: extensionsToWatch,
});

liveReloadServer.watch(__dirname);
