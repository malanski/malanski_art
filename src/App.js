import { Routes, Route, HashRouter } from 'react-router-dom';

import './App.scss';
import { Aside } from './components/Aside/Aside';

// COMPONENTS
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';

// PAGES
import { Home } from './pages/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact';

function App() {
  return (
    <div className="App">
        <HashRouter>

        <Header></Header>

        <div className='main-grid'>

          {/* <Aside></Aside> */}

          <main>
            <Routes>
              <Route path ='/' element={<Home />} />
              <Route path ='/contact' element={<Contact />} />
            </Routes>
          </main>
        </div>

        {/* <Header></Header> */}

        <Footer></Footer>
      </HashRouter>
    </div>
  );
}

export default App;
