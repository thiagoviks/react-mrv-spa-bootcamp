import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import {
  Home,
  Projects,
  Services,
  Blog,
  About,
  Contact,
} from './Component/exportComponent';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <h1>Simple SPA</h1>
        <ul className='header'>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/services'>Services</NavLink>
          </li>
          <li>
            <NavLink to='/blog'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
        <div className='content'>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/services' component={Services} />
          <Route path='/blog' component={Blog} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
