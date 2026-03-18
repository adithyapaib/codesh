export default async function newFn(username) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Editing /${username} | codesh</title>
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
        --brand-hover: oklch(0.85 0.15 20);
        
        --accent-teal: oklch(0.80 0.15 190);   /* Cyber cyan */
        --accent-pink: oklch(0.70 0.22 330);   /* Neon pink */
        
        --border: oklch(0.25 0.03 260); 
        --error: oklch(0.65 0.20 25);
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        background: var(--bg);
        color: var(--fg);
        font-family: 'Space Grotesk', sans-serif;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: clamp(1rem, 3vw, 2rem);
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
      .btn.primary {
        background: var(--brand);
        color: #fff;
        border-color: var(--brand);
      }
      .btn.primary:hover {
        background: var(--brand-hover);
        box-shadow: 0 4px 24px color-mix(in srgb, var(--brand) 25%, transparent);
      }
      .editor-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        position: relative;
      }
      
      #code-input {
        flex: 1;
        width: 100%;
        padding: 1.5rem;
        border: 1px solid var(--border);
        border-radius: 12px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 1.05rem;
        line-height: 1.6;
        resize: none;
        background: var(--surface);
        color: var(--fg);
        outline: none;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      #code-input:focus {
        border-color: var(--accent-teal);
        background: var(--surface-hover);
        box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent-teal) 10%, transparent);
      }
    </style>
  </head>
  <body>
    <form action="/save" method="POST" class="editor-container">
      <header class="header">
        <h1>${username}</h1>
        <div class="actions">
          <button type="submit" class="btn primary">Save Code</button>
          <a href="/" class="btn">Cancel</a>
        </div>
      </header>
      <input type="hidden" name="username" value="${username}">
      <textarea name="value" id="code-input" autofocus placeholder="Paste your code snippet here..." spellcheck="false"></textarea>
    </form>
    <script>
      const textarea = document.getElementById('code-input');
      textarea.addEventListener('keydown', function(e) {
        if(e.key == 'Tab') {
          e.preventDefault();
          var start = this.selectionStart;
          var end = this.selectionEnd;
          this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
          this.selectionStart = this.selectionEnd = start + 4;
        }
      });
    </script>
  </body>
  </html>
  `;
}