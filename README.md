# Webview Examples

This repository contains examples of how to use the `@webviewjs/webview` crate to create a simple webview application in JavaScript.

## Preview

![Preview](./result/image.png)

## Examples

See the [src](./src) directory for examples.

## Limitations

Node, Deno and Bun can flawlessly run the code. However, upon testing the standalone executables of each runtime, `Deno` seems to throw the following error:

```js
error: Uncaught (in promise) TypeError: LoadLibraryExW failed: The specified module could not be found. (os error 126)
    at Object.Module._extensions..node (node:module:807:20)
    at Module.load (node:module:662:32)
    at Function.Module._load (node:module:534:12)
    at Module.require (node:module:681:19)
    at require (node:module:818:16)
    at Object.<anonymous> (file:///~/deno-compile-DenoApp.exe/webview-examples/node_modules/@webviewjs/webview/index.js:72:29)
    at Object.<anonymous> (file:///~/deno-compile-DenoApp.exe/webview-examples/node_modules/@webviewjs/webview/index.js:325:4)
    at Module._compile (node:module:745:34)
    at Object.Module._extensions..js (node:module:762:10)
    at Module.load (node:module:662:32)
```
