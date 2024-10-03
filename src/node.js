const requireScript = require('node:module').createRequire(__filename);
const { Application } = requireScript('@webviewjs/webview');

const app = new Application();

const window = app.createBrowserWindow({
    incognito: true,
});

window.setTitle('Node - WebviewJS');
window.loadUrl('https://nodejs.org');

window.evaluateScript("setTimeout(() => alert('Hello from WebviewJS x Node'), 5000)");

app.run();