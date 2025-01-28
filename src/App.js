import Categories from "./components/HomePage/Categories";
import Hero from "./components/HomePage/Hero";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div className="bg-third/50">
      <Navbar/>
      <Hero />
      <Categories/>
    </div>
  );
}

export default App;
