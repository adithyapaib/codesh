export default async function handler(req, res) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>404 | not found</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
      :root {
        --bg: oklch(0.98 0.01 200);
        --fg: oklch(0.15 0.05 250);
        --accent: oklch(0.55 0.22 25);
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        background: var(--bg);
        color: var(--fg);
        font-family: 'Space Grotesk', sans-serif;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
      }
      .container { max-width: 600px; }
      h1 {
        font-size: clamp(6rem, 20vw, 15rem);
        line-height: 0.8;
        font-weight: 700;
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.5rem;
        margin-bottom: 3rem;
        font-weight: 300;
      }
      .btn {
        padding: 1.5rem 2rem;
        font-size: 1.2rem;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        border: 2px solid var(--accent);
        background: var(--accent);
        color: #fff;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .btn:hover {
        background: var(--fg);
        border-color: var(--fg);
        transform: translate(6px, -6px);
        box-shadow: -6px 6px 0 var(--accent);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>404</h1>
      <p>The code you're looking for was lost in the void.</p>
      <a href="/" class="btn">Return Home</a>
    </div>
  </body>
  </html>
  `;
  res.status(404).send(html);
}