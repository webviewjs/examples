import { Application } from '@webviewjs/webview';

const app = new Application();

const window = app.createBrowserWindow({
  incognito: true,
});

window.setTitle('Deno - WebviewJS');
window.loadUrl('https://deno.land');

window.evaluateScript(
  "setTimeout(() => alert('Hello from WebviewJS x Deno'), 5000)"
);

app.run();
