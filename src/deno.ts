import { Application } from '@webviewjs/webview';

const icon = await fetch('https://deno.land/favicon.ico', {
  redirect: 'follow',
})
  .then((res) => res.arrayBuffer())
  .then((buffer) => Buffer.from(buffer));

const app = new Application();

const window = app.createBrowserWindow();
const webview = window.createWebview({
  url: 'https://deno.land',
  incognito: true,
});

window.setWindowIcon(icon);

window.setTitle('Deno - WebviewJS');

app.run();
