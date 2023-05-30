import Footer from "./components/FooterDiv/Footer";
import Job from "./components/JobDiv/Job";
import NavBar from "./components/NavBarDiv/NavBar";
import Search from "./components/SearchDiv/Search";
import Value from "./components/ValueDiv/Value";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Search />
      <Job/>
      <Value/>
      <Footer />
    </div>
  );
};

export default App;
