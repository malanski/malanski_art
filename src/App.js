import { Routes, Route, HashRouter } from 'react-router-dom';

import './App.css';

// COMPONENTS
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
        <HashRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path ='/' element={<Home />} />

          </Routes>
        </main>
        <Footer></Footer>
        <Header></Header>
      </HashRouter>
    </div>
  );
}

export default App;
