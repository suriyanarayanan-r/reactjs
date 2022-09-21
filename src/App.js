import './App.css';
import Intro from './intro/intro';
import Project from './project/project';
import Welcome from './welcome/welcome';
import Footer from './footer/footer';

function App() {
  return (
    <div>
      <Welcome />
      <Intro />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
