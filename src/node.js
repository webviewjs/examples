const requireScript = require('node:module').createRequire(__filename);
const { Application } = requireScript('@webviewjs/webview');

const app = new Application();

const window = app.createBrowserWindow();

const webview = window.createWebview({
    url: 'https://nodejs.org',
    incognito: true,
});

fetch('https://nodejs.org/favicon.ico', {
    redirect: 'follow'
})
.then(res => res.arrayBuffer())
.then(buffer => window.setWindowIcon(Buffer.from(buffer)));

window.setTitle('Node - WebviewJS');

app.run();