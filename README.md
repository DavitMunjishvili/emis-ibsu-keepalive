# EMIS Keep-Alive

Stops https://emis.ibsu.edu.ge from logging you out after 5 minutes without mouse movement. Use it on personal devices only, not on shared or university computers.

The site's logout is a client-side timer that only resets on `mousemove`. This extension sends a synthetic `mousemove` to the page every 30 seconds. It makes no network requests and doesn't read your token.

## Install

**Chrome:** open `chrome://extensions`, enable Developer mode, click "Load unpacked", and pick this folder.

**Firefox (128+):** open `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and pick `manifest.json`. Temporary add-ons are removed when Firefox restarts. For a permanent install, sign the extension through addons.mozilla.org (self-distribution).

## Limits

If the server also expires your token after a fixed time, this extension can't prevent that.
