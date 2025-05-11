import './App.css';

function App() {
  return (
    <div className="portfolio-root">
      <header className="portfolio-header">
        <div className="portfolio-logo">Danil Ivanov</div>
        <nav className="portfolio-nav">
          <a href="#about">Обо мне</a>
          <a href="#projects">Проекты</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>
      <main className="portfolio-main">
        <section className="portfolio-hero">
          <h1>Привет!</h1>
          <p>Я Frontend-разработчик, создаю современные и адаптивные сайты на React.</p>
          <a className="portfolio-btn" href="#projects">Смотреть проекты</a>
        </section>
      </main>
    </div>
  );
}

export default App;
