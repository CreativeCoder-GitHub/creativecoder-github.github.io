import Navbar from './Navbar'
import About from './About';
import Projects from './Projects';
import Certificates from './Certificates';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <About />
        <br /> <br />
        <Projects />
        <br /> <br/>
        <Certificates />
      </div>
    </>
  )
}

export default App;