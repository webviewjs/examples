import { Application } from '@webviewjs/webview';

const icon = await fetch('https://bun.sh/favicon.ico', {
  redirect: 'follow',
})
  .then((res) => res.arrayBuffer())
  .then((buffer) => Buffer.from(buffer));

const app = new Application();

const window = app.createBrowserWindow();
const webview = window.createWebview({
  url: 'https://bun.sh',
  incognito: true,
});

window.setWindowIcon(icon);

window.setTitle('Bun - WebviewJS');

app.run();
