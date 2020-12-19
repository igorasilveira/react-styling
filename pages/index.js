import Card from "../components/Card";
import styles from "../styles/pages/index.module.css";

function App() {
  return (
    <div className="">
      <header className={`${styles.Header} full-height flex-col`}>
        <h1 className="heading-1">Welcome to <span className="blue-text">React Styling</span></h1>
        <h2 className={`${styles.MutedParagraph} heading-2 text-mute`}>Lets learn the multiple ways that you can style your React components to create beautiful pages like this one.</h2>
        <div className="button-container">
          <a className="button" href="#cards">
              Get Started
          </a>
        </div>
      </header>
      <section id="cards" className={`${styles.CardSection} full-height flex-col center`}>
        <h3 className="section-title heading-1">Cards</h3>
        <div className="flex-row center">
          <Card />
          <Card />
        </div>
        <div className="flex-row center">
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default App;
