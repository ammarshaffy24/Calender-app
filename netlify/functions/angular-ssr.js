const { createServer } = require('@netlify/angular-runtime');

exports.handler = createServer({
  distPath: 'dist/zamn/browser',
  indexPath: 'dist/zamn/browser/index.html',
  enableStaticAssets: true,
  enableSpaRedirect: true
}); 