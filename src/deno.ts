import { Application } from '@webviewjs/webview';

const app = new Application();

const window = app.createBrowserWindow();
const webview = window.createWebview({
  url: 'https://deno.land',
  incognito: true,
});

window.setTitle('Deno - WebviewJS');

webview.evaluateScript(
  "setTimeout(() => alert('Hello from WebviewJS x Deno'), 5000)"
);

app.run();
