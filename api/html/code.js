export default async function codeFn(username, code) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${username} | codesh</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
      :root {
        /* Midnight Premium Theme */
        --bg: oklch(0.12 0.02 260); 
        --surface: oklch(0.17 0.03 260); 
        --surface-hover: oklch(0.21 0.03 260); 
        
        --fg: oklch(0.98 0.01 260); 
        --fg-muted: oklch(0.65 0.02 260); 
        
        --brand: oklch(0.75 0.18 20);     /* Neon coral */
        --accent-teal: oklch(0.80 0.15 190);   /* Cyber cyan */
        
        --border: oklch(0.25 0.03 260); 
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        background: var(--bg);
        color: var(--fg);
        font-family: 'Space Grotesk', -apple-system, sans-serif;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: clamp(1rem, 3vw, 2rem);
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .header h1 {
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 700;
        letter-spacing: -0.04em;
        color: var(--fg);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .header h1::before {
        content: '/';
        color: var(--brand);
      }
      .actions {
        display: flex;
        gap: 1rem;
      }
      .btn {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--fg);
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        text-decoration: none;
      }
      .btn:hover {
        background: var(--surface-hover);
        border-color: var(--accent-teal);
        transform: translateY(-2px);
        box-shadow: 0 4px 16px color-mix(in srgb, var(--accent-teal) 15%, transparent);
      }
      .code-container {
        flex: 1;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        position: relative;
        overflow: hidden;
      }
      .code-container::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, transparent, color-mix(in srgb, var(--accent-teal) 5%, transparent));
        pointer-events: none;
        z-index: 0;
      }
      pre {
        font-family: 'JetBrains Mono', monospace;
        font-size: 1.05rem;
        line-height: 1.6;
        color: var(--fg);
        padding: 2rem;
        white-space: pre-wrap;
        word-break: break-all;
        position: relative;
        z-index: 1;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <header class="header">
      <h1>${username}</h1>
      <div class="actions">
        <button id="copyBtn" class="btn">Copy Snippet</button>
        <a href="/" class="btn">Home</a>
      </div>
    </header>
    <div class="code-container">
      <pre id="codeBlock">${code}</pre>
    </div>
    <script>
      document.getElementById('copyBtn').addEventListener('click', (e) => {
        const text = document.getElementById('codeBlock').innerText;
        navigator.clipboard.writeText(text).then(() => {
          e.target.innerText = "Copied!";
          setTimeout(() => e.target.innerText = "Copy Snippet", 2000);
        });
      });
    </script>
  </body>
  </html>
  `;
}