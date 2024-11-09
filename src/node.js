const requireScript = require('node:module').createRequire(__filename);
const { Application } = requireScript('@webviewjs/webview');

const app = new Application();

const window = app.createBrowserWindow();

const webview = window.createWebview({
    url: 'https://nodejs.org',
    incognito: true,
});

window.setTitle('Node - WebviewJS');

webview.evaluateScript("setTimeout(() => alert('Hello from WebviewJS x Node'), 5000)");

app.run();