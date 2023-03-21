import { Routes, Route, HashRouter } from 'react-router-dom';

import './App.scss';
import { Aside } from './components/Aside/Aside';

// COMPONENTS
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';

// PAGES
import { Home } from './pages/home';
import { Contact } from './pages/contact';

import { Mucha00 } from './pages/mucha-pages/mucha00/mucha00';
import { Mucha01 } from './pages/mucha-pages/mucha01/mucha01';
import { Mucha02 } from './pages/mucha-pages/mucha02/mucha02';

import { Painting00 } from './pages/paintings-pages/painting00/painting00';
import { Painting02 } from './pages/paintings-pages/painting02/painting02';
import { Painting01 } from './pages/paintings-pages/painting01';
import { Portrait00 } from './pages/portraits-pages/portrait00/portrait00';
import { Portrait01 } from './pages/portraits-pages/portrait01/portrait01';
import { Portrait02 } from './pages/portraits-pages/portrait02/portrait02';
import { More, Popculture } from './pages/more';

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
              <Route path ='/more' element={<More />} />

              <Route path ='/mucha00' element={<Mucha00 />} />
              <Route path ='/mucha01' element={<Mucha01 />} />
              <Route path ='/mucha02' element={<Mucha02 />} />

              <Route path ='/painting00' element={<Painting00 />} />
              <Route path ='/painting01' element={<Painting01 />} />
              <Route path ='/painting02' element={<Painting02 />} />

              <Route path ='/portrait00' element={<Portrait00 />} />
              <Route path ='/portrait01' element={<Portrait01 />} />
              <Route path ='/portrait02' element={<Portrait02 />} />
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
