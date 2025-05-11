import './App.css';

function App() {
  return (
    <div className="cursor-root">
      <header className="cursor-header">
        <div className="cursor-logo">PORTFOLIO</div>
        <nav className="cursor-nav">
          <a href="#about">ОБО МНЕ</a>
          <a href="#skills">НАВЫКИ</a>
          <a href="#projects">ПРОЕКТЫ</a>
          <a href="#experience">ОПЫТ</a>
          <a href="#education">ОБРАЗОВАНИЕ</a>
          <a href="#contact">КОНТАКТЫ</a>
        </nav>
        <a className="cursor-download-btn" href="#contact">СВЯЗАТЬСЯ</a>
      </header>
      <main className="cursor-main">
        <div className="cursor-card">
          <h1 className="cursor-title">Frontend Developer</h1>
          <p className="cursor-subtitle">Создаю современные, отзывчивые и интерактивные веб-приложения с использованием React, TypeScript и современных технологий.</p>
          <div className="cursor-btn-group">
            <a className="cursor-btn primary" href="#projects">МОИ ПРОЕКТЫ</a>
            <a className="cursor-btn" href="#contact">СВЯЗАТЬСЯ СО МНОЙ</a>
          </div>
          <section className="cursor-code-section">
            <div className="cursor-code-placeholder">
              {/* Здесь можно добавить анимированный пример кода или технологический стек */}
              <div style={{ textAlign: 'center' }}>
                <h3>Технологический стек:</h3>
                <p>React • TypeScript • Node.js • CSS/SCSS • Git</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
