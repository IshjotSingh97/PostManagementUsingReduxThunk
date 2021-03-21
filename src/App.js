import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About, Contact } from './components/Common'
import Posts from './components/Posts'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleWidget } from './stores/widget';

function App() {
  const isOpen = useSelector(state => state.widget.isOpen)
  const dispatch = useDispatch()
  const toggleApp = () => {
    dispatch(toggleWidget())
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <input type="button" onClick={toggleApp} value={isOpen ? 'hide' : 'show'} />
            {isOpen && (
              <Posts />)
            }
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
