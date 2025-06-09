import './css/App.css';
import Resume from './components/Resume';

function App() {
  return (
    <div className="site-layout">
      <aside className="site-sidebar">
        <header className="site-header">
          <img src={require('./images/profile.jpg')} alt="Vinod Kumar Mittapally" className="profile-pic" />
          <div className="site-title">Vinod Kumar Mittapally</div>
          <div className="site-tagline">Senior QA Engineer / SDET &mdash; Building quality software, one test at a time.</div>
          <nav className="site-nav">
            <a href="/">Home</a>
            <a href="/resume">Resume</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <footer className="sidebar-footer">
          &copy; {new Date().getFullYear()} Vinod Kumar Mittapally
        </footer>
      </aside>
      <main className="main-content" id="resume">
        <Resume />
      </main>
    </div>
  );
}

export default App;
