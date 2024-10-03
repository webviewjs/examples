import { Application } from '@webviewjs/webview';

const app = new Application();

const window = app.createBrowserWindow({
  incognito: true,
});

window.setTitle('Bun - WebviewJS');
window.loadUrl('https://bun.sh');

window.evaluateScript(
  "setTimeout(() => alert('Hello from WebviewJS x Bun'), 5000)"
);

app.run();
