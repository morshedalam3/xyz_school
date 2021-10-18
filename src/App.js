import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage/MainPage';
import FooterTop from './Components/Footer/FooterTop/FooterTop';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Administration from './Components/Adminstration/Administration';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/principle">
            <Administration />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
      <FooterTop />
    </div>
  );
}

export default App;
