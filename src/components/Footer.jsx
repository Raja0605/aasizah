import React, { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'contactus@aasizah.com';

  const handleCopy = (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <footer className="site-footer">
      <p className="footer-status">Something new is coming.</p>
      <div className="footer-email-container">
        <a
          href={`mailto:${email}`}
          className="footer-email-link"
          aria-label={`Send email to ${email}`}
        >
          {email}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="copy-button"
          title="Copy email address"
          aria-label="Copy email address to clipboard"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </footer>
  );
}
