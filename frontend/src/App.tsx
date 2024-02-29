import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LayoutPages from "./layouts/LayoutPages";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
//import Header from "./components/Header";
//import AuthCallbackPage from "./pages/AuthCallbackPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPages>Home</LayoutPages>} />
        <Route
          path="/search"
          element={<LayoutPages>Search Page</LayoutPages>}
        ></Route>
        ,
        <Route
          path="/register"
          element={
            <LayoutPages>
              <Register />
            </LayoutPages>
          }
        ></Route>
        <Route
          path="/sign-in"
          element={
            <LayoutPages>
              <SignIn />
            </LayoutPages>
          }
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
};
export default App;
