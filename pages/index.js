import Card from "../components/Card";
import styles from "../styles/pages/index.module.css";

function App() {
  return (
    <div className="">
      <header style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(243,244,246,1)'
      }} className={`${styles.Header} full-height flex-col`}>
        <h1 style={{
          fontSize: '3rem',
          lineHeight: 1,
          fontWeight: 700,
        }}>Welcome to&nbsp;
          <span style={{
              color: 'rgba(59,130,246,1)'
            }}>
            React Styling
          </span>
        </h1>
        <h2 style={{
          marginTop: '1.25rem',
          marginBottom: '1.25rem',
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'rgba(107,114,128,1)',
        }}>Lets learn the multiple ways that you can style your React components to create beautiful pages like this one.</h2>
        <div style={{
          padding: '1.25rem'
        }}>
          <a style={{
            textTransform: 'uppercase',
            color: 'white',
            padding: '1rem',
            fontWeight: 700,
            borderRadius: '0.25rem',
            backgroundColor: 'rgba(59,130,246,1)',
          }} href="#cards">
              Get Started
          </a>
        </div>
      </header>
      <section id="cards" style={{
          backgroundColor: 'rgba(249,250,251,1)',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <h3 style={{
          fontSize: '3rem',
          lineHeight: 1,
          fontWeight: 700,
          marginBottom: '2rem',
        }}>Cards</h3>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Card />
          <Card />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default App;
