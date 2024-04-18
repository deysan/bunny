import { app } from 'index';
import { renderToString } from 'react-dom/server';

const html = `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bunny</title>
  </head>
  <body>
    ${renderToString(app)}
  </body>
</html>`;

const server = Bun.serve({
  port: process.env.PORT || 8080,
  async fetch(request) {
    const url = new URL(request.url);

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
