import Cards from "./components/Cards";
import Marquees from "./components/Marquees";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

function App() {
  return (
    <div className="w-full bg-[#161618] font-satoshi  text-white">
      <Nav />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  );
}

export default App;
