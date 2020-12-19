import Card from "../components/Card";

function App() {
  return (
    <div className="">
      <header className="">
        <h1 className="">Welcome to <span className="">React Styling</span></h1>
        <h2 className="">Lets learn the multiple ways that you can style your React components to create beautiful pages like this one.</h2>
        <div className="">
          <a className="" href="#cards">
              Get Started
          </a>
        </div>
      </header>
      <section id="cards" className="">
        <h3 className="">Cards</h3>
        <div className="">
          <Card />
          <Card />
        </div>
        <div className="">
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default App;
