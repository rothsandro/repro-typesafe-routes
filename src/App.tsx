import { Link, route } from "typesafe-routes";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const homeRoute = route("/", {}, {});
const aboutRoute = route("/about", {}, {});

function App() {
  console.log(`Route: "${homeRoute({}).$}"`);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={homeRoute.template} element={<Page />} />
        <Route path={aboutRoute.template} element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

function Page() {
  return (
    <div>
      <Link to={homeRoute({})}>Home</Link>
      <Link to={aboutRoute({})}>About</Link>
    </div>
  );
}

export default App;
