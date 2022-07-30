import "./app.css";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/product list/ProductList";

function App() {
    return (
        <div>
            <Intro />
            <About />
            <ProductList />
        </div>
    );
}

export default App;
