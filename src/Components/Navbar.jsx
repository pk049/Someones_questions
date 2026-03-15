import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #ffffff;
    --border: #e4e4e7;
    --text: #09090b;
    --muted: #71717a;
    --accent-bg: #f4f4f5;
    --radius: 6px;
    --font: 'Geist', system-ui, sans-serif;
  }

  .navbar {
    width: 100%;
    height: 56px;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    padding: 0 24px;
    font-family: var(--font);
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .navbar-logo {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.02em;
    flex-shrink: 0;
    margin-right: 32px;
  }

  .navbar-divider {
    width: 1px;
    height: 20px;
    background: var(--border);
    margin-right: 24px;
    flex-shrink: 0;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nav-link {
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    border-radius: var(--radius);
    font-size: 13.5px;
    font-weight: 500;
    color: var(--muted);
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: var(--font);
    letter-spacing: -0.005em;
    transition: background 0.15s, color 0.15s;
  }

  .nav-link:hover { background: var(--accent-bg); color: var(--text); }
  .nav-link.active { background: var(--accent-bg); color: var(--text); }
`;

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <style>{styles}</style>
      <nav className="navbar">
        <span className="navbar-logo">Dataprep</span>
        <div className="navbar-divider" />
        <div className="navbar-links">
          {["Home", "Companies"].map((item) => (
            <button
              key={item}
              className={`nav-link${active === item ? " active" : ""}`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}