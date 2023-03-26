import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import Plans from './pages/plans';
import Details from './pages/details';
import Footer from '../src/components/Footer/index';
import NotFound from './pages/NotFound';
import Contratar from '../src/pages/contratar';
import Pagamento from './icon/pagamentos';
import "./components/Footer/footer.css";
function App() {
  return (
    <Router>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
              <Link className="nav-item nav-link" to='/'>Home</Link>
              <Link className="nav-item nav-link" to='/planos'>Planos</Link>
              <Link className="nav-item nav-link" to='/about'>Sobre o Site</Link>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='planos' element={<Plans />} />
        <Route path='details/:filme' element={<Details />} />
        <Route path='contratar/:val' element={<Contratar />} />
        <Route path='pagamento' element={<Pagamento />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router >
  );
}
export default App;
