import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#about">¿Qué es esto?</a>
        <a className="link link-hover" href="https://www.nuevosemestre.com/" target="_blank" rel="noopener noreferrer">Nuevo Semestre</a>
        <a className="link link-hover" href="https://ssb.uasd.edu.do/ssomanager/c/SSB" target="_blank" rel="noopener noreferrer">Portal UASD</a>
        <a className="link link-hover" href="#contributions">Aportaciones</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Logos (comentados para eliminarlos) */}
          {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/luisitopr01/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 2C6.487 2 2 6.487 2 12s4.487 10 10 10 10-4.487 10-10S17.513 2 12 2zm2 16v2H10v-2c0-.981.795-1.776 1.776-1.776H10V13h4v3.224c0 1.136.922 2.058 2.058 2.058H19V13h2v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v7h-2V7h-3v3h2v8z"></path>
            </svg>
          </a> */}
        </div>
      </nav>
      <aside>
        <p>Hecho con amor por <a href="https://www.instagram.com/luisitopr01/" target="_blank" rel="noopener noreferrer">Luisitopr01❤️</a></p>
      </aside>
    </footer>
  );
};

export default Footer;
