import BottomNavigation from "./components/BottomNavigation";
import BreadCrumb from "./components/BreadCrumb";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="bg-gray-100 pb-24">
      <Navbar />
      <SearchBar />
      <BreadCrumb />
      <Categories />
      <Products />
      <BottomNavigation />
    </div>
  );
};

export default App;
