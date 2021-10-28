import React, { Suspense,lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
// import MainPage from './Components/MainPage/MainPage';
import FooterTop from './Components/Footer/FooterTop/FooterTop';
import Header from './Components/Header/Header';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// );

// const Header = React.lazy(() => import("./Components/Header/Header"));
// const MainPage = React.lazy(() => import("./Components/MainPage/MainPage"));
// const FooterTop = React.lazy(() =>import("./Components/Footer/FooterTop/FooterTop"));
// const Contact = React.lazy(() => import("./Components/Contact/Contact"));
// const Sidebar = React.lazy(() => import("./Pages/Sidebar/Sidebar"));
// const Administration = React.lazy(() => import("./Components/Adminstration/Administration"));

import Administration from './Components/Adminstration/Administration';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/Sidebar/Sidebar';
import Register from './Components/register/Register';
import Login from './Components/Login/Login';
import page404 from './Components/page404/Page404';
import page500 from './Components/page500/Page500';
import DefaultLayout from "./layout/DefaultLayout";
import Home from './Pages/Home/Home';
import StdIdQuery from './Pages/StdIdQuery/StdIdQuery';
import ResultQuery from "./Pages/ResultQuery/ResultQuery";
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Switch>
          <Route exact path="/dashboard" component={DefaultLayout} />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/student_id_Query" component={StdIdQuery}/>
            <Route exact path="/student_result" component={ResultQuery}/>
            <Route exact path="/principle" component={Administration} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/admin" component={Sidebar} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/500" component={page500} />
            <Route exact path="*" component={page404} />

          </Switch>
        {/* </Suspense> */}
      </Router>
      <FooterTop />
    </div>
  );
}

export default App;
