import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Components/Home/Home';
import Navber from './Components/Home/Navber/Navber';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div>
      {/* <Home/> */}
      <Navber/>
      <Banner/>
    </div>
  );
}

export default App;
