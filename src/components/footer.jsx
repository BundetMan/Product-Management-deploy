import React from 'react';

export default function Footer() {
  return (
    <footer
      className="bg-light text-center text-lg-start shadow-sm mt-5"
      style={{ borderTop: '1px solid #eaeaea' }}
    >
      <div className="container p-3 text-center">
        <p className="mb-1">© 2025 Koemchhoeurn Bundet. All rights reserved.</p>
        
        <a
          href="https://github.com/det2005"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-dark"
        >
          <i className="fa-brands fa-github me-1"></i> GitHub
        </a>
      </div>
    </footer>
  );
}
