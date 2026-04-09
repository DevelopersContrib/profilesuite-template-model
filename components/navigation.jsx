export default function Navigation({ domain }) {
  return (
    <nav className="navigation-bg py-3">
      <div className="container">
        <a href="/" className="nav-brand">{domain || 'Portfolio'}</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#biography">Resume</a>
        </div>
      </div>
    </nav>
  );
}
