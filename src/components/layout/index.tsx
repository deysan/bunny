import React from 'react';

export function Layout(props: { title: string; children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bunny" />
        <link rel="stylesheet" href="/global.css"></link>
        <title>{props.title}</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}
