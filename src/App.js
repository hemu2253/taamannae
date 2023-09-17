import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Work from "./components/Work";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="main">
      <Header />
      <div class="App">
        <Introduction />
        <Work />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
