import Card from "../components/Card";

function App() {
  return (
    <div className="">
      <header className="text-center bg-gray-100 py-14 h-screen flex flex-col justify-center">
        <h1 className="font-bold text-5xl">Welcome to <span className="text-blue-500">React Styling</span></h1>
        <h2 className="font-normal text-2xl text-gray-500 italic my-5">Lets learn the multiple ways that you can style your React components to create beautiful pages like this one.</h2>
        <div className="p-5">
          <a className="font-bold text-white uppercase bg-blue-500 rounded p-4" href="#cards">
              Get Started
          </a>
        </div>
      </header>
      <section id="cards" className="bg-gray-50 py-14 h-screen flex flex-col justify-center items-center">
        <h3 className="font-bold text-5xl mb-8">Cards</h3>
        <div className="flex w-full justify-center">
          <Card />
          <Card />
        </div>
        <div className="flex w-full justify-center">
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default App;
