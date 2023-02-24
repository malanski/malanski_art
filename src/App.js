import { Routes, Route, HashRouter } from 'react-router-dom';

import './App.scss';

// COMPONENTS
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';

// PAGES
import { Home } from './pages/home';
import { Projects } from './pages/projects/projects';

function App() {
  return (
    <div className="App">
        <HashRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/projects' element={<Projects />} />

          </Routes>
        </main>
        <Header></Header>

        <Footer></Footer>
      </HashRouter>
    </div>
  );
}

export default App;
