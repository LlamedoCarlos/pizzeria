
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Register } from './components/Register';
import { Login } from './components/Login';





  export const App = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* <Register /> */}
      < Login />
      <main className="flex-grow-1">
        {/* <Home /> */}
      </main>
      <Footer />
    </div>
    </>
  );
};

