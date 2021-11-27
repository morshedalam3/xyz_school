import { useState } from "react";
import "./sideBar.css";
import SideMenu, { menuItems } from "./SideNav/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MakeAdmin from "../Dashboard/MakeAdmin/MakeAdmin";
import AdminShow from "../Dashboard/AdminShow/AdminShow";
import AddGenTeacher from "../Dashboard/AddGenTeacher/AddGenTeacher";
import AddImage from "../Dashboard/AddImage/AddImage";
// import AddGenTeacher from "../Dashboard/AddGenTeacher/AddGenTeacher";

const Dashboard = () => <h1>Dashboard</h1>;
const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
// const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const ShowAdmin = () => <AdminShow/>;

const  SideBar = () => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container side ${inactive ? "inactive" : "active"}`}>
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))}

          <Switch>
            <Route exact path={"/"}>
              <Dashboard />
            </Route>
            <Route exact path={"/content"}>
              <Content />
            </Route>
            <Route path={"/content/courses"}>
              <Courses />
            </Route>
            <Route path={"/content/videos"}>
              <AddGenTeacher/>
            </Route>
            <Route path={"/image"}>
              <AddImage/>
            </Route>
            <Route exact path={"/content-2"}>
              <Content2 />
            </Route>
            <Route path={"/content-2/courses"}>
              <Courses2 />
            </Route>
            <Route path={"/makeAdmin"}>
              <MakeAdmin />
            </Route>
            <Route path={"/showAdmin"}>
              <ShowAdmin />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default SideBar;
