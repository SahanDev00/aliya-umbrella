import Categories from "./components/HomePage/Categories";
import Hero from "./components/HomePage/Hero";
import SampleItems from "./components/HomePage/SampleItems";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div className="bg-third/50">
      <Navbar/>
      <Hero />
      <Categories/>
      <SampleItems/>
    </div>
  );
}

export default App;
