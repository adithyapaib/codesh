export default async function handler(req, res) {
  const beautifulHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>codesh | brutally fast code sharing</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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
      --accent-yellow: oklch(0.85 0.18 95);  /* Neon yellow */
      
      --border: oklch(0.25 0.03 260); 
      --error: oklch(0.65 0.20 25);
    }
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      background: var(--bg);
      color: var(--fg);
      font-family: 'Space Grotesk', sans-serif;
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr;
      padding: clamp(1rem, 5vw, 4rem);
      position: relative;
    }
    /* Sleek ambient background */
    body::before {
      content: '';
      position: fixed;
      top: -20vh;
      right: -10vw;
      width: 60vw;
      height: 60vh;
      border-radius: 50%;
      background: radial-gradient(circle, color-mix(in srgb, var(--accent-teal) 8%, transparent) 0%, transparent 70%);
      z-index: -1;
      pointer-events: none;
    }
    body::after {
      content: '';
      position: fixed;
      bottom: -20vh;
      left: -10vw;
      width: 60vw;
      height: 60vh;
      border-radius: 50%;
      background: radial-gradient(circle, color-mix(in srgb, var(--brand) 6%, transparent) 0%, transparent 70%);
      z-index: -1;
      pointer-events: none;
    }

    .github-link {
      position: absolute;
      top: clamp(1rem, 3vw, 2rem);
      right: clamp(1rem, 3vw, 2rem);
      color: var(--fg);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 10;
    }
    .github-link:hover {
      color: var(--accent-pink);
      transform: translate(2px, -2px);
      filter: drop-shadow(-4px 4px 0 var(--fg));
    }

    .wrapper {
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
      align-content: center;
    }
    @media (min-width: 1024px) {
      .wrapper { grid-template-columns: 1fr 1fr; }
    }
    
    h1 {
      font-size: clamp(4rem, 10vw, 8rem);
      line-height: 0.85;
      letter-spacing: -0.06em;
      margin-bottom: 2rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--fg);
      position: relative;
    }
    /* Add a punchy color highlight to part of the heading */
    h1 span.highlight {
      background: linear-gradient(135deg, var(--brand), var(--accent-teal));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      filter: drop-shadow(0 0 16px color-mix(in srgb, var(--brand) 20%, transparent));
    }
    h1 span.highlight::after {
      display: none;
    }
    
    p.subtitle {
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      margin-bottom: 3rem;
      max-width: 35ch;
      font-weight: 500;
      line-height: 1.4;
      color: color-mix(in srgb, var(--fg) 80%, transparent);
    }
    
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
    .btn {
      padding: 1rem 1.8rem;
      font-size: 1.1rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--fg);
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px color-mix(in srgb, var(--accent-teal) 15%, transparent);
      border-color: var(--accent-teal);
      background: var(--surface-hover);
    }
    
    .btn.primary {
      background: var(--fg);
      color: var(--bg);
      border-color: var(--fg);
    }
    .btn.primary:hover {
      background: var(--fg);
      color: var(--bg);
      box-shadow: 0 8px 32px color-mix(in srgb, var(--fg) 25%, transparent);
      transform: translateY(-2px);
    }

    .recents {
      border-left: 4px solid var(--accent-yellow);
      padding-left: clamp(1rem, 3vw, 3rem);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .recents h2 {
      font-size: 2.2rem;
      margin-bottom: 2rem;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .card-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .post-card {
      padding: 1.5rem;
      border: 1px solid var(--border);
      background: var(--surface);
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      text-decoration: none;
      color: inherit;
      display: block;
      position: relative;
      overflow: hidden;
    }
    .post-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, transparent, color-mix(in srgb, var(--accent-teal) 2%, transparent));
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    }
    
    .post-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent-teal);
      background: var(--surface-hover);
      box-shadow: 0 12px 32px color-mix(in srgb, var(--bg) 95%, transparent);
    }
    .post-card:hover::before {
      opacity: 1;
    }
    .post-card h3 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
      color: var(--brand);
      font-weight: 700;
    }
    .post-card pre {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.95rem;
      color: color-mix(in srgb, var(--fg) 70%, transparent);
      white-space: pre-wrap;
      word-break: break-all;
      background: color-mix(in srgb, var(--fg) 5%, transparent);
      padding: 1rem;
      border-radius: 4px;
    }
    
    footer {
      margin-top: 5rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.95rem;
      font-weight: 400;
      color: var(--fg-muted);
    }
    footer span {
      background: linear-gradient(135deg, var(--brand), var(--accent-teal));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }

    /* Custom Form Styles */
    .hidden {
      display: none !important;
    }
    .custom-form {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;
      align-items: center;
      animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .modern-input {
      padding: 1rem 1rem 1rem 1rem;
      font-size: 1.1rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--fg);
      border-radius: 8px;
      outline: none;
      width: 280px;
      max-width: 100%;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .modern-input:focus {
      border-color: var(--brand);
      background: var(--surface-hover);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--brand) 15%, transparent);
    }
    .error-msg {
      color: var(--error);
      font-family: 'JetBrains Mono', monospace;
      font-size: 1rem;
      width: 100%;
      height: 1.2rem;
      font-weight: 700;
      background: color-mix(in srgb, var(--error) 10%, transparent);
      padding: 0.2rem 0.5rem;
      display: inline-block;
      width: auto;
      visibility: hidden;
    }
    .error-msg.visible {
      visibility: visible;
    }
    
    /* ANIMATIONS & MICRO-INTERACTIONS */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes popIn {
      0% { opacity: 0; transform: scale(0.9) translate(10px, -10px); }
      100% { opacity: 1; transform: scale(1) translate(0, 0); }
    }

    .hero > * {
      opacity: 0;
      animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .hero h1 { animation-delay: 0s; }
    .hero p { animation-delay: 0.1s; }
    .hero .actions { animation-delay: 0.2s; }
    .hero footer { animation-delay: 0.3s; }

    .recents h2 {
      opacity: 0;
      animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
    }

    .post-card:not(.skeleton) {
      opacity: 0;
      animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    /* Staggered entrance for up to 10 recent cards */
    .post-card:nth-child(1) { animation-delay: 0.1s; }
    .post-card:nth-child(2) { animation-delay: 0.15s; }
    .post-card:nth-child(3) { animation-delay: 0.2s; }
    .post-card:nth-child(4) { animation-delay: 0.25s; }
    .post-card:nth-child(5) { animation-delay: 0.3s; }
    .post-card:nth-child(6) { animation-delay: 0.35s; }
    .post-card:nth-child(7) { animation-delay: 0.4s; }
    .post-card:nth-child(8) { animation-delay: 0.45s; }
    .post-card:nth-child(9) { animation-delay: 0.5s; }
    .post-card:nth-child(10) { animation-delay: 0.55s; }

    .github-link {
      animation: popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
    }

    /* Skeleton Loading */
    .skeleton {
      pointer-events: none;
      animation: pulse 1.5s infinite ease-in-out;
      opacity: 0;
    }
    .skeleton:nth-child(1) { animation: fadeInUp 0.4s ease forwards, pulse 1.5s infinite ease-in-out 0.4s; }
    .skeleton:nth-child(2) { animation: fadeInUp 0.4s ease 0.1s forwards, pulse 1.5s infinite ease-in-out 0.5s; }
    .skeleton:nth-child(3) { animation: fadeInUp 0.4s ease 0.2s forwards, pulse 1.5s infinite ease-in-out 0.6s; }

    @keyframes pulse {
      0% { opacity: 0.6; }
      50% { opacity: 1; }
      100% { opacity: 0.6; }
    }
    .skeleton-title {
      width: 40%;
      height: 1.5rem;
      background: color-mix(in srgb, var(--fg) 10%, transparent);
      margin-bottom: 1.2rem;
      border-radius: 4px;
    }
    .skeleton-code {
      width: 100%;
      height: 1rem;
      background: color-mix(in srgb, var(--fg) 5%, transparent);
      margin-bottom: 0.8rem;
      border-radius: 4px;
    }
    .skeleton-code.short {
      width: 70%;
    }
    .error-state {
      padding: 1.5rem;
      border: 3px dashed var(--error);
      color: var(--error);
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      background: color-mix(in srgb, var(--error) 5%, transparent);
      opacity: 0;
      animation: popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  </style>
</head>
<body>
  <a href="https://github.com/adithyapaib/codesh" target="_blank" class="github-link" aria-label="GitHub Repository">
    <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
    </svg>
  </a>

  <div class="wrapper">
    <div class="hero">
      <h1>Code<br><span class="highlight">Share.</span></h1>
      <p class="subtitle">Drop your snippets. Get a short link. No fuss involved.</p>
      
      <div id="main-actions" class="actions">
        <button id="btn-custom" class="btn primary">Custom ID</button>
        <button id="btn-rand" class="btn">Random ID</button>
      </div>

      <div id="custom-form-wrapper" class="custom-form hidden">
        <input type="text" id="custom-input" class="modern-input" placeholder="my-snippet" autocomplete="off" spellcheck="false" />
        <button id="custom-go" class="btn primary">Go &rarr;</button>
        <button id="custom-cancel" class="btn">Cancel</button>
        <div id="custom-error" class="error-msg"></div>
      </div>

      <footer>v10 &bull; serverless &bull; <span>midnight vibe</span></footer>
    </div>
    <div class="recents">
      <h2>Recent Drops</h2>
      <div class="card-list" id="recent-container">
        <!-- Skeleton Loaders -->
        <div class="post-card skeleton">
          <div class="skeleton-title"></div>
          <div class="skeleton-code"></div>
          <div class="skeleton-code short"></div>
        </div>
        <div class="post-card skeleton">
          <div class="skeleton-title"></div>
          <div class="skeleton-code"></div>
        </div>
        <div class="post-card skeleton">
          <div class="skeleton-title"></div>
          <div class="skeleton-code"></div>
          <div class="skeleton-code"></div>
          <div class="skeleton-code short"></div>
        </div>
      </div>
    </div>
  </div>
  <script>
    const mainActions = document.getElementById("main-actions");
    const customFormWrapper = document.getElementById("custom-form-wrapper");
    const customInput = document.getElementById("custom-input");
    const customError = document.getElementById("custom-error");

    const showError = (msg) => {
      customError.innerText = msg;
      customError.classList.add("visible");
    };
    const hideError = () => {
      customError.innerText = "";
      customError.classList.remove("visible");
    };

    document.getElementById("btn-custom").addEventListener("click", () => {
      mainActions.classList.add("hidden");
      customFormWrapper.classList.remove("hidden");
      customInput.focus();
      hideError();
    });

    document.getElementById("custom-cancel").addEventListener("click", () => {
      customFormWrapper.classList.add("hidden");
      mainActions.classList.remove("hidden");
      customInput.value = "";
    });

    const attemptCustomId = async () => {
      let a = customInput.value.trim().replace(/\\s/g, "");
      if (!a) {
        showError("✗ Please enter an ID.");
        return;
      }
      if (/^[a-zA-Z0-9]+$/.test(a)) {
        showError("Checking availability...");
        customError.style.color = "var(--fg)";
        customError.style.background = "var(--accent-yellow)";
        try {
          let b = await fetch("/user/" + a);
          b = await b.json();
          if (b) {
            customError.style.color = "var(--error)";
            customError.style.background = "color-mix(in srgb, var(--error) 10%, transparent)";
            showError("✗ Space already exists.");
          } else {
            window.location.href = "/new/" + a;
          }
        } catch(e) {
          showError("✗ Could not verify space.");
        }
      } else {
        showError("✗ Alphanumeric only.");
      }
    };

    document.getElementById("custom-go").addEventListener("click", attemptCustomId);
    customInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") attemptCustomId();
      if (e.key === "Escape") document.getElementById("custom-cancel").click();
    });

    document.getElementById("btn-rand").addEventListener("click", () => {
      let id = Math.random().toString(36).substring(2, 8);
      window.location.href = "/new/" + id;
    });

    (async () => {
      try {
        let res = await fetch("/latest");
        if (!res.ok) throw new Error("Network response was not ok");
        let html = await res.text();
        document.getElementById("recent-container").innerHTML = html;
      } catch (e) {
        console.error("Failed to load recents", e);
        document.getElementById("recent-container").innerHTML = '<div class="error-state">⚠ Failed to load recent drops. Please check your connection.</div>';
      }
    })();
  </script>
</body>
</html>
  `;
  res.status(200).send(beautifulHtml);
}
