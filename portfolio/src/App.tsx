import './App.css';

function App() {
  return (
    <div className="portfolio-root">
      <header className="portfolio-header">
        <div className="portfolio-logo">PORTFOLIO</div>
        <nav className="portfolio-nav">
          <a href="#about">ОБО МНЕ</a>
          <a href="#skills">НАВЫКИ</a>
          <a href="#projects">ПРОЕКТЫ</a>
          <a href="#experience">ОПЫТ</a>
          <a href="#education">ОБРАЗОВАНИЕ</a>
          <a href="#contact">КОНТАКТЫ</a>
        </nav>
        <a className="portfolio-btn" href="#contact">СВЯЗАТЬСЯ</a>
      </header>

      <main className="portfolio-main">
        <section className="portfolio-hero">
          <h1>Frontend Developer</h1>
          <p>Создаю современные, отзывчивые и интерактивные веб-приложения с использованием React, TypeScript и современных технологий.</p>
          <div className="portfolio-btn-group">
            <a className="portfolio-btn" href="#projects">МОИ ПРОЕКТЫ</a>
            <a className="portfolio-btn" href="#contact">СВЯЗАТЬСЯ СО МНОЙ</a>
          </div>
          <section className="portfolio-tech-stack">
            <h3>Технологический стек:</h3>
            <p>React • TypeScript • Node.js • CSS/SCSS • Git</p>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
