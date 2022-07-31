import { useContext } from "react";
import "./app.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/product list/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Toggle />
      <Intro />
      <hr />
      <About />
      <hr />
      <ProductList />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
