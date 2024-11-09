import { Application } from '@webviewjs/webview';

const app = new Application();

const window = app.createBrowserWindow();
const webview = window.createWebview({
  url: 'https://bun.sh',
  incognito: true,
});
window.setTitle('Bun - WebviewJS');

webview.evaluateScript(
  "setTimeout(() => alert('Hello from WebviewJS x Bun'), 5000)"
);

app.run();
