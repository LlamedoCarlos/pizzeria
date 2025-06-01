import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PizzaList from './components/PizzaList';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <PizzaList />
      <Footer />
      {/* Aquí irán otros componentes, como Home y Footer */}
    </div>
  );
}

export default App;